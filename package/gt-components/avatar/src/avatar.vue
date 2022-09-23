<script setup>
import { computed } from '@vue/runtime-core';
const sizeType = ['sm', 'md', 'lg'];
const { imgUrl, size, clickCallback } = defineProps({
  imgUrl: {
    type: String,
    default: null,
  },
  size: {
    type: String,
    default: 'md',
  },
});

const styleComputed = computed(() => {
  return imgUrl ? {
    'background-image': `url(${imgUrl})`,
  }:{};
});

const classComputed = computed(() => {
  let arr = [];

  arr.push(sizeType.includes('size') ? `size-${size}` : 'size-md');

  if(!imgUrl){
    arr.push('no-bg-img')
  }

  return arr;
});
</script>
<script>
export default {
  name: 'GAvatar',
};
</script>
<template>
  <div
    class="gt-avatar"
    :class="classComputed"
    :style="styleComputed"
    @click="handleClick"
  ></div>
</template>
