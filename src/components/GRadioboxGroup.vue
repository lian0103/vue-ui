<script>
import { h, ref, computed, watch } from 'vue';

export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    // watch(
    //   () => props.modelValue,
    //   (newValue) => {
    //     console.log('in~~~', newValue);
    //   }
    // );
    const validChilds = slots.default()
      ? slots
          .default()
          .filter((item) => item.type.name === 'gt-radiobox')
          .map((item) => {
            return {
              ...item,
              props: {
                ...item.props,
                parentValue: computed(() => props.modelValue),
                handleChildClick: (val) => emit('update:modelValue', val),
              },
            };
          })
      : [];
    // console.log(validChilds);

    return () => h('div', validChilds);
  },
};
</script>
