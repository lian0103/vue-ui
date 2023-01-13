<script>
export default {
  name: "GFilterChips",
};
</script>
<script setup>
import { computed, toRefs } from "vue";

const emit = defineEmits(["update:modelValue", "update:clickIndex"]);
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  label: {},
  index: {
    type: Number,
    default: null,
  },
});

const { modelValue, label, index } = toRefs(props);

const isActive = computed(() => {
  return modelValue.value === true;
});

const handleClick = () => {
  let result = modelValue.value === true ? false : true;
  emit("update:modelValue", result);
  emit("update:clickIndex", index.value, result);
};
</script>

<template>
  <div
    class="gt-filter-chips"
    :class="isActive ? 'active' : ''"
    @click="handleClick"
  >
    {{ label }}
  </div>
</template>
