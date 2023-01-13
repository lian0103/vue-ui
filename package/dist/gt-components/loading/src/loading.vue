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
<script>
export default {
  name: 'GLoading',
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
