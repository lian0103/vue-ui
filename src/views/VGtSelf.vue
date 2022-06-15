<script setup>
import { ref, getCurrentInstance, reactive, watch, onMounted } from 'vue';
import { useScroll, useElementBounding } from '@vueuse/core';
import {
  GButton,
  GIcons,
  GTitle,
  GLayout,
  GLoading,
  GMessage,
  GCheckbox,
  GRadiobox,
  GSwitch,
  GLoadingIcon,
  GUploadIcon,
  GDownloadIcon,
  GRadioboxGroup,
  GCheckboxGroup,
  GDropdown,
  GDropdownItem,
  GInput,
  GForm,
  GTimePicker,
  GTag,
  GTable,
  GSortLabel,
  GFilterOption,
  GButtonFile,
  GButtonClose,
  GPagination,
  GTabs,
  GImgUpload,
} from '../components/indexGT';
import { v4 as uuidv4 } from 'uuid';

// 打包後引入測試
// import {
//   GButton,
//   GIcons,
//   GTitle,
//   GLayout,
//   GLoading,
//   GMessage,
// } from 'gt-front-ui';

const el = ref();

const scrollList = [
  {
    id: 's1',
    name: '大樹後台layout',
  },
  {
    id: 's2t02',
    name: '圖片上傳',
  },
  {
    id: 's2t0',
    name: '篩選選項',
  },
  {
    id: 's2t01',
    name: '分頁標籤',
  },
  {
    id: 's2t',
    name: '排序標籤',
  },
  {
    id: 's2',
    name: '日期選擇',
  },
  {
    id: 's3',
    name: '輸入框-驗證',
  },
  {
    id: 's4',
    name: '輸入框-樣式',
  },
  {
    id: 's5',
    name: '下拉選項點擊模式',
  },
  {
    id: 's6',
    name: '下拉選項停留模式',
  },
  {
    id: 's7',
    name: '單勾選欄',
  },
  {
    id: 's8',
    name: '群組勾選欄',
  },
  {
    id: 's9',
    name: '單選欄',
  },
  {
    id: 's9-1',
    name: '群組單選欄',
  },
  {
    id: 's10',
    name: '切換開關',
  },
  {
    id: 's11',
    name: '頁面載入中',
  },
  {
    id: 's12',
    name: '載入中',
  },
  {
    id: 's13',
    name: '上傳中',
  },
  {
    id: 's14',
    name: '下載中',
  },
  {
    id: 's15',
    name: '通知',
  },
  {
    id: 's16',
    name: '標題',
  },
  {
    id: 's17',
    name: '按鈕-PILL',
  },
  {
    id: 's18',
    name: '按鈕-FLAT-1',
  },
  {
    id: 's19',
    name: '按鈕-FLAT-2',
  },
  {
    id: 's20',
    name: '按鈕-ROUND',
  },
  {
    id: 's21',
    name: '圖標',
  },
  {
    id: 's22',
    name: '標籤',
  },
  {
    id: 's23',
    name: '表格',
  },
  {
    id: 's24',
    name: '分頁選擇',
  },
];
const curScroll = ref('s1');
const scrollTopArr = ref(null);
const isHandControlScroll = ref(false);

const handleScroll = (id) => {
  isHandControlScroll.value = true;
  curScroll.value = id;
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

const handleScrollEvt = (evt) => {
  let top = parseInt(evt.srcElement.scrollTop);
  let idx = scrollTopArr.value.findIndex((ele) => ele > top);

  if (!isHandControlScroll.value && scrollList[idx]) {
    curScroll.value = scrollList[idx].id;
    document
      .getElementById(`r-${scrollList[idx].id}`)
      .scrollIntoView({ behavior: 'smooth' });
  } else {
    setTimeout(() => {
      isHandControlScroll.value = false;
    }, 1000);
  }
};

onMounted(() => {
  scrollTopArr.value = scrollList.map((item) => {
    // console.log(item.id, document.getElementById(item.id));
    return Math.floor(
      document.getElementById(item.id).getBoundingClientRect()?.y
    );
  });
  // console.log('scrollTopArr.value', scrollTopArr.value);
});

const instance = getCurrentInstance();
const icons = [
  'up',
  'arrowDown',
  'arrowLeft',
  'calendar',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
];

const inputs = reactive({
  checkedArr: ['2', 22, 2, 8],
  checked0: true,
  checked1: false,
  checked2: true,
  checked3: false,
  radio0: true,
  radio1: false,
  radio2: true,
  radio3: false,
  radio4: 2,
  switch0: false,
  switch1: true,
  switch2: false,
  switch3: true,
  dropdown0: 2,
  dropdown1: 3,
  input0: 'hello',
  input2: 123,
  input1: '',
  test: {
    test1: 'hi~',
    test2: 123,
    test3: '',
  },
  time1: '',
  curSortLabelValue: 'ASC',
});

const formRule = {
  test1: [
    {
      require: true,
      message: '必填',
      trigger: 'blur',
    },
    {
      valid: (val) => ('' + val).length > 3,
      message: '長度大於3',
      trigger: 'blur',
    },
  ],
  test2: [
    {
      valid: (val) => ('' + val).length > 10,
      message: '長度大於10',
    },
  ],
};

const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '價格',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '標籤',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
    { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    {
      product: 'dddddddddddddddddddddddd',
      price: 400,
      storage: 65,
      id: uuidv4(),
    },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
    { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
  ],
  filterOtions: {},
  isLoading: false,
});

const showLoading = () => {
  tableInfo.isLoading = true;
  setTimeout(() => {
    tableInfo.isLoading = false;
  }, 3000);
};

const curPage = ref(1);

const handleUpdatePage = (page) => {
  // console.log('~~~', page);
  curPage.value = page;
};

const handleSubmit = () => {
  // console.log("instance.appContext.config.globalProperties.gForms",instance.appContext.config.globalProperties)
  instance.appContext.config.globalProperties['gForms-form1'].callValid();
};

const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger();
};
const handleMsg = (type) => {
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type,
    title: 'hello~',
  });
};
const handleRowClick = (row) => {
  // console.log(row);
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type: 'info',
    title: 'handle click',
    msg: `row id:${row.id}`,
  });
};
const handleTableChecked = () => {
  let arr =
    instance.appContext.config.globalProperties[
      'gt-table-products'
    ].getCheckedList();
  arr = arr.map((obj) => obj.id);
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type: 'info',
    title: '已選擇',
    msg: `row ids:${arr.join(',')}`,
  });
};

const handleFile = (file) => {
  // console.log(file);
};

const showTextSwitch = reactive({
  layoutText: false,
  loadText: false,
  msgText: false,
  loadText: false,
  inputsText0: false,
  inputsText0_1: false,
  inputsText1: false,
  inputsText1_1: false,
  inputsText2: false,
  loadingText0: false,
  loadingText1: false,
  loadingText2: false,
  titleText: false,
  buttonText0: false,
  buttonText1: false,
  buttonText2: false,
  buttonText3: false,
  dropdown0: false,
  dropdown1: false,
  inputsText3: false,
  inputsText4: false,
  inputsTime1: false,
  tagsText: false,
  tableText: false,
  sortLabelText: false,
  filterOptionText: false,
  paginationText: false,
  tabsText: false,
  imgUploadText: false,
});

const layoutText = `\`\`\` html
<g-layout headText="Great Tree UI" title="GT開發">
  <template #sidebar> ... </template>
  <template #header> ... </template>
  <template #content> ... </template>
</g-layout>
 \`\`\`
`;

const loadText = `\`\`\` js
  import { getCurrentInstance } from 'vue';
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties.handleLoadingTrigger({
    time:1000 //Number(ms)
  });
 \`\`\`

 \`\`\` html
  <!-- 在頁面中加入 -->
  <g-loading />
 \`\`\`
 `;

const msgText = `\`\`\` js
  import { getCurrentInstance } from 'vue';
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type, //'info', 'warning', 'error'
    title, //String
    msg, //String
  });
 \`\`\`

 \`\`\` html
  <!-- 在頁面中加入 -->
  <g-message />
 \`\`\`

 `;

const inputsText0 = `\`\`\` html
<g-checkbox class="mr-4" v-model="inputs.checked0" />
<g-checkbox class="mr-4" v-model="inputs.checked3" />
<g-checkbox class="mr-4" v-model="inputs.checked1" disabled />
<g-checkbox class="mr-4" v-model="inputs.checked2" disabled />
 \`\`\`
`;
const inputsText0_1 = `\`\`\` html
<g-checkbox-group v-model="inputs.checkedArr">
  <g-checkbox class="mr-4" :value="2" label="選項2" />
  <g-checkbox class="mr-4" :value="4" label="選項4" />
  <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
  <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
</g-checkbox-group>
 \`\`\`
`;

const inputsText1 = `\`\`\` html
<g-radiobox class="mr-4" v-model="inputs.radio0" />
<g-radiobox class="mr-4" v-model="inputs.radio1" />
<g-radiobox class="mr-4" v-model="inputs.radio2" disabled />
<g-radiobox class="mr-4" v-model="inputs.radio3" disabled />
 \`\`\`
`;
const inputsText1_1 = `\`\`\` html
<g-radiobox-group v-model="inputs.radio4">
  <g-radiobox class="mr-4" :value="2" label="選項2" />
  <g-radiobox class="mr-4" :value="4" label="選項4" />
  <g-radiobox class="mr-4" :value="6" label="選項6" />
</g-radiobox-group>
 \`\`\`
`;

const inputsText2 = `\`\`\` html
<g-switch class="mr-4" v-model="inputs.switch0" />
<g-switch class="mr-4" v-model="inputs.switch1" />
<g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
<g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
 \`\`\`
`;

const loadingText0 = `\`\`\` html
<g-loading-icon />
 \`\`\`
`;

const loadingText1 = `\`\`\` html
<g-upload-icon class="mr-2" />
<g-upload-icon class="mr-2" :percent="20" />
<g-upload-icon class="mr-2" :percent="80" />
<g-upload-icon class="mr-2" :percent="0" auto />
 \`\`\`
`;

const loadingText2 = `\`\`\` html
<g-download-icon class="mr-2" />
<g-download-icon class="mr-2" :percent="20" />
<g-download-icon class="mr-2" :percent="100" />
<g-download-icon class="mr-2" :percent="0" :auto="true" />
 \`\`\`
`;

const titleText = `\`\`\` html
<g-title :level="1">Bold / 24 / 文字樣式</g-title>
<g-title :level="2">Medium / 20 / 文字樣式</g-title>
<g-title :level="3">Bold / 18 / 文字樣式</g-title>
<g-title>Medium / 16 / 文字樣式</g-title>
 \`\`\`
`;

const buttonText0 = `\`\`\` html
<g-button pill>按鈕</g-button>
<g-button pill type="yellow">按鈕</g-button>
<g-button pill type="red">按鈕</g-button>
<g-button pill type="black">按鈕</g-button>
 \`\`\`
`;

const buttonText1 = `\`\`\` html
<g-button flat>按鈕</g-button>
<g-button flat type="yellow">按鈕</g-button>
<g-button flat type="red">按鈕</g-button>
<g-button flat type="black">按鈕</g-button>
 \`\`\`
`;

const buttonText2 = `\`\`\` html
<g-button flat><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="yellow"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="red"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="black"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>

<g-button flat><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="yellow"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="red"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="black"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
 \`\`\`
`;

const buttonText3 = `\`\`\` html  
<g-button round>按鈕</g-button>
<g-button round type="yellow">按鈕</g-button>
<g-button round type="red">按鈕</g-button>
<g-button round type="black">按鈕</g-button>

//ROUND-ICON
<g-button round type="black" icon="file" />
<g-button-close />
 \`\`\`
`;

const dropdown0Text = `\`\`\` html
<g-dropdown
  class="mr-4"
  v-model="inputs.dropdown0"
  :options="[
    { label: 'Aaaa', value: 1 },
    { label: 'Bbbb', value: 2 },
    { label: 'Gggggeeeeewwww', value: 3 },
  ]"
  clicked
  icon
/>
 \`\`\`
`;

const dropdown1Text = `\`\`\` html
<g-dropdown
  v-model="inputs.dropdown1"
  :options="[
    { label: 'Aaaa', value: 1 },
    { label: 'Bbbb', value: 2 },
    { label: 'Gggggeeeeewwww', value: 3 },
  ]"
  hover
/>
 \`\`\`
`;

const inputsText3 = `\`\`\` html
<g-form v-model="inputs.test" :rules="formRule" name="form1">
  <g-input label="驗證1" name="test1" green clearable />
  <g-input label="驗證2" name="test2" green clearable />
  <g-input label="驗證3" name="test3" green clearable />
</g-form>
 \`\`\`

 \`\`\` js
const formRule = {
  test1: [
    {
      require: true,
      message: '必填',
      trigger: 'blur',
    },
    {
      valid: (val) => ('' + val).length > 3,
      message: '長度大於3',
      trigger: 'blur'
    },
  ],
  test2: [
    {
      valid: (val) => ('' + val).length > 10,
      message: '長度大於10',
    },
  ],
};
 \`\`\`
`;

const inputsText4 = `\`\`\` html
<g-input v-model="inputs.input0" />
<g-input v-model="inputs.input0" label="文字0" />
<g-input v-model="inputs.input2" type="number" label="數字0" />
<g-input v-model="inputs.input1" type="password" label="密碼0" />

<g-input v-model="inputs.input0" green />
<g-input v-model="inputs.input0" green label="文字1" />
<g-input v-model="inputs.input2" type="number" green label="數字1" />
<g-input v-model="inputs.input1" green type="password" label="密碼1" />
 \`\`\`
`;

const inputsTime1 = `\`\`\` html
  <g-time-picker v-model="inputs.time1" />
 \`\`\`
`;

const tagsText = `\`\`\` html
//BORDER
  <g-tag type="default" border />
  <g-tag type="second" border />
  <g-tag type="warning" border />
  <g-tag type="danger" border />

//NO BORDER
  <g-tag type="default" />
  <g-tag type="second" />
  <g-tag type="warning" />
  <g-tag type="danger" />

//DOT
  <g-tag type="default" dot />
  <g-tag type="second" dot />
  <g-tag type="warning" dot />
  <g-tag type="danger" dot />

// LABEL
  <g-tag type="default" dot label='訂單' />
  <g-tag type="second" border dot label='出貨' />
  <g-tag type="warning" dot label='警告' />
  <g-tag type="danger" border dot label='錯誤' />

//OTHERS
  <g-tag type="activity" border />

 \`\`\`
`;

const tableJs = `\`\`\` javascript
const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '價格',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '標籤',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [
    { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
    ...
    { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
  ],
    isLoading: false,
});

// 目前是使用"name" 註冊一個全域的table物件
instance.appContext.config.globalProperties[
  'gt-table-products'
].getCheckedList();

\`\`\``;

const tableText = `\`\`\` html
<g-table
  :columns="tableInfo.columns"
  :data="tableInfo.data"
  height="300"
  name="products"
  rowClick
  :isLoading="tableInfo.isLoading"
>
  <template v-slot:tags="{ row }">
    <div class="flex justify-between">
      <g-tag type="warning" border label="上架中" />
      <g-tag type="second" border dot label="可出貨" />
    </div>
  </template>

  <template v-slot:btns="{ row }">
    <div class="flex justify-between">
      <g-button
        flat
        @click="
          () => {
            handleRowClick(row);
          }
        "
        >編輯</g-button
      >
      <g-button
        flat
        type="red"
        @click="
          () => {
            handleRowClick(row);
          }
        "
        >刪除</g-button
      >
    </div>
  </template>
</g-table>
 \`\`\``;

const sortLabelText = `\`\`\` html
<g-sort-label
  v-model="inputs.curSortLabelValue"
  labelName="日期"
  :options="[
    {
      label: '遞增',
      value: 'ASC',
    },
    {
      label: '遞減',
      value: 'DESC',
    },
  ]"
/>
\`\`\``;

const filterOptionsTextJS = `\`\`\` javascript
const tableInfo = reactive({
  columns: [
    {
      name: 'id',
      label: 'ID',
      width: 180,
    },
    {
      name: 'product',
      label: '商品名稱',
      sort: false,
      width: 180,
    },
    {
      name: 'price',
      label: '價格',
      width: 180,
      sort: true,
    },
    {
      name: 'storage',
      label: '庫存',
      sort: true,
    },
    {
      name: 'tags',
      width: 220,
      label: '標籤',
    },
    {
      name: 'btns',
      width: 200,
      label: '',
    },
  ],
  data: [...],
  filterOtions: {},
});

\`\`\``;

const filterOptionsText = `\`\`\` html

<g-filter-option
  v-for="column in tableInfo.columns.filter((item) => item.label)"
  v-model="tableInfo.filterOtions[column.name]"
  :key="column.name"
  :optionName="column.label"
/>

\`\`\``;

const paginationTextJS = `\`\`\` javascript 
const curPage = ref(1);
const handleUpdatePage = (page) => {
  curPage.value = page;
};
\`\`\``;

const paginationText = `\`\`\` html
<g-pagination
  :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"
  @updatePage="handleUpdatePage"
/>
\`\`\``;

const tabsText = `\`\`\` html
  <g-tabs :tabs='[{ name: 'tab1' }, { name: 'tab2' }]'>
    <template v-slot:tab1="context">
      <g-title :level="1" class="mb-3" >hello , tab1</g-title>
    </template>
    <template v-slot:tab2="context">
      <g-title :level="1" class="mb-3" >hello , tab2</g-title>
    </template>
  </g-tabs>
\`\`\``;

const imgUploadText = `\`\`\` html
<g-img-upload @file="handleFile" />
\`\`\``;
</script>

<template>
  <div class="flex innerWrapper">
    <div
      ref="el"
      class="w-4/5 py-4 flex justify-center items-center"
      @scroll="handleScrollEvt"
    >
      <div class="paragraphHead">
        <g-title :level="1" class="mb-3" id="s1">版型</g-title>
      </div>
      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3">大樹後台layout</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.layoutText"
          statusLabel
        />
        <v-md-editor
          v-if="showTextSwitch.layoutText"
          v-model="layoutText"
          mode="preview"
        ></v-md-editor>
      </div>
      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">操作</g-title>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s2t02">圖片上傳</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.imgUploadText"
          statusLabel
        />
        <g-img-upload @file="handleFile" />

        <v-md-editor
          v-if="showTextSwitch.imgUploadText"
          v-model="imgUploadText"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s2t0">篩選選項</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.filterOptionText"
          statusLabel
        />
        <div class="flex">
          <g-filter-option
            v-for="column in tableInfo.columns.filter((item) => item.label)"
            v-model="tableInfo.filterOtions[column.name]"
            :key="column.name"
            :optionName="column.label"
          />
        </div>

        <template v-if="showTextSwitch.filterOptionText">
          tableInfo.filterOtions:{{ tableInfo.filterOtions }}
          <v-md-editor
            v-if="showTextSwitch.filterOptionText"
            v-model="filterOptionsTextJS"
            mode="preview"
          ></v-md-editor>
          <v-md-editor
            v-if="showTextSwitch.filterOptionText"
            v-model="filterOptionsText"
            mode="preview"
          ></v-md-editor>
        </template>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s2t01">分頁標籤</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.tabsText"
          statusLabel
        />
        <g-tabs :tabs="[{ name: 'tab1' }, { name: 'tab2' }]">
          <template v-slot:tab1="context">
            <g-title :level="1" class="mb-3">hello , tab1 </g-title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
            assumenda similique possimus ipsam consequatur animi ipsa fugit
            quia. Accusantium.
          </template>
          <template v-slot:tab2="context">
            <g-title :level="1" class="mb-3">hello , tab2</g-title>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            alias earum exercitationem inventore dignissimos velit dolores
            maiores quod accusantium, reiciendis cupiditate modi quia rem at ut
            laborum vero doloribus rerum?
          </template>
        </g-tabs>

        <v-md-editor
          v-if="showTextSwitch.tabsText"
          v-model="tabsText"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s2t">排序標籤</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.sortLabelText"
          statusLabel
        />
        <g-sort-label
          v-model="inputs.curSortLabelValue"
          labelName="日期"
          :options="[
            {
              label: '遞增',
              value: 'ASC',
            },
            {
              label: '遞減',
              value: 'DESC',
            },
          ]"
        />
        <template v-if="showTextSwitch.sortLabelText">
          inputs.curSortLabelValue:{{ inputs.curSortLabelValue }}
          <v-md-editor
            v-if="showTextSwitch.sortLabelText"
            v-model="sortLabelText"
            mode="preview"
          ></v-md-editor>
        </template>
      </div>

      <div class="w-full md:w-3/4 pr-2 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s2">日期選擇</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsTime1"
          statusLabel
        />
        <g-time-picker v-model="inputs.time1" />
        <p v-if="showTextSwitch.inputsTime1">inputs.time1:{{ inputs.time1 }}</p>
        <v-md-editor
          v-if="showTextSwitch.inputsTime1"
          v-model="inputsTime1"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3" id="s3">輸入框-驗證</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText3"
          statusLabel
        />

        <g-form v-model="inputs.test" :rules="formRule" name="form1">
          <g-input label="驗證1" name="test1" green clearable />
          <g-input label="驗證2" name="test2" green clearable />
          <g-input label="驗證3" name="test3" green clearable />
        </g-form>
        <g-button
          class="mb-4"
          @click="
            () => {
              handleSubmit();
            }
          "
          >欄位驗證</g-button
        >
        <div v-if="showTextSwitch.inputsText3">
          <p>inputs.test1:{{ inputs.test.test1 }}</p>
          <p>inputs.test2:{{ inputs.test.test2 }}</p>
          <p>inputs.test3:{{ inputs.test.test3 }}</p>
        </div>
        <v-md-editor
          v-if="showTextSwitch.inputsText3"
          v-model="inputsText3"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3" id="s4">輸入框-樣式</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText4"
          statusLabel
        />

        <g-input v-model="inputs.input0" />
        <g-input v-model="inputs.input0" label="文字0" />
        <g-input v-model="inputs.input2" type="number" label="數字0" />
        <g-input v-model="inputs.input1" type="password" label="密碼0" />

        <g-input v-model="inputs.input0" green />
        <g-input v-model="inputs.input0" green label="文字1" />
        <g-input v-model="inputs.input2" type="number" green label="數字1" />
        <g-input v-model="inputs.input1" green type="password" label="密碼1" />

        <v-md-editor
          v-if="showTextSwitch.inputsText4"
          v-model="inputsText4"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3" id="s5">下拉選項點擊模式</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.dropdown0"
          statusLabel
        />
        <g-dropdown
          class="mr-4"
          v-model="inputs.dropdown0"
          :options="[
            { label: 'Aaaa', value: 1 },
            { label: 'Bbbb', value: 2 },
            { label: 'Gggggeeeeewwww', value: 3 },
          ]"
          clicked
          icon
        />
        <span v-if="showTextSwitch.dropdown0"
          >v-model:{{ inputs.dropdown0 }}</span
        >
        <v-md-editor
          v-if="showTextSwitch.dropdown0"
          v-model="dropdown0Text"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto mb-6 relative">
        <g-title :level="2" class="mb-3" id="s6">下拉選項停留模式</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.dropdown1"
          statusLabel
        />

        <g-dropdown
          v-model="inputs.dropdown1"
          :options="[
            { label: 'Aaaa', value: 1 },
            { label: 'Bbbb', value: 2 },
            { label: 'Gggggeeeeewwww', value: 3 },
          ]"
          hover
        />

        <span v-if="showTextSwitch.dropdown1"
          >v-model:{{ inputs.dropdown1 }}</span
        >
        <v-md-editor
          v-if="showTextSwitch.dropdown1"
          v-model="dropdown1Text"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s7">單勾選欄</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText0"
          statusLabel
        />
      </div>
      <div class="mb-3 px-2 w-full md:w-3/4">
        <div class="mb-3 flex w-full">
          <g-checkbox class="mr-4" v-model="inputs.checked0" label="選項1" />
          <g-checkbox class="mr-4" v-model="inputs.checked3" label="選項2" />
          <g-checkbox
            class="mr-4"
            v-model="inputs.checked1"
            label="選項3"
            disabled
          />
          <g-checkbox
            class="mr-4"
            v-model="inputs.checked2"
            label="選項4"
            disabled
          />
        </div>
        <v-md-editor
          v-if="showTextSwitch.inputsText0"
          v-model="inputsText0"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s8">群組勾選欄</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText0_1"
          statusLabel
        />
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4">
        <g-checkbox-group class="mb-3 flex w-full" v-model="inputs.checkedArr">
          <g-checkbox class="mr-4" :value="2" label="選項2" />
          <g-checkbox class="mr-4" :value="4" label="選項4" />
          <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
          <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
        </g-checkbox-group>
        <span v-if="showTextSwitch.inputsText0_1"
          >inputs.checkedArr:{{ inputs.checkedArr }}</span
        >
        <v-md-editor
          v-if="showTextSwitch.inputsText0_1"
          v-model="inputsText0_1"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s9">單選欄</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText1"
          statusLabel
        />
      </div>
      <div class="mb-3 px-2 w-full md:w-3/4">
        <div class="mb-3 flex w-full">
          <g-radiobox class="mr-4" v-model="inputs.radio0" label="A" />
          <g-radiobox class="mr-4" v-model="inputs.radio1" label="B" />
          <g-radiobox class="mr-4" v-model="inputs.radio2" disabled label="C" />
          <g-radiobox class="mr-4" v-model="inputs.radio3" disabled label="D" />
        </div>
        <v-md-editor
          v-if="showTextSwitch.inputsText1"
          v-model="inputsText1"
          mode="preview"
        ></v-md-editor>
      </div>
      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s9-1">群組單選欄</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText1_1"
          statusLabel
        />
      </div>
      <div class="mb-3 px-2 w-full md:w-3/4">
        <g-radiobox-group class="mb-3 flex w-full" v-model="inputs.radio4">
          <g-radiobox class="mr-4" :value="2" label="選項2" />
          <g-radiobox class="mr-4" :value="4" label="選項4" />
          <g-radiobox class="mr-4" :value="6" label="選項6" />
          <g-radiobox class="mr-4" :value="8" label="選項8" disabled />
        </g-radiobox-group>
        <v-md-editor
          v-if="showTextSwitch.inputsText1_1"
          v-model="inputsText1_1"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s10">切換開關</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.inputsText2"
          statusLabel
        />
      </div>
      <div class="mb-3 px-2 w-full md:w-3/4">
        <div class="mb-3 flex w-full">
          <g-switch class="mr-4" v-model="inputs.switch0" />
          <g-switch class="mr-4" v-model="inputs.switch1" />
          <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
          <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
        </div>
        <v-md-editor
          v-if="showTextSwitch.inputsText2"
          v-model="inputsText2"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">過場效果</g-title>
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4">
        <div class="flex justify-start mb-3 relative">
          <div class="w-1/2 md:w-1/3">
            <g-title :level="2" class="mb-3" id="s11">頁面載入中</g-title>
            <g-switch
              class="absolute right-0 top-0"
              v-model="showTextSwitch.loadText"
              statusLabel
            />
            <g-button pill @click="handleLoading">顯示</g-button>
          </div>
        </div>
        <v-md-editor
          v-if="showTextSwitch.loadText"
          v-model="loadText"
          mode="preview"
        ></v-md-editor>
        <div class="flex justify-start mb-3 relative">
          <g-title :level="2" class="mb-3" id="s12">載入中</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.loadingText0"
            statusLabel
          />
          <g-loading-icon />

          <v-md-editor
            v-if="showTextSwitch.loadingText0"
            v-model="loadingText0"
            mode="preview"
          ></v-md-editor>
        </div>

        <div class="flex justify-start mb-3 relative">
          <g-title :level="2" class="mb-3" id="s13">上傳中</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.loadingText1"
            statusLabel
          />
        </div>
        <div class="mb-3 px-2 w-full">
          <div class="mb-3 flex w-full">
            <g-upload-icon class="mr-2" />
            <g-upload-icon class="mr-2" :percent="20" />
            <g-upload-icon class="mr-2" :percent="80" />
            <g-upload-icon class="mr-2" :percent="0" auto />
          </div>
          <v-md-editor
            v-if="showTextSwitch.loadingText1"
            v-model="loadingText1"
            mode="preview"
          ></v-md-editor>
        </div>

        <div class="flex justify-start mb-3 relative">
          <g-title :level="2" class="mb-3" id="s14">下載中</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.loadingText2"
            statusLabel
          />
        </div>
        <div class="mb-3 px-2 w-full">
          <div class="mb-3 flex w-full">
            <g-download-icon class="mr-2" />
            <g-download-icon class="mr-2" :percent="20" />
            <g-download-icon class="mr-2" :percent="100" />
            <g-download-icon class="mr-2" :percent="0" :auto="true" />
          </div>
          <v-md-editor
            v-if="showTextSwitch.loadingText2"
            v-model="loadingText2"
            mode="preview"
          ></v-md-editor>
        </div>
      </div>
      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">視窗</g-title>
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4 relative">
        <g-title :level="2" class="mb-3" id="s15">通知</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.msgText"
          statusLabel
        />
        <div class="flex justify-start mb-3">
          <span class="w-1/2 md:w-1/3"
            ><g-button
              pill
              type="second"
              @click="
                () => {
                  handleMsg('info');
                }
              "
              >顯示Message info</g-button
            ></span
          >
          <span class="w-1/2 md:w-1/3"
            ><g-button
              pill
              type="yellow"
              @click="
                () => {
                  handleMsg('warning');
                }
              "
              >顯示Message warning</g-button
            ></span
          >
          <span class="w-1/2 md:w-1/3"
            ><g-button
              pill
              type="red"
              @click="
                () => {
                  handleMsg('error');
                }
              "
              >顯示Message error</g-button
            ></span
          >
        </div>
        <v-md-editor
          v-if="showTextSwitch.msgText"
          v-model="msgText"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">文字</g-title>
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4 relative">
        <g-title :level="2" class="mb-3" id="s16">標題</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.titleText"
          statusLabel
        />
        <g-title :level="1" class="mb-4">Bold / 24 / 文字樣式</g-title>
        <g-title :level="2" class="mb-4">Medium / 20 / 文字樣式</g-title>
        <g-title :level="3" class="mb-4">Bold / 18 / 文字樣式</g-title>
        <g-title class="mb-4">Medium / 16 / 文字樣式</g-title>
        <v-md-editor
          v-if="showTextSwitch.titleText"
          v-model="titleText"
          mode="preview"
        ></v-md-editor>
      </div>

      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">按鈕</g-title>
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4">
        <div class="mb-8 relative">
          <g-title :level="2" class="mb-3" id="s17">PILL</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.buttonText0"
            statusLabel
          />
          <div class="flex justify-between mb-3">
            <g-button pill>按鈕</g-button>
            <g-button pill type="yellow">按鈕</g-button>
            <g-button pill type="red">按鈕</g-button>
            <g-button pill type="white">按鈕</g-button>
          </div>
          <v-md-editor
            v-if="showTextSwitch.buttonText0"
            v-model="buttonText0"
            mode="preview"
          ></v-md-editor>
        </div>
        <div class="mb-8 relative">
          <g-title :level="2" class="mb-3" id="s18">FLAT - 1</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.buttonText1"
            statusLabel
          />
          <div class="flex justify-between mb-3">
            <g-button flat>按鈕</g-button>
            <g-button flat type="yellow">按鈕</g-button>
            <g-button flat type="red">按鈕</g-button>
            <g-button flat type="white">按鈕</g-button>
          </div>

          <v-md-editor
            v-if="showTextSwitch.buttonText1"
            v-model="buttonText1"
            mode="preview"
          ></v-md-editor>
        </div>

        <div class="mb-8 relative">
          <g-title :level="2" class="mb-3" id="s19">FLAT - 2</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.buttonText2"
            statusLabel
          />
          <div class="flex justify-between mb-3">
            <g-button flat
              ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
            >
            <g-button flat type="yellow"
              ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
            >
            <g-button flat type="red"
              ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
            >
            <g-button flat type="white"
              ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
            >
          </div>
          <div class="flex justify-between mb-3">
            <g-button flat
              ><g-icons name="chevronRight" class="w-8" />下一頁</g-button
            >
            <g-button flat type="yellow"
              ><g-icons name="chevronRight" class="w-8" />下一頁</g-button
            >
            <g-button flat type="red"
              ><g-icons name="chevronRight" class="w-8" />下一頁</g-button
            >
            <g-button flat type="white"
              ><g-icons name="chevronRight" class="w-8" />下一頁</g-button
            >
          </div>
          <v-md-editor
            v-if="showTextSwitch.buttonText2"
            v-model="buttonText2"
            mode="preview"
          ></v-md-editor>
        </div>

        <div class="mb-8 relative">
          <g-title :level="2" class="mb-3" id="s20">ROUND</g-title>
          <g-switch
            class="absolute right-0 top-0"
            v-model="showTextSwitch.buttonText3"
            statusLabel
          />
          <div class="w-full flex justify-between mb-3">
            <g-button round>按鈕</g-button>
            <g-button round type="yellow">按鈕</g-button>
            <g-button round type="red">按鈕</g-button>
            <g-button round type="black">按鈕</g-button>
            <g-button round type="white">按鈕</g-button>
          </div>
          <g-title :level="2" class="mb-3" id="s20">ROUND-ICON</g-title>
          <div class="w-full flex justify-start mb-3 p-4">
            <g-button round type="black" icon="file" class="mr-4" />
            <g-button-close />
          </div>
          <v-md-editor
            v-if="showTextSwitch.buttonText3"
            v-model="buttonText3"
            mode="preview"
          ></v-md-editor>
        </div>
      </div>

      <div class="paragraphHead">
        <g-title :level="1" class="mb-3" id="s21">圖標</g-title>
      </div>

      <div class="mb-3 px-2 w-full md:w-3/4">
        <span
          class="flex justify-start mb-2"
          v-for="(item, idx) in icons"
          :key="item"
        >
          <template v-if="idx % 2 == 0">
            <span class="w-1/2 md:w-1/3 flex justify-start items-center"
              ><g-icons :name="item" class="text-main" size="sm" /><g-icons
                :name="item"
                class="text-main"
                size="md" /><g-icons :name="item" class="text-main" size="lg"
            /></span>
            <span class="text-gray-600 leading-10">
              {{ `<g-icons name="${item}" size="sm | md | lg" />`}}
            </span>
          </template>
          <template v-else>
            <span class="w-1/2 md:w-1/3 flex justify-start items-center"
              ><g-icons
                :name="item"
                class="text-second w-8"
                size="sm" /><g-icons
                :name="item"
                class="text-second w-8"
                size="md" /><g-icons
                :name="item"
                class="text-second w-8"
                size="lg"
            /></span>
            <span class="text-gray-600 leading-10">
              {{ `<g-icons name="${item}" size="sm | md | lg" />`}}
            </span>
          </template>
        </span>
      </div>

      <div class="paragraphHead">
        <g-title :level="1" class="mb-3" id="s22">標籤</g-title>
      </div>
      <div class="mb-3 px-2 w-full md:w-3/4 relative">
        <g-title :level="2" class="mb-3">BORDER</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.tagsText"
          statusLabel
        />
        <div class="w-1/2 flex justify-between mb-3">
          <g-tag type="default" border />
          <g-tag type="second" border />
          <g-tag type="warning" border />
          <g-tag type="danger" border />
        </div>

        <g-title :level="2" class="mb-3">NO BORDER</g-title>
        <div class="w-1/2 flex justify-between mb-3">
          <g-tag type="default" />
          <g-tag type="second" />
          <g-tag type="warning" />
          <g-tag type="danger" />
        </div>

        <g-title :level="2" class="mb-3">DOT</g-title>
        <div class="w-1/2 flex justify-between mb-3">
          <g-tag type="default" dot />
          <g-tag type="second" dot />
          <g-tag type="warning" dot />
          <g-tag type="danger" dot />
        </div>
        <g-title :level="2" class="mb-3">LABEL</g-title>
        <div class="w-1/2 flex justify-between mb-3">
          <g-tag type="default" dot label="訂單" />
          <g-tag type="second" border dot label="出貨" />
          <g-tag type="warning" dot label="警告" />
          <g-tag type="danger" border dot label="錯誤" />
        </div>

        <g-title :level="2" class="mb-3">OTHERS</g-title>
        <div class="w-1/2 flex justify-between mb-3">
          <g-tag type="activity" border />
        </div>
        <v-md-editor
          v-if="showTextSwitch.tagsText"
          v-model="tagsText"
          mode="preview"
        ></v-md-editor>
      </div>
      <div class="paragraphHead">
        <g-title :level="1" class="mb-3">資料</g-title>
      </div>
      <div class="w-full md:w-3/4 mx-auto relative">
        <g-title :level="2" class="mb-3" id="s23">表格</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.tableText"
          statusLabel
        />
        <g-table
          :columns="tableInfo.columns"
          :data="tableInfo.data"
          height="450"
          name="products"
          rowClick
          :isLoading="tableInfo.isLoading"
        >
          <template v-slot:tags="{ row }">
            <div class="flex justify-between">
              <g-tag type="warning" border label="上架中" />
              <g-tag type="second" border dot label="可出貨" />
            </div>
          </template>

          <template v-slot:btns="{ row }">
            <div class="flex justify-start">
              <g-button
                flat
                @click="
                  () => {
                    handleRowClick(row);
                  }
                "
                >編輯</g-button
              >
              <g-button
                flat
                type="red"
                @click="
                  () => {
                    handleRowClick(row);
                  }
                "
                >刪除</g-button
              >
            </div>
          </template>
        </g-table>
        <g-button
          class="mb-4 mt-4"
          @click="
            () => {
              handleTableChecked();
            }
          "
          >當前選擇顯示</g-button
        >
        <g-button
          class="mb-4 mt-4"
          @click="
            () => {
              showLoading();
            }
          "
          >載入中顯示</g-button
        >

        <v-md-editor
          v-if="showTextSwitch.tableText"
          v-model="tableJs"
          mode="preview"
        ></v-md-editor>
        <v-md-editor
          v-if="showTextSwitch.tableText"
          v-model="tableText"
          mode="preview"
        ></v-md-editor>
      </div>
      <div class="w-full md:w-3/4 mx-auto relative mb-12">
        <g-title :level="2" class="mb-3" id="s24">分頁選擇</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.paginationText"
          statusLabel
        />
        <g-pagination
          :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"
          @updatePage="handleUpdatePage"
        />
        <span v-if="showTextSwitch.paginationText"> curPage:{{ curPage }}</span>
        <v-md-editor
          v-if="showTextSwitch.paginationText"
          v-model="paginationTextJS"
          mode="preview"
        ></v-md-editor>
        <v-md-editor
          v-if="showTextSwitch.paginationText"
          v-model="paginationText"
          mode="preview"
        ></v-md-editor>
      </div>
    </div>
    <div class="w-1/5 flex flex-col scroll-to-box relative">
      <div class="absolute left-0 top-0">
        <p
          v-for="item in scrollList"
          :key="item.id"
          :id="'r-' + item.id"
          class="px-4 py-2 my-2 cursor-pointer"
          :class="curScroll == item.id ? 'current' : ''"
          @click="
            () => {
              handleScroll(item.id);
            }
          "
        >
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>

  <g-message />
  <g-loading />
</template>

<style lang="scss" scoped>
.innerWrapper {
  > div {
    height: calc(100vh - 120px);
    @apply overflow-y-scroll;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #d9d9d9;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #aaaaaa;
      &:hover {
        background-color: #666666;
      }
    }
  }
}

.scroll-to-box {
  p {
    @apply text-gray0;
  }
  .current {
    @apply text-main;
  }
}
</style>
