<script setup>
import { ref, onMounted, computed } from 'vue';

const { percent, auto } = defineProps({
  percent: {
    type: Number,
    default: 0,
  },
  auto: {
    type: Boolean,
    default: false,
  },
});

const percentNum = ref(percent);
const styleComputed = computed(() => {
  // console.log('percentNum', percentNum); 
  return {
    background: `conic-gradient(#55585e 0 ${percentNum.value}%, #aaa 0 100%)`,
  };
});

onMounted(() => {
  if (auto) {
    const time = setInterval(() => {
      percentNum.value = percentNum.value + 10;
      if (percentNum.value > 100) {
        percentNum.value = 0;
      }
    }, 500);
  }
});

</script>
<script>
export default {
  name: "GUploadIcon",
};
</script>
<template>
  <div class="gt-upload-icon">
    <div class="pie" :style="styleComputed"></div>
    <div class="inner"></div>
    <g-icon name="upload" class="w-full svgbox" />
  </div>
</template>