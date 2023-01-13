<script setup>
import { computed } from "vue";

const {
  flat,
  flatHover,
  pill,
  type,
  noBorder,
  icon,
  width,
  isLoading,
  iconClasses,
} = defineProps({
  flatHover: {
    type: Boolean,
    default: true,
  },
  flat: {
    type: Boolean,
  },
  pill: {
    type: Boolean,
  },
  type: {
    type: String,
    default: "second",
  },
  noBorder: {
    type: Boolean,
  },
  icon: {
    type: String,
    default: "btnIconName",
  },
  iconNarrowPadding: {
    type: Boolean,
    default: false,
  },
  iconPosition: {
    type: String,
    default: "left",
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
    return flatHover ? "gt-btn-flat" : "gt-btn-flat no-hover";
  }
  if (pill) {
    return "gt-btn-pill";
  }
  if (noBorder) {
    return "gt-btn-round-no-border";
  }

  return "gt-btn-round-no-border";
});

const typeStr = computed(() => {
  switch (type) {
    case "green": {
      return "gt-btn-green";
    }
    case "second": {
      return "gt-btn-second";
    }
    case "yellow": {
      return "gt-btn-yellow";
    }
    case "red": {
      return "gt-btn-red";
    }
    case "black": {
      return "gt-btn-black";
    }
    case "white": {
      return "gt-btn-white";
    }
    case "tag-bule": {
      return "gt-btn-tag-bule";
    }
  }
});
</script>
<script>
export default {
  name: "GButton",
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
    <g-icon
      :name="icon"
      :style="{'margin-right':'4px'}"
      :classes="iconClasses"
      v-if="iconClasses && iconPosition == 'left' && !isLoading"
    />
    <slot></slot>
    <g-icon
      :name="icon"
      :style="{'margin-left':'4px'}"
      :classes="iconClasses"
      v-if="iconClasses && iconPosition == 'right' && !isLoading"
    />
    <div class="textLine"></div>
  </button>
</template>
