<script setup>
import { reactive, ref } from 'vue';
const title = reactive({
  text: 'text',
  subtext: 'subtext',
});
const direction = ref('vertical');
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
const changeBtn = () => {
  if (direction.value === 'horizen') {
    direction.value = 'vertical';
  } else {
    direction.value = 'horizen';
  }
};
</script>
<template>
  <g-button @click="changeBtn">更換方向</g-button>
  <g-divider />
  <g-bar-graph
    v-model="values"
    :title="title"
    :showTip="true"
    :showLegend="true"
    :showBackground="true"
    :direction="direction"
    :keys="keys"
  ></g-bar-graph>
</template>
<style scoped>
.toolList {
  margin-bottom: 5px;
}
</style>
