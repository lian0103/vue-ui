export default {
  GButton: {
    name: '按鈕/Button',
    md: `\`\`\` html
    <g-button pill>按鈕</g-button>
    <g-button pill type="yellow">按鈕</g-button>
    <g-button pill type="red">按鈕</g-button>
    <g-button pill type="black">按鈕</g-button>

    <g-button flat>按鈕</g-button>
    <g-button flat type="yellow">按鈕</g-button>
    <g-button flat type="red">按鈕</g-button>
    <g-button flat type="black">按鈕</g-button>

    <g-button flat><g-icons name="chevronLeft" />上一頁</g-button>
    <g-button flat type="yellow"><g-icons name="chevronLeft" />上一頁</g-button>
    <g-button flat type="red"><g-icons name="chevronLeft" />上一頁</g-button>
    <g-button flat type="black"><g-icons name="chevronLeft" />上一頁</g-button>

    <g-button flat><g-icons name="chevronRight" />下一頁</g-button>
    <g-button flat type="yellow"><g-icons name="chevronRight" />下一頁</g-button>
    <g-button flat type="red"><g-icons name="chevronRight" />下一頁</g-button>
    <g-button flat type="black"><g-icons name="chevronRight" />下一頁</g-button>

    <g-button round>按鈕</g-button>
    <g-button round type="yellow">按鈕</g-button>
    <g-button round type="red">按鈕</g-button>
    <g-button round type="black">按鈕</g-button>
    <g-button round type="white">按鈕</g-button>

    //ROUND-ICON
    <g-button round type="black" icon="file" />
    <g-button-close />
   \`\`\``,
    menuIndex: '3-1',
  },
  GIcons: {
    name: '圖標/Icon',
    md: `\`\`\` html
    <g-loading-icon />

    <g-upload-icon class="mr-2" />
    <g-upload-icon class="mr-2" :percent="20" />
    <g-upload-icon class="mr-2" :percent="80" />
    <g-upload-icon class="mr-2" :percent="0" auto />

    <g-download-icon class="mr-2" />
    <g-download-icon class="mr-2" :percent="20" />
    <g-download-icon class="mr-2" :percent="100" />
    <g-download-icon class="mr-2" :percent="0" :auto="true" />
   \`\`\`
  `,
    menuIndex: '3-2',
  },
  GTitle: {
    name: '標題/Title',
    md: `\`\`\` html
  <g-title :level="1">Bold / 24 / 文字樣式</g-title>
  <g-title :level="2">Medium / 20 / 文字樣式</g-title>
  <g-title :level="3">Bold / 18 / 文字樣式</g-title>
  <g-title>Medium / 16 / 文字樣式</g-title>
   \`\`\`
  `,
    menuIndex: '3-3',
  },
  GLayout: {
    name: '版型/Layout',
    md: `
\`\`\` javascript
const menuRoutes = [
    {
        label: 'group1',
        children: [
        {
            label: 'route1',
            icon: '',
            path: '/doc',
        },
        {
            label: 'route2',
            icon: '',
            path: '/456',
        },
        ],
    },
    {
        label: 'group2',
        children: [
        {
            label: 'route3',
            icon: 'file',
            path: '/456',
        },
        {
            label: 'route4',
            icon: 'file',
            path: '/123',
        },
        ],
    },
];      
\`\`\`
      
\`\`\` html
//版型
<g-layout headText="Great Tree UI" title="GT開發">
    <template #sidebar> ... </template>
    <template #header> ... </template>
    <template #content> ... </template>
</g-layout>

//選單
<g-menu active="1-1" :menu="menuRoutes" />

//分頁標籤
<g-tabs :tabs="[{ name: 'tab1' }, { name: 'tab2' }]">
  <template v-slot:tab1="context">
    <g-title :level="1" class="mb-3">hello , tab1</g-title>
  </template>
  <template v-slot:tab2="context">
    <g-title :level="1" class="mb-3">hello , tab2</g-title>
  </template>
</g-tabs>
\`\`\``,
    menuIndex: '3-4',
  },
  GLoading: {
    name: '載入/Loading',
    md: `\`\`\` js
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
 `,
    menuIndex: '3-5',
  },
  GMessage: {
    name: '通知/Message',
    md: `\`\`\` js
  import { getCurrentInstance } from 'vue';
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type, //'info', 'warning', 'error'
    title, //String
    msg, //String
  });

  instance.appContext.config.globalProperties.handleMessageToastTrigger({
    time: 2500,
  });
 \`\`\`

 \`\`\` html
  <!-- 在頁面中加入 -->
  <g-message />
  <g-message-toast text='儲存完成~!' />
 \`\`\`

 `,
    menuIndex: '3-6',
  },
  GCheckbox: {
    name: '勾選欄/Checkbox',
    md: `\`\`\` html
<g-checkbox class="mr-4" v-model="inputs.checked0" />
<g-checkbox class="mr-4" v-model="inputs.checked3" />
<g-checkbox class="mr-4" v-model="inputs.checked1" disabled />
<g-checkbox class="mr-4" v-model="inputs.checked2" disabled />

<g-checkbox-group v-model="inputs.checkedArr">
  <g-checkbox class="mr-4" :value="2" label="選項2" />
  <g-checkbox class="mr-4" :value="4" label="選項4" />
  <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
  <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
</g-checkbox-group>
   \`\`\`
  `,
    menuIndex: '3-7',
  },
  GRadiobox: {
    name: '圈選欄/Radiobox',
    md: `\`\`\` html
  <g-radiobox class="mr-4" v-model="inputs.radio0" />
  <g-radiobox class="mr-4" v-model="inputs.radio1" />
  <g-radiobox class="mr-4" v-model="inputs.radio2" disabled />
  <g-radiobox class="mr-4" v-model="inputs.radio3" disabled />

  <g-radiobox-group v-model="inputs.radio4">
    <g-radiobox class="mr-4" :value="2" label="選項2" />
    <g-radiobox class="mr-4" :value="4" label="選項4" />
    <g-radiobox class="mr-4" :value="6" label="選項6" />
    <g-radiobox class="mr-4" :value="8" label="選項8" disabled />
  </g-radiobox-group>

   \`\`\`
  `,
    menuIndex: '3-8',
  },
  GSwitch: {
    name: '切換開關/SwitchButton',
    md: `\`\`\` html
  <g-switch class="mr-4" v-model="inputs.switch0" />
  <g-switch class="mr-4" v-model="inputs.switch1" />
  <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
  <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
   \`\`\`
  `,
    menuIndex: '3-9',
  },
  GForm: {
    name: '表單/Form',
    md: `\`\`\` html
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
  `,
    menuIndex: '3-10',
  },
  GInput: {
    name: '輸入欄/Input',
    md: `\`\`\` html
    //輸入框-size<
    //middle
    <g-input v-model="inputs.input0" size="md" />
    //small
    <g-input v-model="inputs.input0" size="sm" />

    //>輸入框-type
    //number
    <g-input v-model="inputs.input2" type="number" label="數字" />
    //password
    <g-input v-model="inputs.input1" type="password" label="密碼" />

    //輸入框-green
    <g-input v-model="inputs.input0" green label="欄位" />
   \`\`\`
  `,
    menuIndex: '3-11',
  },
  GDropdown: {
    name: '下拉選單/Dropdown',
    md: `\`\`\` html
  <g-dropdown
    v-model="inputs.dropdown1"
    :options="[
        { label: 'Aaaa', value: 1 },
        { label: 'Bbbb', value: 2 },
        { label: 'Gggggeeeeewwww', value: 3 },
    ]"
    clicked
    icon
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
   \`\`\`
  `,
    menuIndex: '3-12',
  },
  GTimePicker: {
    name: '時間選擇/TimePicker',
    md: `\`\`\` html
  <g-time-picker v-model="inputs.time1" />
 \`\`\`
`,
    menuIndex: '3-13',
  },
  GTag: {
    name: '標籤/Tag',
    md: `\`\`\` html
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
  `,
    menuIndex: '3-14',
  },
  GTable: {
    name: '表格/Table',
    md: `\`\`\` javascript
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
  
  \`\`\`
  
  \`\`\` html
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
    <div class="flex justify-start">
        <g-button flat @click.stop="() => {handleRowClick(row, 1);}">
            編輯
        </g-button>
        <g-button flat type="red" @click.stop="() => {handleRowClick(row, 2);}">
            刪除
        </g-button>
    </div>
  </template>
</g-table>
 \`\`\`
  
  `,
    menuIndex: '3-15',
  },
  GPagination: {
    name: '分頁/Pagination',
    md: `
  \`\`\` html
  <g-pagination
    :pageInfo="{ currentPage: 1, total: 200, perPageNums: 15 }"
    @updatePage="handleUpdatePage"
  />
  \`\`\``,
    menuIndex: '3-16',
  },
  GSortLabel: {
    name: '排序篩選/SortFilter',
    md: `\`\`\` html
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

  <g-filter-option
    v-for="column in tableInfo.columns.filter((item) => item.label)"
    v-model="tableInfo.filterOtions[column.name]"
    :key="column.name"
    :optionName="column.label"
  />

  \`\`\``,
    menuIndex: '3-17',
  },
  GImgUpload: {
    name: '上傳/Upload',
    md: `\`\`\` html
  <g-img-upload @file="handleFile" />
  \`\`\``,
    menuIndex: '3-18',
  },
  GDialog: {
    name: '對話窗/Dialog',
    md: `\`\`\` js
  const dialogInfo = reactive({
    show: false,
    show2: false,
    title: 'Hello',
  });
  const handleCallback = () => {
    alert(123);
  };
   \`\`\`
  
   \`\`\` html
  <g-dialog :title="dialogInfo.title" v-model="dialogInfo.show" :handleCallback="handleCallback" size="sm || md || lg">
    body~~
  </g-dialog>
  
  <g-dialog v-model="dialogInfo.show2" mode="delete" :handleCallback="handleCallback" size="sm || md || lg">
    確定刪除嗎?
  </g-dialog>
   \`\`\`
  
   `,
    menuIndex: '3-19',
  },
};
