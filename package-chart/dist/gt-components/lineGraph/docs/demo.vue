<script setup>
import { reactive, ref } from 'vue';
const title = reactive({
  text: 'text',
  subtext: 'subtext',
});

const keys = ['mon', 'tue', 'wed', 'thu', 'fri'];
const values = [
  {
    data: [100, 200, 230, 250, 50],
    name: '第一家廠商',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '第二家廠商',
  },
  {
    data: [100, 200, 230, 250, 50],
    name: '第三家廠商',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '第四廠商',
  },
];
</script>
<template>
  <g-line-graph
    v-model="values"
    :title="title"
    :showTip="true"
    :showLegend="true"
    :keys="keys"
  ></g-line-graph>
</template>
<style scoped>
.toolList {
  margin-bottom: 5px;
}
</style>
