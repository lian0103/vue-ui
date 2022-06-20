<script>
import { computed, ref } from 'vue';
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
const isCurrentClick = ref(false);

const isCurrent = computed(() => {
  return parentValue.value === option.value;
});

const handleMouseLeave = () => {
  // console.log('in');
  isCurrentClick.value = false;
};
</script>

<template>
  <div
    v-if="label"
    @mouseleave="handleMouseLeave"
    class="gt-dropdown-item"
    :class="isCurrentClick ? 'curClicked' : isCurrent ? 'current' : ''"
    @click.stop="
      () => {
        handleChildClick(value || label);
        isCurrentClick = true;
      }
    "
  >
    <g-icons v-if="icon" class="text-right icon" name="check" />
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
    @apply bg-color1 text-main;
  }
  svg {
    width: 22px;
  }
  span {
    @apply overflow-hidden;
  }
  &.current {
    @apply text-main;
  }

  &.curClicked {
    @apply bg-gray2 text-main;
  }

  .text-right {
    margin-right: 5px;
  }
}
</style>
