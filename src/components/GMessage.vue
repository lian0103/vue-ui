<script setup>
import {
  ref,
  getCurrentInstance,
  computed,
  reactive,
  toRef,
  toRefs,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';

const instance = getCurrentInstance();
const msgArr = reactive({
  arr: [],
});
const TYPES = ['info', 'warning', 'error'];

const list = computed(() => {
  //   console.log(' toRefs(msgArr.value)', toRefs(msgArr.value));
  return msgArr.arr;
});

instance.appContext.config.globalProperties.handleMessageTrigger = ({
  msg,
  type = 'info',
  title = 'hello world',
  time = 4000,
}) => {
  let obj = {
    id: uuidv4(),
    msgType: TYPES.includes(type) ? type : TYPES[0],
    classArr: ['gt-msg', TYPES.includes(type) ? type : TYPES[0], 'ani'],
    msgTitle: title,
    msgText: msg || uuidv4(),
    show: true,
  };

  msgArr.arr = [...msgArr.arr, obj];

  setTimeout(() => {
    msgArr.arr = msgArr.arr.filter((item) => item.id != obj.id);
  }, 2000 + msgArr.arr.length * 1000);
};
</script>

<template>
  <div class="gt-msgBox">
    <div class="relative">
      <div v-for="item in list" :key="item.id" :class="item.classArr">
        <div class="title" v-if="item.msgTitle">{{ item.msgTitle }}</div>
        {{ item.msgText }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.gt-msgBox {
  width: 500px;
  overflow: hidden;
  @apply flex flex-col fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}
.gt-msg {
  width: 100%;
  margin: 10px 0;
  padding: 16px 30px;
  line-height: 23px;
  border: 2px solid;
  letter-spacing: 0.8px;
  border-radius: 8px;
  opacity: 0.3;
  z-index: 100;

  &.info {
    border-color: #bac7e2;
    background-color: #f6f7f9;
    color: #55585e;
  }
  &.warning {
    border-color: #ffedc3;
    background-color: #fefaf1;
    color: #55585e;
  }
  &.error {
    border-color: #ffeae8;
    background-color: #fef6f6;
    color: #55585e;
  }

  .title {
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #303236;
    margin-bottom: 5px;
  }
}

.ani {
  animation: msgMove 1s linear forwards;
}

@keyframes msgMove {
  from {
    opacity: 0.3;
  }
  to {
    opacity: 1;
  }
}
</style>
