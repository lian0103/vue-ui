<script setup>
import { computed } from 'vue';
const sizeType = ['sm', 'md', 'lg'];
const props = defineProps({
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
  return props.imgUrl ? {
    'background-image': `url(${props.imgUrl})`,
  }:{};
});

const classComputed = computed(() => {
  let arr = [];

  arr.push(sizeType.includes('size') ? `size-${props.size}` : 'size-md');

  if(!props.imgUrl){
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
