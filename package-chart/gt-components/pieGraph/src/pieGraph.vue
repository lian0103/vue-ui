<script>
export default {
  name: 'GPieGraph',
};
</script>

<script setup>
import echart from '../../../components/echart.vue';
import { onMounted, ref, reactive, toRefs, computed, nextTick } from 'vue';

const props = defineProps({
  modelValue: {
    type: Array,
    default: () => {
      return [];
    },
  },
  showTotalInfo: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  totalTitleList: {
    type: Array,
    default: () => {
      return [];
    },
  },
  showInfo: {
    type: Boolean,
    default: () => {
      return true;
    },
  },

  showTip: {
    type: Boolean,
    default: () => {
      return false;
    },
  },
  showTotal: {
    type: Boolean,
    default: () => {
      return true;
    },
  },
  totalStyle: {
    type: Object,
    default: () => {
      return {};
    },
  },
  height: {
    type: String,
    default: () => {
      return '200px';
    },
  },
});

const chart = ref(null);
const { modelValue, showTip, showTotal, totalStyle, totalTitleList } =
  toRefs(props);

const dataValue = computed(() => {
  let result = [];
  let total = 0;
  modelValue.value.forEach((item) => {
    total += Number(item.value);
    result.push({
      value: item.value,
      name: item.name,
      itemStyle: item.itemStyle,
      label: {
        fontSize: '14',
        position: 'center',
        show: false,
        formatter: item.formatter ? item.formatter : '{b}\n{c}',
        ...item.textStyle,
      },
    });
  });
  if (showTotal.value) {
    result.push({
      value: 0,
      total: total,
      name: 'total',
      label: {
        fontWeight: 400,
        fontSize: '14px',
        formatter: () => {
          return '總數量\n' + total;
        },
        position: 'center',
        show: true,
        ...totalStyle.value,
      },
    });
  }
  return result;
});

const tipValue = computed(() => {
  if (showTip.value) {
    return {
      tooltip: {
        trigger: 'item',
      },
    };
  } else {
    return {};
  }
});
// 設定option內容
const option = reactive({
  textStyle: {
    fontFamily: 'Noto Sans TC',
  },
  ...tipValue.value,
  series: [
    {
      emptyCircleStyle: {
        color: 'rgba(255, 120, 20, 0.8)',
      },
      type: 'pie',
      labelLine: false,
      itemStyle: {
        borderColor: 'rgba(240,240,240, 1)',
        borderType: 'solid',
        borderRadius: 4,
        borderWidth: 4,
      },
      color: [
        'rgba(81, 123, 186, 0.7)',
        'rgba(250, 175, 29, 0.7)',
        'rgba(252, 128, 111, 0.7)',
        'rgba(249, 127, 75, 0.7)',
        'rgba(145, 109, 223, 0.7)',
      ],
      data: dataValue.value,
      radius: ['50%', '90%'],
    },
  ],
});

// 設定滑動事件
onMounted(() => {
  const myChart = chart.value.myChart;
  let series = option.series[0];
  // 滑過當下數值顯示當下數值
  myChart.on('mouseover', function (e) {
    let result = [];
    series.data.forEach((item) => {
      if (item.name === e.name) {
        item.label.show = true;
      } else {
        item.label.show = false;
      }
      result.push(item);
    });
    myChart.setOption({
      series: [
        {
          data: result,
        },
      ],
    });
  });
  // 無滑動時顯示總數
  myChart.on('mouseout', function () {
    let result = [];
    series.data.forEach((item) => {
      if (item.name === 'total') {
        item.label.show = true;
      } else {
        item.label.show = false;
      }
      // }
      result.push(item);
    });
    myChart.setOption({
      series: [
        {
          data: result,
        },
      ],
    });
  });
});

// 資訊總和統計
const totalInfo = computed(() => {
  let result = {};
  computedData.value.forEach((items) => {
    items.forEach((item) => {
      if (item.group === undefined) {
        return;
      }
      if (result[item.group] === undefined) {
        let title = item.group;
        totalTitleList.value.forEach((record) => {
          if (record.group === item.group) {
            title = record.title;
          }
        });
        result[item.group] = {
          amount: 0,
          title: title,
        };
      }
      result[item.group].amount += Number(item.value);
    });
  });
  return result;
});

const computedData = computed(() => {
  return modelValue.value.map((item) => {
    let newItem = JSON.parse(JSON.stringify(item));
    let childrens = newItem.childrens;
    if (typeof childrens === 'undefined') {
      return [newItem];
    }
    delete newItem.childrens;
    return [newItem, ...childrens];
  });
});

// 個項目資訊
const itemInfo = reactive(computedData.value);
// 放入chart顏色
nextTick(() => {
  itemInfo.forEach((item, index) => {
    item[0].color = chart.value.myChart.getVisual(
      {
        dataIndex: index,
      },
      'color'
    );
  });
});
</script>

<template>
  <div class="gt-pieChart-wrapper" :style="{ minHeight: height }">
    <div>
      <echart
        ref="chart"
        :options="option"
        :height="height"
        :width="height"
      ></echart>
    </div>
    <div class="info-box">
      <div class="total-info" v-if="showTotalInfo">
        <div class="item" v-for="(item, key) in totalInfo" :key="key">
          <p>{{ item.title }}：{{ item.amount }}</p>
        </div>
      </div>
      <div class="item-info" v-if="showInfo">
        <template v-for="(items, keys) in itemInfo" :key="keys">
          <div class="item">
            <template v-for="(item, key) in items" :key="keys + '-' + key">
              <div
                class="circle"
                :style="{ backgroundColor: item.color }"
                v-if="item.color"
              ></div>
              <p>{{ item.name }}：{{ item.value }}</p>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
