<script setup>
import { ref, getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();
const gLoadingShow = ref(false);

instance.appContext.config.globalProperties.handleLoadingTrigger = ({
  time = 3000,
} = {}) => {
  time = typeof parseInt(time) == 'number' ? parseInt(time) : 3000;
  gLoadingShow.value = true;
  setTimeout(() => {
    gLoadingShow.value = false;
  }, time);
};
</script>

<template>
  <div v-if="gLoadingShow" class="gt-loading-wrapper">
    <div class="gt-loadBox gt-relative">
      <div class="gt-loadAni"></div>
      <div class="gt-loadText">載入中</div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-loading-wrapper {
  @apply w-screen h-full;
  min-width: 1280px;
  background: rgba(0, 0, 0, 0.1);
  @apply absolute left-0 top-0 z-top-10;
  @apply flex justify-center items-center;
  .gt-loadBox {
    width: 140px;
    height: 140px;
    border-radius: 30px;
    @apply bg-color5;
  }

  .gt-loadAni {
    @apply z-top text-center border-4 border-solid border-transparent border-l-white rounded-full;
    width: 85px;
    height: 85px;
    @apply absolute;
    left: 28px;
    top: 28px;
    animation: namemf 1s linear infinite;
  }
  .gt-loadText {
    @apply absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2;
  }
}

@keyframes namemf {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
