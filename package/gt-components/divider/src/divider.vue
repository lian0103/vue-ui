<script setup>
import { computed } from '@vue/runtime-core';

const { horizontal, vertical } = defineProps({
  horizontal: {
    type: Boolean,
    default: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
});

const classComputer = computed(() => {
  return vertical ? ['vertical'] : ['horizontal'] ;
});
</script>
<script>
export default {
  name: 'GDivider',
};
</script>
<template>
  <div class="g-divider" :class="classComputer"></div>
</template>
