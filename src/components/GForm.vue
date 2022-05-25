<script>
import {
  h,
  ref,
  computed,
  watch,
  getCurrentInstance,
  onMounted,
  reactive,
} from 'vue';

export default {
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
            return new Promise((resolv, reject) => {
              Object.keys(props.rules).forEach((fieldName) => {
                handleRulesValid(inputs[fieldName], fieldName)
                  .then((res) => {
                    validResult[fieldName] = null;
                    resolv(true);
                  })
                  .catch((err) => {
                    validResult[fieldName] = { message: err };
                    // reject(false);
                  });
              });
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
      console.log('handleRulesValid', value);
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
          //   console.log('promiseArr', arr);
          Promise.all(arr)
            .then((res) => {
              validResult[name] = null;
              resolve(true);
            })
            .catch((err) => {
              validResult[name] = { message: err };
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
          .filter((item) => item.type.name === 'gt-input')
          .map((item) => {
            return {
              ...item,
              props: {
                ...item.props,
                parentValue: computed(() =>
                  item.props.name ? props.modelValue[item.props.name] : null
                ),
                validResult: validResult,
                handleValChange,
                handleRulesValid,
              },
            };
          })
      : [];

    return () => h('form', { class: 'gt-form' }, validChilds);
  },
};
</script>

<style lang="scss"></style>
