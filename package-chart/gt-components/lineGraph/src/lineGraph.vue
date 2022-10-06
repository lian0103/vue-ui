<script>
export default {
  name: 'GLineGraph',
};
</script>

<script setup>
import echart from '../../../components/echart.vue';
import { toRefs, computed, ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  height: {
    type: String,
    default: () => {
      return '400px';
    },
  },
  title: {
    type: Object,
    default: () => {
      return {};
    },
  },
  showTip: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  showLegend: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  keys: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const { title, showTip, showLegend, keys, modelValue } = toRefs(props);
const titleValue = computed(() => {
  let option = {};
  option.title = { ...title.value };
  return option;
});

const toolTipValue = computed(() => {
  let option = {};
  if (showTip.value) {
    option.tooltip = {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    };
  }
  return option;
});

const legendValue = computed(() => {
  let option = {};
  if (showLegend.value) {
    option.legend = {};
  }
  return option;
});

const directionValue = computed(() => {
  let option = {};
  option.xAxis = {
    type: 'category',
    data: keys.value,
  };
  option.yAxis = {
    type: 'value',
  };
  return option;
});

const dataValue = computed(() => {
  let option = {};
  option.series = [];
  modelValue.value.forEach((record) => {
    option.series.push({
      ...record,
      type: 'line',
    });
  });
  return option;
});

const options = ref({
  ...directionValue.value,
  ...titleValue.value,
  ...toolTipValue.value,
  ...legendValue.value,
  ...dataValue.value,
});

watch(
  [directionValue, titleValue, toolTipValue, legendValue, dataValue],
  () => {
    options.value = {
      ...directionValue.value,
      ...titleValue.value,
      ...toolTipValue.value,
      ...legendValue.value,
      ...dataValue.value,
    };
  }
);
</script>

<template><echart :height="height" :options="options"></echart></template>
