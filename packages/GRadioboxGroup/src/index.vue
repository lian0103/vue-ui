<script>
import { h, ref, computed, watch, toRef } from "vue";

export default {
  name: "GRadioboxGroup",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  setup(props, { slots, emit }) {
    const validChilds = slots.default()
      ? slots
          .default()
          .filter((item) => item.type.name === "GRadiobox")
          .map((item) => {
            return {
              ...item,
              props: {
                ...item.props,
                parentValue: computed(() => props.modelValue),
                handleChildClick: (val) => emit("update:modelValue", val),
              },
            };
          })
      : [];
    return () => h("div", validChilds);
  },
};
</script>
