<script setup>
import { ref, getCurrentInstance, computed, reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const instance = getCurrentInstance();
const msgArr = reactive({
  arr: [],
});
const isFinished = ref(false);
const TYPES = ['info', 'warning', 'error'];

const list = computed(() => {
  // console.log(' msgArr.arr)', msgArr.arr);
  return msgArr.arr;
});

instance.appContext.config.globalProperties.handleMessageTrigger = ({
  msg,
  type = 'info',
  title = '',
} = {}) => {
  isFinished.value = false;
  msgArr.arr = msgArr.arr.filter((item) => item.show);

  let obj = {
    id: uuidv4(),
    msgType: TYPES.includes(type) ? type : TYPES[0],
    classArr: ['gt-msg', TYPES.includes(type) ? type : TYPES[0], 'aniIn'],
    msgTitle: title,
    msgText: msg || uuidv4(),
    show: true,
  };

  msgArr.arr = [...msgArr.arr, obj];

  setTimeout(() => {
    msgArr.arr = msgArr.arr.map((item) => {
      if (item.id == obj.id) {
        return {
          ...item,
          classArr: item.classArr.map((cItem) =>
            cItem == 'aniIn' ? 'aniOut' : cItem
          ),
          aniEndStart: new Date().getTime(),
          show: false,
        };
      }
      return item;
    });
    if (msgArr.arr.filter((item) => item.show).length == 0) {
      setTimeout(() => {
        if (
          new Date().getTime() - msgArr.arr[msgArr.arr.length - 1].aniEndStart >
          1500
        ) {
          isFinished.value = true;
        }
      }, 1500);
    }
  }, 2000 + msgArr.arr.length * 500);
};
</script>

<template>
  <div class="gt-msgBox" v-if="!isFinished">
    <div class="relative">
      <div v-for="item in list" :key="item.id" :class="item.classArr">
        <div class="title" v-if="item.msgTitle">{{ item.msgTitle }}</div>
        {{ item.msgText }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-msgBox {
  width: 500px;
  overflow: hidden;
  @apply flex flex-col fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
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

.aniIn {
  animation: fadeInDown 1s linear forwards;
}

.aniOut {
  animation: fadeOutUp 1s linear forwards;
}

@keyframes fadeOutUp {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    -webkit-transform: translate3d(0, -50%, 0);
    transform: translate3d(0, -50%, 0);
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translate3d(0, -50%, 0);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}
</style>
