<script setup>
import { computed } from "vue";

const { flat, pill, type, noBorder, icon } = defineProps({
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
  },
});

const classStr = computed(() => {
  if (flat) {
    return "gt-btn-flat";
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
    // case 'primary': {
    //   return 'gt-btn-primary';
    //
    // }
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
    :class='[classStr, typeStr, icon ? "iconBtn" : ""]'
    class='gt-btn'
  >
    <g-icon
      :name='icon'
      v-if='icon'
    />
    <slot></slot>
    <div class='textLine'></div>
  </button>
</template>
