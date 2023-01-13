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
          1200
        ) {
          isFinished.value = true;
        }
      }, 1200);
    }
  }, 1000 + msgArr.arr.length * 500);
};
</script>
<script>
export default {
  name: 'GMessage',
};
</script>
<template>
  <div class="gt-msgBox" v-if="!isFinished">
    <div class="gt-relative">
      <div v-for="item in list" :key="item.id" :class="item.classArr">
        <div class="title" v-if="item.msgTitle">{{ item.msgTitle }}</div>
        {{ item.msgText }}
      </div>
    </div>
  </div>
</template>
