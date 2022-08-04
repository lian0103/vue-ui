<script setup>
import GMessageToast from '../src/index.vue';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const handleMsgToast = () => {
  instance.appContext.config.globalProperties.handleMessageToastTrigger({
    time: 2500,
  });
};


</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">通知-樣式TOAST</g-title>
    <div class="flex justify-start mb-3">
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="second"
          @click="
            () => {
              handleMsgToast();
            }
          "
          >顯示Message Toast</g-button
        ></span
      >
    </div>
  </div>

  <g-message-toast text="儲存完成~!" />
</template>
