<script setup>
import { computed } from 'vue';

const props = defineProps({
  horizontal: {
    type: Boolean,
    default: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  height: {
    type: String,
    default: '100%',
  },
});

const classComputer = computed(() => {
  return props.vertical ? ['vertical'] : ['horizontal'];
});
</script>
<script>
export default {
  name: 'GDivider',
};
</script>
<template>
  <div
    class="g-divider"
    :class="classComputer"
    :style="
      vertical
        ? {
            height: height,
          }
        : {}
    "
  ></div>
</template>
