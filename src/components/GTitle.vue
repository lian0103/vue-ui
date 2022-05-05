<script setup>
const { level } = defineProps({
  level: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <div class="w-full title" :class="'level' + level"><slot></slot></div>
</template>

<style lang="scss" scoped>
.title {
  color: #303236;
}

.level0 {
  @apply text-base leading-6;
  word-spacing: 0.8px;
}

.level1 {
  @apply font-bold text-2xl leading-8;
  word-spacing: 1.2px;
}

.level2 {
  @apply font-medium text-xl leading-7;
  word-spacing: 1px;
}

.level3 {
  @apply font-light text-lg leading-6;
  word-spacing: 0.9px;
}
</style>
