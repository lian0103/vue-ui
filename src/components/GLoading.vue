<script setup>
import { ref, getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();
const gLoadinfShow = ref(false);

instance.appContext.config.globalProperties.handleLoadingTrigger = (bool, time = 3000) => {
  if (bool) {
    gLoadinfShow.value = bool;
    setTimeout(() => {
      gLoadinfShow.value = false;
    }, 2000);
  }
  return "isLoading:" + gLoadinfShow.value ;
};

</script>

<template>
  <div v-if="gLoadinfShow" class="gt-loading-wrapper">
    <div class="gt-loadBox relative">
      <div class="gt-loadAni"></div>
      <div class="gt-loadText">載入中</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gt-loading-wrapper {
  width: 100vw;
  height: 100%;
  min-width: 1280px;
  position: absolute;
  z-index: 9990;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  @apply flex justify-center items-center;
  .gt-loadBox {
    width: 140px;
    height: 140px;
    background: #f7e488;
    border-radius: 30px;
  }

  .gt-loadAni {
    z-index: 9999 !important;
    width: 85px;
    height: 85px;
    text-align: center;
    line-height: 140px;
    @apply rounded-3xl;
    border: 4px solid transparent;
    border-left-color: #fff;
    border-radius: 70px;
    animation: namemf 1s linear infinite;
    @apply absolute;
    left: 28px;
    top: 28px;
  }
  .gt-loadText {
    @apply absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
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
