<script>
export default {
  name: 'GDropdownItem',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, ref } from 'vue';

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
        handleChildClick(value || null);
        isCurrentClick = true;
      }
    "
  >
    <g-icon v-if="icon" class="icon" name="check" />
    <span :class="isCurrent ? 'text-main' : ''"
      ><div class="txt">{{ label }}</div></span
    >
  </div>
</template>