<script setup>
const props = defineProps({
    isEnd:{
        type:Boolean,
        default:false
    }
});
</script>
<script>
export default {
  name: 'GTimelineItem',
};
</script>
<template>
  <div class="gt-timeline-wrapper">
    <div
      class="gt-timeline-item"
      :class="isEnd?'end':''"
    >
      <slot />
  </div>
  </div>
</template>
