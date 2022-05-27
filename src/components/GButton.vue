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
    return 'gt-btn-flat';
  }
  if (pill) {
    return 'gt-btn-pill';
  }
  return 'gt-btn-round';
});

const typeStr = computed(() => {
  switch (type) {
    case 'primary': {
      return 'gt-btn-primary';
      break;
    }
    case 'second': {
      return 'gt-btn-second';
      break;
    }
    case 'yellow': {
      return 'gt-btn-yellow';
      break;
    }
    case 'red': {
      return 'gt-btn-red';
      break;
    }
    case 'white': {
      return 'gt-btn-white';
      break;
    }
  }
});
</script>

<template>
  <button class="gt-btn" :class="[classStr, typeStr]">
    <slot></slot>
    <div class="textLine"></div>
  </button>
</template>

<style lang="scss">
.gt-btn-primary {
  --btn-color: #32a03d;
  --btn-color-hover: #eef5eb;
  --text-color: #fff;
}

.gt-btn-second {
  --btn-color: #517bba;
  --btn-color-hover: #dad9f3;
  --text-color: #fff;
}

.gt-btn-yellow {
  --btn-color: #faaf1d;
  --btn-color-hover: #fdedcd;
  --text-color: #fff;
}

.gt-btn-red {
  --btn-color: #fc806f;
  --btn-color-hover: #fcd8d8;
  --text-color: #fff;
}

.gt-btn-white {
  --btn-color: #55585e;
  --btn-color-hover: #ccc;
  --text-color: #55585e;
  @apply text-gray1 border border-solid border-gray1;
}

.gt-btn {
  min-width: 76px;
  height: 36px;
  color: var(--btn-color);
  @apply flex justify-center items-center;
  @apply overflow-hidden text-center whitespace-nowrap;
  @apply relative py-2 px-4 cursor-pointer transition-all duration-300;
}

.gt-btn-round {
  @apply rounded-lg shadow-md text-white border border-solid border-transparent;
  background: var(--btn-color);
  &:hover {
    background: var(--btn-color-hover);
    color: var(--btn-color);
    border: 1px solid var(--btn-color);
  }
}

.gt-btn-flat {
  border: none !important;
  @apply cursor-pointer;
  color: var(--btn-color);
  &:hover {
    .textLine {
      @apply absolute w-0 h-0;
      bottom: 2px;
      left: 10%;
      border-bottom: 1px solid var(--btn-color);
      animation: textLine 0.3s forwards;
    }
  }
}

.gt-btn-pill {
  @apply bg-white rounded-3xl;
  border: 1px solid var(--btn-color);

  &:hover {
    background: var(--btn-color-hover);
  }
}

@keyframes textLine {
  from {
    width: 0;
  }
  to {
    width: 80%;
  }
}
</style>
