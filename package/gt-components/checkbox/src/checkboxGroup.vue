<script>
import { h, ref, computed, watch, toRef } from 'vue';

export default {
    name: 'GCheckboxGroup',
    props: ['modelValue'],
    emits: ['update:modelValue', 'change'],
    setup(props, { slots, emit }) {
        const handleChildClick = (val) => {
            if (Array.isArray(props.modelValue)) {
                let newArr = props.modelValue.includes(val)
                    ? props.modelValue.filter((item) => item != val)
                    : [...props.modelValue, val];
                emit('update:modelValue', newArr);
                emit('change', newArr);
                console.log('in~~~?');
            } else {
                emit('update:modelValue', [val]);
                emit('change', [val]);
            }
        };

        const genNodeTree = (item) => {
            return item.type.name === 'GCheckbox'
                ? {
                      ...item,
                      props: {
                          ...item.props,
                          parentValue: computed(() => props.modelValue?.includes(item.props.value)),
                          handleChildClick,
                      },
                  }
                : {
                      ...item,
                      children: Array.isArray(item.children)
                          ? item.children.map((cItem) => genNodeTree(cItem))
                          : item.children,
                  };
        };

        const validChilds = slots.default() ? slots.default().map((item) => genNodeTree(item)) : [];

        // console.log(validChilds);
        return () => h('div', validChilds);
    },
};
</script>
