<script>
export default {
  name: 'GBarGraph',
};
</script>

<script setup>
import echart from '../../../components/echart.vue';
import { toRefs, computed, ref, watch } from 'vue';

const props = defineProps({
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
  showBackground: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  direction: {
    type: String,
    default: () => {
      return 'horizen';
    },
  },
  keys: {
    type: Array,
    default: () => {
      return [];
    },
  },
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
});

const {
  title,
  showTip,
  showBackground,
  showLegend,
  direction,
  keys,
  modelValue,
} = toRefs(props);

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
  if (direction.value === 'horizen') {
    option.xAxis = {
      type: 'category',
      data: keys.value,
    };
    option.yAxis = {
      type: 'value',
    };
  } else {
    option.xAxis = {
      type: 'value',
    };
    option.yAxis = {
      inverse: true,
      type: 'category',
      data: keys.value,
    };
  }
  return option;
});

const dataValue = computed(() => {
  let option = {};
  option.series = [];
  modelValue.value.forEach((record) => {
    option.series.push({
      ...record,
      showBackground: showBackground.value,
      type: 'bar',
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
