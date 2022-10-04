<script setup>
import { ref } from 'vue';
const imgs = [
  'https://i.imgur.com/m6NInWZ.jpg',
  'https://i.imgur.com/hmYWWE7.jpg',
];

const img = ref(imgs[0]);
const index = ref(0);

const toggleImg = () => {
  // console.log('toggleImg', index.value);
  if (index.value == 0) {
    img.value = imgs[1];
    index.value = 1;
  } else {
    img.value = imgs[0];
    index.value = 0;
  }
};
</script>
<template>
  <div>
    <g-title :level="1" class="mb-3">頭像</g-title>
    <g-button @click="toggleImg" :width="100">資料改動</g-button>
    <div class="mb-3 px-2 w-full md:w-3/4 flex">
      <g-avatar class="m-2" :imgUrl="img" />
      <g-avatar class="m-2" />
    </div>
  </div>
</template>
