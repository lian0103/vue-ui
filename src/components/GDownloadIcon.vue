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
  border-radius: 50%;
  background-color: #aaa;
  color: #55585e;
  overflow: hidden;
  @apply relative;
  .pie {
    @apply absolute;
    left: 0px;
    top: 0px;
    width: 29px;
    height: 29px;
    // background: conic-gradient(#55585e 0 40%, #aaa 0 100%);
  }
  .inner {
    @apply absolute;
    left: 3px;
    top: 3px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: var(--gt-bg-color);
    &.completed {
      left: 0px;
      top: 0px;
      width: 30px;
      height: 30px;
      @apply bg-main;
    }
  }
  .svgbox {
    width: 28px;
    height: 28px;
    // transform: rotate(0.5turn);
    svg {
      width: 10px;
      height: 12px;

      @apply relative;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &.completed {
      svg {
        color: #fff;
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
