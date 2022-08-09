<script setup>
import { ref, getCurrentInstance } from 'vue';

const isShow = ref(false);
const isFinished = ref(false);
const instance = getCurrentInstance();

const { text } = defineProps({
  text: {
    type: String,
    default: '儲存成功!',
  },
});

instance.appContext.config.globalProperties.handleMessageToastTrigger = ({
  time = 1200,
}) => {
  if (!isShow.value) {
    isShow.value = true;
    setTimeout(() => {
      isShow.value = false;
      isFinished.value = true;
    }, time);
  }
};
</script>
<script>
export default {
  name: 'GMessageToast',
};
</script>
<template>
  <div
    class="gt-message-toast"
    :class="isShow ? 'gt-ani-toast-in' : isFinished ? 'gt-ani-toast-out' : ''"
  >
    <span>{{ text }}</span>
  </div>
</template>
