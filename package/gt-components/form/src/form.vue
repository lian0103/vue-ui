<script>
import { h, computed, getCurrentInstance, reactive } from 'vue';

const validFormTarget = ['GInput', 'GRadiobox', 'GCheckbox', 'GDropdown'];

export default {
    name: 'GForm',
    props: {
        name: {
            default: null,
        },
        modelValue: {
            default: {},
        },
        rules: {
            type: Object,
            default: {},
        },
    },
    emits: ['update:modelValue'],
    setup(props, { slots, emit, expose }) {
        const instance = getCurrentInstance();
        const validResult = reactive({});
        const inputs = props.modelValue;

        const callValid = () => {
            // console.log(inputs);
            return new Promise(async (resolv, reject) => {
                for (let fieldName in props.rules) {
                    await handleRulesValid(inputs[fieldName], fieldName)
                        .then((res) => {
                            validResult[fieldName] = null;
                        })
                        .catch((err) => {
                            validResult[fieldName] = { message: err };
                        });
                }
                resolv(validResult);
            });
        };

        expose({ callValid });

        const handleValChange = (val, name) => {
            // console.log(val, name);
            inputs[name] = val;
            emit('update:modelValue', inputs);
        };

        const ruleValid = (value, { require = false, message = '', valid = null }) => {
            return new Promise((resolv, reject) => {
                if (require && !value) {
                    reject(message);
                }

                if (valid && !valid(value)) {
                    reject(message);
                }
                resolv(true);
            });
        };

        const handleRulesValid = async (value, name, triggerType = 'submit') => {
            if (validResult[name]) {
                validResult[name] = null;
            }
            let rules = props.rules;
            return new Promise((resolve, reject) => {
                if (rules[name] && Array.isArray(rules[name])) {
                    let arr = [];
                    rules[name].forEach((itemObj) => {
                        if (itemObj['trigger'] === triggerType || triggerType === 'submit') {
                            arr.push(ruleValid(value, itemObj));
                        }
                    });
                    // console.log('promiseArr', arr);
                    Promise.all(arr)
                        .then((res) => {
                            validResult[name] = null;
                            resolve(true);
                        })
                        .catch((err) => {
                            validResult[name] = { message: err };
                            // console.log(name, validResult[name]);
                            reject(err);
                        });
                } else {
                    resolve(true);
                }
            });
        };

        const genNodeTree = (item) => {
            return {
                ...item,
                children: Array.isArray(item.children)
                    ? item.children.map((cItem) => genNodeTree(cItem))
                    : item.children,
                props: validFormTarget.includes(item.type.name)
                    ? {
                          ...item.props,
                          formParentValue: props.modelValue[item.props.name],
                          validResult: validResult,
                          handleValChange,
                          handleRulesValid,
                      }
                    : {
                          ...item.props,
                      },
            };
        };

        const validChilds = slots.default()
            ? slots
                  .default()
                  .map((item) => genNodeTree(item))
            : [];

        // console.log(validChilds);

        return () => h('form', { class: 'gt-form' }, validChilds);
    },
};
</script>
