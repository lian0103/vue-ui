<script setup>
import * as echarts from 'echarts/dist/echarts.esm.min.js';
import {
  onMounted,
  onUnmounted,
  ref,
  shallowRef,
  toRefs,
  watch,
} from 'vue';

const props = defineProps({
  options: {
    type: Object,
    default: () => {
      return {};
    },
  },
  minHeight: {
    type: String,
    default: () => {
      return '200px';
    },
  },
  height: {
    type: String,
    default: () => {
      return '100%';
    },
  },
  minWidth: {
    type: String,
    default: () => {
      return '200px';
    },
  },
  width: {
    type: String,
    default: () => {
      return '100%';
    },
  },
});

const chartDom = ref(null);
const myChart = shallowRef(null);
defineExpose({ myChart });
const { options } = toRefs(props);
watch(
  options,
  () => {
    myChart.value.setOption(options.value);
  },
  { deep: true }
);

const addEventListener = () => {
  window.addEventListener('resize', resize);
};

const removeEventListen = () => {
  window.removeEventListener('resize', resize);
};

const resize = () => {
  myChart.value.resize();
};

onMounted(() => {
  myChart.value = echarts.init(chartDom.value);
  myChart.value.setOption(options.value);
  addEventListener();
});

onUnmounted(() => {
  removeEventListen();
});
</script>

<template>
  <div
    ref="chartDom"
    :style="{
      minHeight: minHeight,
      minWidth: minWidth,
      height: height,
      width: width,
    }"
  ></div>
</template>
