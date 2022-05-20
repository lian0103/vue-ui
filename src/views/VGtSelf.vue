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
});

// watch(
//   () => inputs.radio4,
//   (newValue,oldVal) => {
//     console.log('in~~~radio4', newValue , oldVal);
//   }
// );

const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger();
};
const handleMsg = (type) => {
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type,
    title: 'hello~',
  });
};

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
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="my-3">版型</g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="my-3">大樹後台layout</g-title>
      <v-md-editor v-model="layoutText" mode="preview"></v-md-editor>
    </div>
    <div class="paragraphHead">
      <g-title :level="1" class="my-3">輸入</g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="my-3">勾選欄</g-title>
    </div>
    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="my-3 flex w-full">
        <g-checkbox class="mr-4" v-model="inputs.checked0" />
        <g-checkbox class="mr-4" v-model="inputs.checked3" />
        <g-checkbox class="mr-4" v-model="inputs.checked1" disabled />
        <g-checkbox class="mr-4" v-model="inputs.checked2" disabled />
      </div>
      <v-md-editor v-model="inputsText0" mode="preview"></v-md-editor>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="my-3">單選欄</g-title>
    </div>
    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="my-3 flex w-full">
        <g-radiobox class="mr-4" v-model="inputs.radio0" label="A" />
        <g-radiobox class="mr-4" v-model="inputs.radio1" label="B" />
        <g-radiobox class="mr-4" v-model="inputs.radio2" disabled label="C" />
        <g-radiobox class="mr-4" v-model="inputs.radio3" disabled label="D" />
      </div>

      <div class="my-3 flex w-full"></div>

      <v-md-editor v-model="inputsText1" mode="preview"></v-md-editor>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="my-3">群組單選欄</g-title>
    </div>
    <div class="my-3 px-2 w-full md:w-3/4">
      <g-radiobox-group class="my-3 flex w-full" v-model="inputs.radio4">
        <g-radiobox class="mr-4" :value="2" label="選項2" />
        <g-radiobox class="mr-4" :value="4" label="選項4" />
        <g-radiobox class="mr-4" :value="6" label="選項6" />
      </g-radiobox-group>
      <v-md-editor v-model="inputsText1_1" mode="preview"></v-md-editor>
    </div>

    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="my-3">切換開關</g-title>
    </div>
    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="my-3 flex w-full">
        <g-switch class="mr-4" v-model="inputs.switch0" />
        <g-switch class="mr-4" v-model="inputs.switch1" />
        <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
        <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
      </div>
      <v-md-editor v-model="inputsText2" mode="preview"></v-md-editor>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="my-3">過場效果</g-title>
    </div>

    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="flex justify-start my-3">
        <div class="w-1/2 md:w-1/3">
          <g-title :level="2" class="my-3">頁面載入中</g-title>
          <g-button pill @click="handleLoading">顯示</g-button>
        </div>
      </div>
      <v-md-editor v-model="loadText" mode="preview"></v-md-editor>
      <div class="flex justify-start my-3">
        <g-title :level="2" class="my-3">載入中</g-title>
        <g-loading-icon />
        <v-md-editor v-model="loadingText0" mode="preview"></v-md-editor>
      </div>

      <div class="flex justify-start my-3">
        <g-title :level="2" class="my-3">上傳中</g-title>
      </div>
      <div class="my-3 px-2 w-full">
        <div class="my-3 flex w-full">
          <g-upload-icon class="mr-2" />
          <g-upload-icon class="mr-2" :percent="20" />
          <g-upload-icon class="mr-2" :percent="80" />
          <g-upload-icon class="mr-2" :percent="0" auto />
        </div>
        <v-md-editor v-model="loadingText1" mode="preview"></v-md-editor>
      </div>

      <div class="flex justify-start my-3">
        <g-title :level="2" class="my-3">下載中</g-title>
      </div>
      <div class="my-3 px-2 w-full">
        <div class="my-3 flex w-full">
          <g-download-icon class="mr-2" />
          <g-download-icon class="mr-2" :percent="20" />
          <g-download-icon class="mr-2" :percent="100" />
          <g-download-icon class="mr-2" :percent="0" :auto="true" />
        </div>
        <v-md-editor v-model="loadingText2" mode="preview"></v-md-editor>
      </div>
    </div>
    <div class="paragraphHead">
      <g-title :level="1" class="my-3">通知</g-title>
    </div>

    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="flex justify-start my-3">
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
      <v-md-editor v-model="msgText" mode="preview"></v-md-editor>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="my-3">標題文字</g-title>
    </div>

    <div class="my-3 px-2 w-full md:w-3/4">
      <g-title :level="1">Bold / 24 / 文字樣式</g-title>
      <g-title :level="2">Medium / 20 / 文字樣式</g-title>
      <g-title :level="3">Bold / 18 / 文字樣式</g-title>
      <g-title>Medium / 16 / 文字樣式</g-title>
      <v-md-editor v-model="titleText" mode="preview"></v-md-editor>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="my-3">按鈕</g-title>
    </div>

    <div class="my-3 px-2 w-full md:w-3/4">
      <div class="mb-8">
        <div class="flex justify-between my-3">
          <g-button pill>按鈕</g-button>
          <g-button pill type="second">按鈕</g-button>
          <g-button pill type="yellow">按鈕</g-button>
          <g-button pill type="red">按鈕</g-button>
          <g-button pill type="white">按鈕</g-button>
        </div>
        <v-md-editor v-model="buttonText0" mode="preview"></v-md-editor>
      </div>
      <div class="mb-8">
        <div class="flex justify-between my-3">
          <g-button flat>按鈕</g-button>
          <g-button flat type="second">按鈕</g-button>
          <g-button flat type="yellow">按鈕</g-button>
          <g-button flat type="red">按鈕</g-button>
          <g-button flat type="white">按鈕</g-button>
        </div>

        <v-md-editor v-model="buttonText1" mode="preview"></v-md-editor>
      </div>

      <div class="mb-8">
        <div class="flex justify-between my-3">
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
        <div class="flex justify-between my-3">
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
        <v-md-editor v-model="buttonText2" mode="preview"></v-md-editor>
      </div>

      <div class="mb-8">
        <div class="w-1/2 flex justify-between my-3">
          <g-button round>按鈕</g-button>
          <g-button round type="second">按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <v-md-editor v-model="buttonText3" mode="preview"></v-md-editor>
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="my-3">圖標</g-title>
    </div>

    <div class="my-3 px-2 w-full md:w-3/4">
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
