<script setup>
const { level } = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});
</script>
<script>
export default {
  name: "GTitle",
};
</script>
<template>
  <div
    :class='"gt-level" + level'
    class='gt-title'
  >
    <slot></slot>
  </div>
</template>