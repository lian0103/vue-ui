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
    <g-icons v-if="icon" class="icon" name="check" />
    <span :class="isCurrent ? 'text-main' : ''">{{ label }}</span>
  </div>
</template>

<style lang="scss">
.gt-dropdown-item {
  @apply w-full flex justify-start items-center cursor-pointer mx-auto;
  width: calc(100% - 14px);
  white-space: nowrap;
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
    height: 30px;
    padding: 5px 0px 5px 0px;
  }
  &.current {
    @apply text-main;
  }

  &.curClicked {
    @apply bg-gray2 text-main;
  }

  .icon {
    margin-left: 3px;
  }
}
</style>
