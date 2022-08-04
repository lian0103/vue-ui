<script setup>
import GLoading from '../src/index.vue';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();
const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger();
};
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">頁面載入</g-title>
    <g-button pill @click="handleLoading">顯示</g-button>
    <g-loading />
  </div>
</template>
