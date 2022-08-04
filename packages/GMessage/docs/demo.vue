<script setup>
import GMessage from '../src/index.vue';
import { getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const handleMsg = (type) => {
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type,
    title: 'hello~',
  });
};

</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">通知-樣式RECTANGLE</g-title>
    <div class="flex justify-start mb-3">
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="second"
          @click="
            () => {
              handleMsg('info');
            }
          "
          >顯示Message info</g-button
        ></span
      >
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="yellow"
          @click="
            () => {
              handleMsg('warning');
            }
          "
          >顯示Message warning</g-button
        ></span
      >
      <span class="w-1/2 md:w-1/3"
        ><g-button
          pill
          type="red"
          @click="
            () => {
              handleMsg('error');
            }
          "
          >顯示Message error</g-button
        ></span
      >
    </div>
  </div>

  <g-message />
</template>
