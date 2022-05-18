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
  --btn-color: #55585E;
  --btn-color-hover: #ccc;
  --text-color: #55585E;
  border: 1px solid #55585E;
  color: #55585E ;
}

.gt-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 76px;
  height: 36px;
  overflow: hidden;
  text-align: center;
  white-space: nowrap;
  color: var(--btn-color);
  @apply relative py-2 px-4 cursor-pointer transition-all duration-300;
}

.gt-btn-round {
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

.gt-btn-flat {
  border:none !important;
  @apply cursor-pointer;
  color: var(--btn-color);
  &:hover {
    .textLine {
      position: absolute;
      bottom: 2px;
      left: 10%;
      width: 0%;
      height: 0px;
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
