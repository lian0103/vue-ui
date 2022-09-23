<script setup>
import { computed } from 'vue';

const { flat, pill, type, noBorder, icon, width, isLoading , iconClasses } = defineProps({
  flat: {
    type: Boolean,
  },
  pill: {
    type: Boolean,
  },
  type: {
    type: String,
    default: 'second',
  },
  noBorder: {
    type: Boolean,
  },
  icon: {
    type: String,
  },
  iconNarrowPadding: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: 'left',
  },
  width: {
    type: Number,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  iconClasses: {
    type: String,
  },
});

const classStr = computed(() => {
  if (flat) {
    return 'gt-btn-flat';
  }
  if (pill) {
    return 'gt-btn-pill';
  }
  if (noBorder) {
    return 'gt-btn-round-no-border';
  }

  return 'gt-btn-round-no-border';
});

const typeStr = computed(() => {
  switch (type) {
    case 'green': {
      return 'gt-btn-green';
    }
    case 'second': {
      return 'gt-btn-second';
    }
    case 'yellow': {
      return 'gt-btn-yellow';
    }
    case 'red': {
      return 'gt-btn-red';
    }
    case 'black': {
      return 'gt-btn-black';
    }
    case 'white': {
      return 'gt-btn-white';
    }
  }
});
</script>
<script>
export default {
  name: 'GButton',
};
</script>
<template>
  <button
    :class="[
      classStr,
      typeStr,
      iconNarrowPadding ? 'gt-icon-narrow-padding' : '',
      icon && iconPosition ? iconPosition : '',
    ]"
    class="gt-btn"
    :style="width ? { width: `${width}px` } : {}"
  >
    <g-loading-icon v-if="isLoading" />
    <g-icon :name="icon" :classes="iconClasses" v-if="(icon||iconClasses) && iconPosition == 'left' && !isLoading" />
    <slot></slot>
    <g-icon :name="icon"  :classes="iconClasses" v-if="(icon||iconClasses) && iconPosition == 'right' && !isLoading" />
    <div class="textLine"></div>
  </button>
</template>
