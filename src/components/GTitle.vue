<script setup>
const { level } = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="w-full gt-title" :class="'gt-level' + level"><slot></slot></div>
</template>

<style lang="scss">
.gt-title {
  @apply text-gray4;
}

.gt-level0 {
  @apply text-base leading-6;
  letter-spacing: 0.8px;
}

.gt-level1 {
  @apply font-bold text-2xl leading-8;
  letter-spacing: 1.2px;
}

.gt-level2 {
  @apply font-medium text-xl leading-7;
  letter-spacing: 1px;
}

.gt-level3 {
  @apply font-light text-lg leading-6;
  letter-spacing: 0.9px;
}
</style>
