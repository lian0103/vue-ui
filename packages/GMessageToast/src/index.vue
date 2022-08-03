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

<template>
  <div
    class="gt-message-toast"
    :class="isShow ? 'gt-ani-toast-in' : isFinished ? 'gt-ani-toast-out' : ''"
  >
    <span>{{ text }}</span>
  </div>
</template>

<style lang="scss">
.gt-message-toast {
  width: 400px;
  height: 80px;
  background-image: url('packages/assets/images/toast.png');
  background-repeat: no-repeat;
  background-position: 0 0;
  overflow: hidden;
  @apply flex justify-center items-start fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  opacity: 0;
  span {
    width: 100px;
    height: 30px;
    padding: 20px 0;
    @apply text-center text-gray1;
  }
}

.gt-ani-toast-in {
  z-index: 100;
  animation: aniToastIn 300ms ease-out forwards;
}

.gt-ani-toast-out {
  z-index: 100;
  animation: aniToastOut 300ms ease-out forwards;
}

@keyframes aniToastIn {
  0% {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, 0%, 0);
  }
}

@keyframes aniToastOut {
  0% {
    opacity: 1;
    transform: translate3d(-50%, 0%, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(-50%, -100%, 0);
  }
}
</style>
