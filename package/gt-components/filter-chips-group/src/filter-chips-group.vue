<script>
import { h, computed, useSlots, ref, toRefs, watch } from "vue";

export default {
  name: "GFilterChipsGroup",
};
</script>
<script setup>
const emit = defineEmits(["update:modelValue", "update:modelValue"]);
const slots = ref(useSlots());
const props = defineProps({
  modelValue: {},
});
const { modelValue } = toRefs(props);
const chips = ref([]);

const list = computed(() => {
  let result = findAllChips(slots.value.default()).map((child, idx) => {
    chips.value[idx] = idx === modelValue.value ? true : false;
    let result = {
      ...child,
      props: {
        ...child.props,
        index: idx,
        modelValue: chips.value[idx],
        "onUpdate:clickIndex": (idx, result) => {
          updateModelValue(idx, result);
        },
      },
    };
    return result;
  });
  return result;
});

const findAllChips = (slots) => {
  let result = [];
  for (let i = 0; i < slots.length; i++) {
    if (slots[i].children?.length !== 0 && slots[i].children instanceof Array) {
      result.push(...findAllChips(slots[i].children));
    } else if (
      slots[i].type instanceof Object &&
      slots[i].type.name === "GFilterChips"
    ) {
      result.push(slots[i]);
    }
  }
  return result;
};
const updateModelValue = (idx, result) => {
  emit("update:modelValue", idx);
};
const render = computed(() => {
  return h("div", {}, list.value);
});
</script>
<template>
  <render></render>
</template>
