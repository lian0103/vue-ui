var e={barGraph:{show:["prop"],prop:`
## \u5C6C\u6027
| \u5C6C\u6027 | \u8AAA\u660E | \u985E\u578B | \u53EF\u9078\u503C | \u9ED8\u8A8D\u503C |
| - | - | - |- | -  |
| v-model | \u6E32\u67D3\u7684\u8CC7\u6599\uFF0C\u5FC5\u586B | Array | | |
| key | \u6A19\u984C\u7684\u503C | Array | | |
| title | \u6A19\u984C\u7684\u5B57 | Object | | |
| showTip | \u986F\u793A\u63D0\u793A\u8A0A\u606F | Boolean | | true |
| showLegend | \u986F\u793A\u5716\u4F8B | Boolean | | true |
| showBackground | \u986F\u793Aitem\u80CC\u666F | Boolean | | true |
| direction | \u9577\u689D\u5716\u65B9\u5411 | String | horizen/vertical | horizen |
| height | \u9AD8\u5EA6 | String |  | 200px |

`,method:`
## \u65B9\u6CD5
| \u65B9\u6CD5 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,event:`
## \u4E8B\u4EF6
| \u4E8B\u4EF6 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,slot:`
## \u63D2\u69FD
| \u63D2\u69FD | \u8AAA\u660E | 
| - | - | 
| | | 

`},lineGraph:{show:["prop"],prop:`
## \u5C6C\u6027
| \u5C6C\u6027 | \u8AAA\u660E | \u985E\u578B | \u53EF\u9078\u503C | \u9ED8\u8A8D\u503C |
| - | - | - |- | -  |
| v-model | \u6E32\u67D3\u7684\u8CC7\u6599\uFF0C\u5FC5\u586B | Array | | |
| key | \u6A19\u984C\u7684\u503C | Array | | |
| title | \u6A19\u984C\u7684\u5B57 | Object | | |
| showTip | \u986F\u793A\u63D0\u793A\u8A0A\u606F | Boolean | | true |
| showLegend | \u986F\u793A\u5716\u4F8B | Boolean | | true |
| height | \u9AD8\u5EA6 | String |  | 200px |

`,method:`
## \u65B9\u6CD5
| \u65B9\u6CD5 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,event:`
## \u4E8B\u4EF6
| \u4E8B\u4EF6 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,slot:`
## \u63D2\u69FD
| \u63D2\u69FD | \u8AAA\u660E | 
| - | - | 
| | | 

`},pieGraph:{show:[],prop:`
## \u5C6C\u6027
| \u5C6C\u6027 | \u8AAA\u660E | \u985E\u578B | \u53EF\u9078\u503C | \u9ED8\u8A8D\u503C |
| - | - | - |- | -  |
| |  |  | | |

`,method:`
## \u65B9\u6CD5
| \u65B9\u6CD5 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,event:`
## \u4E8B\u4EF6
| \u4E8B\u4EF6 | \u8AAA\u660E | \u53C3\u6578 |
| - | - | - |
| | | |

`,slot:`
## \u63D2\u69FD
| \u63D2\u69FD | \u8AAA\u660E | 
| - | - | 
| | | 

`}},t={barGraph:` \`\`\` html 
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
    name: '\u7B2C\u4E00\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '\u7B2C\u4E8C\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 200, 230, 250, 50],
    name: '\u7B2C\u4E09\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '\u7B2C\u56DB\u5EE0\u5546',
  },
];
const changeBtn = () => {
  if (direction.value === 'horizen') {
    direction.value = 'vertical';
  } else {
    direction.value = 'horizen';
  }
};
<\/script>
<template>
  <g-button @click="changeBtn">\u66F4\u63DB\u65B9\u5411</g-button>
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
  \`\`\`  `,lineGraph:` \`\`\` html 
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
    name: '\u7B2C\u4E00\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '\u7B2C\u4E8C\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 200, 230, 250, 50],
    name: '\u7B2C\u4E09\u5BB6\u5EE0\u5546',
  },
  {
    data: [100, 270, 20, 500, 600],
    name: '\u7B2C\u56DB\u5EE0\u5546',
  },
];
<\/script>
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
  \`\`\`  `,pieGraph:` \`\`\` html 
<script setup>
const totalTitleList = [
  {
    group: 'order',
    title: '\u8A02\u55AE\u6578\u91CF',
  },
  {
    group: 'money',
    title: '\u7E3D\u984D',
  },
];
const data = [
  {
    value: 200,
    name: '\u5927\u6A39ec\u8A02\u55AE',
    group: 'order',
    itemStyle: {
      color: 'red',
    },
    textStyle: {
      color: 'red',
      fontSize: '20',
      formatter: () => {
        return 'abcdef' + '
' + 456;
      },
    },
    childrens: [
      {
        value: 5000,
        name: '\u91D1\u984D',
        group: 'money',
      },
    ],
  },
  {
    value: 200,
    name: '\u8766\u76AE\u8A02\u55AE',
    group: 'order',
  },
  {
    value: 800,
    name: '\u5305\u88F9\u8A02\u55AE',
    group: 'order',
  },
  {
    value: 800,
    name: '\u5929\u8C93\u8A02\u55AE',
    group: 'order',
  },
  {
    value: 800,
    name: '\u5E73\u53F0\u8A02\u55AE',
    group: 'order',
  },
];
const totalStyle = {
  formatter: () => {
    return '\u7E3D\u6578\u91CF
' + 5000;
  },
};
<\/script>
<template>
  <g-pie-graph
    height="150px"
    v-model="data"
    :totalTitleList="totalTitleList"
    :totalStyle="totalStyle"
  ></g-pie-graph>
</template>
  \`\`\`  `};export{t as a,e as g};
