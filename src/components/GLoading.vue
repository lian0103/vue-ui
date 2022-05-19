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
    <div class="gt-loadBox relative">
      <div class="gt-loadAni"></div>
      <div class="gt-loadText">載入中</div>
    </div>
  </div>
</template>

<style lang="scss">
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
