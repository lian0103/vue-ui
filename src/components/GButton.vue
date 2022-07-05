<script setup>
import { computed } from 'vue';
import GIcons from './GIcons.vue';

const { flat, pill, type, noBorder, icon } = defineProps({
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
    // case 'primary': {
    //   return 'gt-btn-primary';
    //   break;
    // }
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
    case 'black': {
      return 'gt-btn-black';
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
  <button class="gt-btn" :class="[classStr, typeStr, icon ? 'iconBtn' : '']">
    <g-icons v-if="icon" :name="icon" />
    <slot></slot>
    <div class="textLine"></div>
  </button>
</template>

<style lang="scss">
// .gt-btn-primary {
//   --btn-color: #32a03d;
//   --btn-color-hover: #eef5eb;
//   --text-color: #fff;
// }

.gt-btn-second {
  --btn-color: #517bba;
  --btn-color-hover: #dad9f3;
  --text-color: #fff;
  &.gt-btn-round-no-border {
    --btn-color-hover: #40659f;
  }
}

.gt-btn-yellow {
  --btn-color: #faaf1d;
  --btn-color-hover: #fdedcd;
  --text-color: #fff;
  &.gt-btn-round-no-border {
    --btn-color-hover: #e19e1b;
  }
}

.gt-btn-red {
  --btn-color: #fc806f;
  --btn-color-hover: #fcd8d8;
  --text-color: #fff;
  &.gt-btn-round-no-border {
    --btn-color-hover: #ec7869;
  }
}

.gt-btn-black {
  --btn-color: #55585e;
  --btn-color-hover: #d9d9d9;
  --text-color: #55585e;
  &.gt-btn-round-no-border {
    --btn-color: #f0f0f0;
    color: #55585e !important;
  }
}

.gt-btn-white {
  --btn-color: #55585e;
  --btn-color-hover: #f0f0f0;
  --text-color: #55585e;
}

.gt-btn {
  height: 36px;
  letter-spacing: 0.7px;
  color: var(--btn-color);
  @apply flex justify-center items-center;
  @apply overflow-hidden text-center whitespace-nowrap;
  @apply relative py-2 px-4 cursor-pointer transition-all duration-300;
}

.gt-btn-round {
  @apply rounded-4  text-white border border-solid border-transparent;
  background: var(--btn-color);
  &:hover {
    background: var(--btn-color-hover);
    color: var(--btn-color);
    border: 1px solid var(--btn-color);
  }
  &.gt-btn-white {
    background-color: #fff;
    color: var(--text-color);
    @apply shadow-none;
    &:hover {
      @apply border-transparent;
      background-color: var(--btn-color-hover);
    }
  }
}

.gt-btn-round-no-border {
  font-weight: 400;
  @apply rounded-4  text-white;
  background: var(--btn-color);
  &:hover {
    background: var(--btn-color-hover);
    color: var(--text-color);
  }
  &.gt-btn-white {
    background-color: #fff;
    color: var(--text-color);
    @apply shadow-none;
    &:hover {
      background-color: var(--btn-color-hover);
    }
  }
}

.gt-btn-flat {
  border: none !important;
  height: fit-content;
  padding: 0 2px;
  @apply cursor-pointer relative;
  color: var(--btn-color);
  &:hover {
    .textLine {
      @apply absolute;
      width: fit-content;
      left: 0%;
      bottom: 0;
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

.iconBtn {
  padding: 6px !important;
}

@keyframes textLine {
  from {
    width: 100%;
  }
  to {
    width: 100%;
  }
}
</style>
