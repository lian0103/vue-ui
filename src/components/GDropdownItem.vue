<script>
import { computed } from '@vue/runtime-core';
export default {
  name: 'gt-dropdown-item',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import GIcons from './GIcons.vue';

const { option, label, value, icon, parentValue, handleChildClick } =
  defineProps({
    option: {
      default: {},
    },
    label: {
      default: null,
    },
    value: {
      default: null,
    },
    icon: {
      default: 'calendar',
    },
    parentValue: {
      default: null,
    },
    handleChildClick: {
      default: () => {},
    },
  });
// console.log('label', label);
const isCurrent = computed(() => {
  return parentValue.value === option.value;
});
</script>

<template>
  <div
    v-if="label"
    class="gt-dropdown-item"
    @click="
      () => {
        handleChildClick(value || label);
      }
    "
  >
    <g-icons v-if="icon" :class="isCurrent ? 'text-main' : ''" :name="icon" />
    <span :class="isCurrent ? 'text-main' : ''">{{ label }}</span>
  </div>
</template>

<style lang="scss">
.gt-dropdown-item {
  width: 100%;
  max-width: 140px;
  height: 36px;
  padding: 0 22px 0 12px;
  letter-spacing: 0.7px;
  @apply flex justify-start items-center cursor-pointer;
  &:hover {
    @apply text-main;
  }
  svg {
    width: 22px;
  }
  span {
    overflow: hidden;
  }
}
</style>
