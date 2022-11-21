<script>
export default {
  name: 'GDropdownItem',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, ref } from 'vue';

const {
  option,
  label,
  value,
  icon,
  parentValue,
  handleChildClick
} = defineProps({
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
  return parentValue?.value ? parentValue?.value === option.value : '';
});

const handleMouseLeave = () => {
  // console.log('in');
  isCurrentClick.value = false;
};

const classComputed = computed(() => {
  let arr = [];
  if (isCurrentClick.value) {
    arr.push('curClicked');
  } else if (isCurrent.value) {
    arr.push('current');
  }
  return arr;
});

const emit = defineEmits(['itemClick']);

const handleClick = () => {
  emit('itemClick', { label, value });
};
</script>

<template>
  <div
    v-if="label"
    @mouseleave="handleMouseLeave"
    class="gt-dropdown-item"
    :class="classComputed"
    @click="
      (e) => {
          e.stopPropagation();
          if (handleChildClick) {
            handleChildClick(value || null);
        } else {
          handleClick();
        }

        isCurrentClick = true;
      }
    "
  >
    <g-icon v-if="icon" class="icon" name="check" />
    <span
      :class="isCurrent ? 'text-main' : ''"
      :style="icon ? {} : { 'padding-left': '14px' }"
      ><div class="txt">{{ label }}</div></span
    >
  </div>
</template>
