<script setup>
const { level } = defineProps({
  level: {
    type: Number,
    default: 1,
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

.level1 {
  @apply font-bold text-2xl leading-8 tracking-wider;
}

.level2 {
  @apply font-medium text-xl leading-7 tracking-wide;
}

.level3 {
  @apply font-light text-lg leading-6 tracking-normal;
}
</style>
