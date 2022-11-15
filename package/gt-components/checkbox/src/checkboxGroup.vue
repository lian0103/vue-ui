<script>
import { h, ref, computed, watch, toRef } from "vue";

export default {
  name: "GCheckboxGroup",
  props: ["modelValue"],
  emits: ["update:modelValue", "change"],
  setup(props, { slots, emit }) {
    const handleChildClick = (val) => {
      if (Array.isArray(props.modelValue)) {
        let newArr = props.modelValue.includes(val)
          ? props.modelValue.filter((item) => item != val)
          : [...props.modelValue, val];
        emit("update:modelValue", newArr);
        emit("change", newArr);
      } else {
        emit("update:modelValue", [val]);
        emit("change", [val]);
      }
    };

    const findAllChips = (slots) => {
      let result = [];
      for (let i = 0; i < slots.length; i++) {
        if (
          slots[i].children?.length !== 0 &&
          slots[i].children instanceof Array
        ) {
          result.push(...findAllChips(slots[i].children));
        } else if (
          slots[i].type instanceof Object &&
          slots[i].type.name === "GCheckbox"
        ) {
          result.push(slots[i]);
        }
      }
      return result;
    };

    const validChilds = slots.default()
      ? findAllChips(slots.default()).map((item) => {
          return {
            ...item,
            props: {
              ...item.props,
              parentValue: computed(() => props.modelValue),
              handleChildClick,
            },
          };
        })
      : [];
    // console.log(validChilds);
    return () => h("div", validChilds);
  },
};
</script>
