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
      default: false,
    },
    parentValue: {
      default: null,
    },
    handleChildClick: {
      default: () => {},
    },
  });
const isCurrent = computed(() => {
  return parentValue.value === option.value;
});
</script>

<template>
  <div
    v-if="label"
    class="gt-dropdown-item"
    :class="isCurrent ? 'current' : ''"
    @click.stop="
      () => {
        handleChildClick(value || label);
      }
    "
  >
    <g-icons v-if="icon" class="text-right" name="file" />
    <span :class="isCurrent ? 'text-main' : ''">{{ label }}</span>
  </div>
</template>

<style lang="scss">
.gt-dropdown-item {
  @apply w-full flex justify-start items-center cursor-pointer;
  width: calc(100% - 14px);
  height: 36px;
  padding: 0 6px 0 12px;
  margin: 3px 7px;
  border-radius: 5px;
  letter-spacing: 0.7px;
  &:hover {
    @apply bg-color1;
  }
  svg {
    width: 22px;
  }
  span {
    @apply overflow-hidden;
  }
  &.current {
    @apply bg-gray2;
  }
  .text-right {
    margin-right: 5px;
  }
}
</style>
