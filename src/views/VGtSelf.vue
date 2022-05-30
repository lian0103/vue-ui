<script setup>
import { ref, getCurrentInstance, reactive, watch } from 'vue';
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
} from '../components/indexGT';

// 打包後引入測試
// import {
//   GButton,
//   GIcons,
//   GTitle,
//   GLayout,
//   GLoading,
//   GMessage,
// } from 'gt-front-ui';

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
  test1: 'hi~',
  test2: 123,
  test3: '',
  time1: '',
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
<g-button pill type="second">按鈕</g-button>
<g-button pill type="yellow">按鈕</g-button>
<g-button pill type="red">按鈕</g-button>
<g-button pill type="white">按鈕</g-button>
 \`\`\`
`;

const buttonText1 = `\`\`\` html
<g-button flat>按鈕</g-button>
<g-button flat type="second">按鈕</g-button>
<g-button flat type="yellow">按鈕</g-button>
<g-button flat type="red">按鈕</g-button>
<g-button flat type="white">按鈕</g-button>
 \`\`\`
`;

const buttonText2 = `\`\`\` html
<g-button flat><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="second"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="yellow"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="red"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>
<g-button flat type="white"><g-icons name="chevronLeft" class="w-8" />上一頁</g-button>

<g-button flat><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="second"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="yellow"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="red"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
<g-button flat type="white"><g-icons name="chevronRight" class="w-8" />下一頁</g-button>
 \`\`\`
`;

const buttonText3 = `\`\`\` html
<g-button round>按鈕</g-button>
<g-button round type="second">按鈕</g-button>
<g-button round type="yellow">按鈕</g-button>
<g-button round type="red">按鈕</g-button>
<g-button round type="white">按鈕</g-button>
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
<g-form v-model="inputs" :rules="formRule" name="form1">
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
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-3">版型</g-title>
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

    <div class="w-full md:w-3/4 pr-2 mx-auto relative">
      <g-title :level="2" class="mb-3">日期選擇</g-title>
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
      <g-title :level="2" class="mb-3">輸入框-驗證</g-title>
      <g-switch
        class="absolute right-0 top-0"
        v-model="showTextSwitch.inputsText3"
        statusLabel
      />

      <g-form v-model="inputs" :rules="formRule" name="form1">
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
        <p>inputs.test1:{{ inputs.test1 }}</p>
        <p>inputs.test2:{{ inputs.test2 }}</p>
        <p>inputs.test3:{{ inputs.test3 }}</p>
      </div>
      <v-md-editor
        v-if="showTextSwitch.inputsText3"
        v-model="inputsText3"
        mode="preview"
      ></v-md-editor>
    </div>

    <div class="w-full md:w-3/4 mx-auto mb-6 relative">
      <g-title :level="2" class="mb-3">輸入框-樣式</g-title>
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
      <g-title :level="2" class="mb-3">下拉選項點擊模式</g-title>
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
      <g-title :level="2" class="mb-3">下拉選項停留模式</g-title>
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
      <g-title :level="2" class="mb-3">單勾選欄</g-title>
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
      <g-title :level="2" class="mb-3">群組勾選欄</g-title>
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
      <g-title :level="2" class="mb-3">單選欄</g-title>
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
      <g-title :level="2" class="mb-3">群組單選欄</g-title>
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
      <g-title :level="2" class="mb-3">切換開關</g-title>
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
          <g-title :level="2" class="mb-3">頁面載入中</g-title>
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
        <g-title :level="2" class="mb-3">載入中</g-title>
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
        <g-title :level="2" class="mb-3">上傳中</g-title>
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
        <g-title :level="2" class="mb-3">下載中</g-title>
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
      <g-title :level="2" class="mb-3">通知</g-title>
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
      <g-title :level="2" class="mb-3">標題</g-title>
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
        <g-title :level="2" class="mb-3">PILL</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.buttonText0"
          statusLabel
        />
        <div class="flex justify-between mb-3">
          <g-button pill>按鈕</g-button>
          <g-button pill type="second">按鈕</g-button>
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
        <g-title :level="2" class="mb-3">FLAT - 1</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.buttonText1"
          statusLabel
        />
        <div class="flex justify-between mb-3">
          <g-button flat>按鈕</g-button>
          <g-button flat type="second">按鈕</g-button>
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
        <g-title :level="2" class="mb-3">FLAT - 2</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.buttonText2"
          statusLabel
        />
        <div class="flex justify-between mb-3">
          <g-button flat
            ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
          >
          <g-button flat type="second"
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
          <g-button flat type="second"
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
        <g-title :level="2" class="mb-3">ROUND</g-title>
        <g-switch
          class="absolute right-0 top-0"
          v-model="showTextSwitch.buttonText3"
          statusLabel
        />
        <div class="w-1/2 flex justify-between mb-3">
          <g-button round>按鈕</g-button>
          <g-button round type="second">按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <v-md-editor
          v-if="showTextSwitch.buttonText3"
          v-model="buttonText3"
          mode="preview"
        ></v-md-editor>
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-3">圖標</g-title>
    </div>

    <div class="mb-3 px-2 w-full md:w-3/4">
      <span
        class="flex justify-start mb-2"
        v-for="(item, idx) in icons"
        :key="item"
      >
        <template v-if="idx % 2 == 0">
          <span class="w-1/2 md:w-1/3"
            ><g-icons :name="item" class="text-main w-8"
          /></span>
          <span class="text-gray-600 leading-10">
            {{ `<g-icons name="${item}" />`}}
          </span>
        </template>
        <template v-else>
          <span class="w-1/2 md:w-1/3"
            ><g-icons :name="item" class="text-second w-8"
          /></span>
          <span class="text-gray-600 leading-10">
            {{ `<g-icons name="${item}" />`}}
          </span>
        </template>
      </span>
    </div>
  </div>

  <g-message />
  <g-loading />
</template>

<style lang="scss" scoped></style>
