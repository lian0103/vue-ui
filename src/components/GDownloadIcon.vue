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
  <div class="gt-download-icon">
    <div class="pie" :style="styleComputed"></div>
    <div class="inner" :class="percentNum >= 100 ? 'completed' : ''"></div>

    <g-icons v-if="percentNum < 100" name="download_sm" class="w-full svgbox" />
    <g-icons
      v-if="percentNum >= 100"
      name="check"
      class="w-full svgbox completed"
    />
  </div>
</template>

<style lang="scss">
.gt-download-icon {
  width: 28px;
  height: 28px;
  @apply relative rounded-full bg-gray0 text-gray1 overflow-hidden;
  .pie {
    width: 29px;
    height: 29px;
    @apply absolute left-0 top-0;
    // background: conic-gradient(#55585e 0 40%, #aaa 0 100%);
  }
  .inner {
    @apply absolute;
    left: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
    @apply rounded-full bg-gray3;
    &.completed {
      width: 30px;
      height: 30px;
      @apply bg-main left-0 top-0;
    }
  }
  .svgbox {
    width: 28px;
    height: 28px;
    // transform: rotate(0.5turn);
    svg {
      width: 10px;
      height: 12px;
      @apply relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
    }
    &.completed {
      svg {
        @apply text-white;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
