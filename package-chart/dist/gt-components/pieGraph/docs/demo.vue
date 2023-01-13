<script setup>
const totalTitleList = [
  {
    group: 'order',
    title: '訂單數量',
  },
  {
    group: 'money',
    title: '總額',
  },
];
const data = [
  {
    value: 200,
    name: '大樹ec訂單',
    group: 'order',
    itemStyle: {
      color: 'red',
    },
    textStyle: {
      color: 'red',
      fontSize: '20',
      formatter: () => {
        return 'abcdef' + '\n' + 456;
      },
    },
    childrens: [
      {
        value: 5000,
        name: '金額',
        group: 'money',
      },
    ],
  },
  {
    value: 200,
    name: '蝦皮訂單',
    group: 'order',
  },
  {
    value: 800,
    name: '包裹訂單',
    group: 'order',
  },
  {
    value: 800,
    name: '天貓訂單',
    group: 'order',
  },
  {
    value: 800,
    name: '平台訂單',
    group: 'order',
  },
];
const totalStyle = {
  formatter: () => {
    return '總數量\n' + 5000;
  },
};
</script>
<template>
  <g-pie-graph
    height="150px"
    v-model="data"
    :totalTitleList="totalTitleList"
    :totalStyle="totalStyle"
  ></g-pie-graph>
</template>
