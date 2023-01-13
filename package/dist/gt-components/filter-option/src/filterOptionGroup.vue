<script>
import { h, computed } from 'vue';

export default {
  name: 'GFilterOptionGroup',
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const handleChildClick = (target, val) => {
      let result = {};
      if (Object.keys(props.modelValue).includes(target)) {
        Object.keys(props.modelValue).forEach((key) => {
          result[key] = key != target ? false : val;
        });
      }
      emit('update:modelValue', result);
    };

    // console.log(slots.default())
    const validChilds = slots.default()
      ? slots.default().map((item) => {
          return {
            ...item,
            props: {
              ...item.props,
              parentValue: computed(() => props.modelValue[item.props.name]),
              handleChildClick,
            },
          };
        })
      : [];
    // console.log(validChilds);

    return () => h('div', validChilds);
  },
};
</script>
