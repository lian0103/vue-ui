<script setup>
import { computed } from 'vue';

const { flat, pill, type } = defineProps({
  flat: {
    type: Boolean,
  },
  pill: {
    type: Boolean,
  },
  type: {
    type: String,
    default: 'primary',
  },
});

const classStr = computed(() => {
  if (flat) {
    return 'btnFlat';
  }
  if (pill) {
    return 'btnPill';
  }
  return 'btnRound';
});

const typeStr = computed(() => {
  switch (type) {
    case 'primary': {
      return 'btnPrimary';
      break;
    }
    case 'second': {
      return 'btnSecond';
      break;
    }
  }
});
</script>

<template>
  <button class="btn" :class="classStr + ' ' + typeStr">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.btnPrimary {
  --btn-color: #32a03d;
  --btn-color-hover: #eef5eb;
}

.btnSecond {
  --btn-color: #517bba;
  --btn-color-hover: #dad9f3;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 76px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  @apply relative py-2 px-4 cursor-pointer transition-all duration-300;
  color: var(--btn-color);
}

.btnRound {
  @apply font-semibold rounded-lg shadow-md;
  color: #fff;
  background: var(--btn-color);
  border: 1px solid transparent;
  &:hover {
    background: var(--btn-color-hover);
    color: var(--btn-color);
    border: 1px solid var(--btn-color);
  }
}

.btnFlat {
  @apply cursor-pointer;
  color: var(--btn-color);
}

.btnPill {
  @apply bg-white rounded-3xl;
  border: 1px solid var(--btn-color);

  &:hover {
    background: var(--btn-color-hover);
  }
}
</style>
