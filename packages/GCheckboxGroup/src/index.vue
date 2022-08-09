<script>
import { h, ref, computed, watch, toRef } from "vue";

export default {
  name: "GCheckboxGroup",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const handleChildClick = (val) => {
      if (Array.isArray(props.modelValue)) {
        let newArr = props.modelValue.includes(val)
          ? props.modelValue.filter((item) => item != val)
          : [...props.modelValue, val];
        emit("update:modelValue", newArr);
      } else {
        emit("update:modelValue", [val]);
      }
    };

    const validChilds = slots.default()
      ? slots
          .default()
          .filter((item) => item.type.name === "GCheckbox")
          .map((item) => {
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
