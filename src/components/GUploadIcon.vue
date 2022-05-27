<script setup>
import GIcons from './GIcons.vue';
import { ref, onMounted, computed } from 'vue';

const { percent, auto } = defineProps({
  percent: {
    type: Number,
    default: 0,
  },
  auto: {
    type: Boolean,
    default: false,
  },
});

const percentNum = ref(percent);
const styleComputed = computed(() => {
  // console.log('percentNum', percentNum); 
  return {
    background: `conic-gradient(#55585e 0 ${percentNum.value}%, #aaa 0 100%)`,
  };
});

onMounted(() => {
  if (auto) {
    const time = setInterval(() => {
      percentNum.value = percentNum.value + 10;
      if (percentNum.value > 100) {
        percentNum.value = 0;
      }
    }, 500);
  }
});
</script>

<template>
  <div class="gt-upload-icon">
    <div class="pie" :style="styleComputed"></div>
    <div class="inner"></div>
    <g-icons name="upload" class="w-full svgbox" />
  </div>
</template>

<style lang="scss">
.gt-upload-icon {
  width: 28px;
  height: 28px;
  @apply rounded-full bg-gray0 overflow-hidden relative;
  .pie {
    @apply absolute left-0 top-0;
    width: 29px;
    height: 29px;
    // background: conic-gradient(#55585e 0 40%, #aaa 0 100%);
  }
  .inner {
    @apply absolute rounded-full bg-gray3;
    left: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
  }
  .svgbox {
    width: 28px;
    height: 28px;
  }
  svg {
    width: 10px;
    height: 12px;
    @apply relative text-gray1 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
  }
}
</style>
