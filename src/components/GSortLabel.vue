<script setup>
import { computed, ref, watch } from 'vue';
import GIcons from './GIcons.vue';

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

<style lang="scss">
.gt-sort-label-wrapper {
  @apply flex justify-start items-center;
  > span {
    height: 36px;
    @apply text-base leading-9 px-3;
  }
}

.gt-sort-label {
  @apply border border-solid border-color3 cursor-pointer relative;
  width: 112px;
  height: 36px;
  padding: 6px 31px 6px 14px;
  background: #ffffff;
  border-radius: 6px;
  overflow: hidden;
  font-weight: 500;
  .icon {
    @apply absolute;
    @apply text-gray1;
    right: 5px;
    top: 6px;
  }
  &:hover {
    @apply border-gray2;
  }
  &.clicked {
    @apply text-main;
  }
}
</style>
