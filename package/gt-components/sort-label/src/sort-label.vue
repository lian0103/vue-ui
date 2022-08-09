<script>
export default {
  name: "GSortLabel",
};
</script>
<script setup>
import { ref, watch } from 'vue';

const { modelValue, options, labelName } = defineProps({
  modelValue: {},
  options: {
    type: Array,
    default: [],
  },
  labelName: {
    type: String,
  },
});
const emits = defineEmits(['update:modelValue']);

let index = options.findIndex((item) => item.value == modelValue);
const curIndex = ref(index);
const currentOptionLabel = ref(options[index]?.label || null);
const isClicked = ref(false);

watch(
  () => curIndex.value,
  (cur, old) => {
    currentOptionLabel.value = options[cur]?.label || null;
  }
);

const handleLabelChange = () => {
  if (curIndex.value == null) return false;
  isClicked.value = true;
  let newIndex = options[curIndex.value + 1] ? curIndex.value + 1 : 0;
  let val = options[newIndex].value;

  emits('update:modelValue', val);
  curIndex.value = newIndex;
};
</script>

<template>
  <div class="gt-sort-label-wrapper">
    <span if="labelName">{{ labelName }}</span>
    <div
      class="gt-sort-label"
      :class="isClicked ? 'clicked' : ''"
      @click="handleLabelChange"
    >
      {{ currentOptionLabel ? currentOptionLabel : 'N/A' }}
      <g-icons class="icon" name="sequence" size="md" />
    </div>
  </div>
</template>
