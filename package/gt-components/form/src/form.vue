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
  setup(props, { slots, emit }) {
    const instance = getCurrentInstance();
    const validResult = reactive({});
    const inputs = reactive(props.modelValue);
    if (props.name) {
      instance.appContext.config.globalProperties['gForms' + '-' + props.name] =
        {
          callValid: () => {
            return new Promise(async (resolv, reject) => {
              for(let fieldName in props.rules){
                // console.log('fieldName',fieldName)
                await handleRulesValid(inputs[fieldName], fieldName)
                  .then((res) => {
                    validResult[fieldName] = null;
                    
                  })
                  .catch((err) => {
                    validResult[fieldName] = { message: err };
            
                  });
              };
              resolv(validResult);
            });
          },
        };

    }

    const handleValChange = (val, name) => {
      inputs[name] = val;
      emit('update:modelValue', inputs);
    };

    const ruleValid = (
      value,
      { require = false, message = '', valid = null }
    ) => {
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
            if (
              itemObj['trigger'] === triggerType ||
              triggerType === 'submit'
            ) {
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
              // console.log(validResult[name]);
              reject(err);
            });
        } else {
          resolve(true);
        }
      });
    };

    const validChilds = slots.default()
      ? slots
          .default()
          // .filter((item) => {
          //   console.log('item.type.name',item.type.name,validSlotNameReg.test(item.type.name))
          //   return validSlotNameReg.test(item.type.name);
          // })
          .map((item) => {
            return {
              ...item,
              children: Array.isArray(item.children)
                ? item.children.map((cItem) => {
                    if (
                      Object.keys(props.modelValue).includes(
                        cItem.props.name
                      ) &&
                      validFormTarget.includes(cItem.type.name)
                    ) {
                      return {
                        ...cItem,
                        props: {
                          ...cItem.props,
                          formParentValue: computed(() =>
                            cItem.props.name
                              ? props.modelValue[cItem.props.name]
                              : null
                          ),
                          validResult: validResult,
                          handleValChange,
                          handleRulesValid,
                        },
                      };
                    }
                    return cItem;
                  })
                : item.children,
              props: validFormTarget.includes(item.type.name)
                ? {
                    ...item.props,
                    formParentValue: computed(() =>
                      item.props.name ? props.modelValue[item.props.name] : null
                    ),
                    parentValue: computed(() =>
                      item.props.name ? props.modelValue[item.props.name] : null
                    ),
                    validResult: validResult,
                    handleValChange,
                    handleRulesValid,
                  }
                : {
                    ...item.props,
                  },
            };
          })
      : [];

    // console.log(validChilds);

    return () => h('form', { class: 'gt-form' }, validChilds);
  },
};
</script>
