<script setup>
const { level } = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="gt-title" :class="'gt-level' + level"><slot></slot></div>
</template>

<style lang="scss">
.gt-title {
  @apply text-gray4;
  width: fit-content;
}

.gt-level0 {
  @apply text-base leading-6 font-light;
  letter-spacing: 0.8px;
}

.gt-level1 {
  @apply font-bold text-2xl leading-8;
  letter-spacing: 1.2px;
}

.gt-level2 {
  @apply text-xl leading-7 font-medium;
  letter-spacing: 1px;
}

.gt-level3 {
  @apply font-normal text-lg leading-6;
  letter-spacing: 0.9px;
}
</style>
