/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */

export default {
    'barGraph': ` \`\`\` html 
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
  \`\`\`  `,
    'lineGraph': ` \`\`\` html 
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
  \`\`\`  `,
    'pieGraph': ` \`\`\` html 
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
  \`\`\`  `,
};

