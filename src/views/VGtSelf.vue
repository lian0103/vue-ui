<script setup>
import { ref, getCurrentInstance, reactive } from 'vue';
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
const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger();
};
const handleMsg = (type) => {
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type,
    title: 'hello~',
  });
};

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

const inputs = reactive({
  checked0: true,
  checked1: false,
  checked2: true,
  checked3: false,
  radio0: true,
  radio1: false,
  radio2: true,
  radio3: false,
  switch0: false,
  switch1: true,
  switch2: false,
  switch3: true,
});
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">輸入</g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">checkbox</g-title>
    </div>
    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4 flex w-full">
        <g-checkbox class="mr-4" v-model="inputs.checked0" />
        <g-checkbox class="mr-4" v-model="inputs.checked3" />
        <g-checkbox class="mr-4" v-model="inputs.checked1" disabled />
        <g-checkbox class="mr-4" v-model="inputs.checked2" disabled />
      </div>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">radiobox</g-title>
    </div>
    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4 flex w-full">
        <g-radiobox class="mr-4" v-model="inputs.radio0" />
        <g-radiobox class="mr-4" v-model="inputs.radio1" />
        <g-radiobox class="mr-4" v-model="inputs.radio2" disabled />
        <g-radiobox class="mr-4" v-model="inputs.radio3" disabled />
      </div>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">swich</g-title>
    </div>
    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4 flex w-full">
        <g-switch class="mr-4" v-model="inputs.switch0" />
        <g-switch class="mr-4" v-model="inputs.switch1" />
        <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
        <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">版型</g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">大樹後台layout Grid排版</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4">
        {{`<g-layout headText="Great Tree UI" title="GT開發"
          >`}} <br />
          <div class="redText pl-6">
            {{`<template #sidebar> ... </template>`}}
          </div>
          <div class="redText pl-6">
            {{`<template #header> ... </template>`}}
          </div>
          <div class="redText pl-6">
            {{`<template #content> ... </template>`}}
          </div>

          {{`</g-layout
        >
        `}}
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">頁面過場</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button pill @click="handleLoading"
            >顯示Loading效果</g-button
          ></span
        >
      </div>
      <v-md-editor v-model="loadText" mode="preview"></v-md-editor>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">通知</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
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
      <g-title :level="1" class="mb-4">標題文字</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-title :level="1">Bold / 24 / 文字樣式</g-title></span
        >
        <span class="mx-4 leading-10 font-bold"
          >{{ '<g-title :level="1">Bold / 24 / 文字樣式</g-title>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-title :level="2">Medium / 20 / 文字樣式</g-title></span
        >
        <span class="mx-4 leading-10 font-medium"
          >{{ '<g-title :level="2">Medium / 20 / 文字樣式</g-title>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-title :level="3">Bold / 18 / 文字樣式</g-title></span
        >
        <span class="mx-4 leading-10 font-light"
          >{{ '<g-title :level="3">Bold / 18 / 文字樣式</g-title>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-title>Medium / 16 / 文字樣式</g-title></span
        >
        <span class="mx-4 leading-6 font-thin"
          >{{ '<g-title>Medium / 16 / 文字樣式</g-title>' }}</span
        >
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">按鈕</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-8">
        <div class="w-1/2 flex justify-between mb-4">
          <g-button pill>按鈕</g-button>
          <g-button pill type="second">按鈕</g-button>
          <g-button pill type="yellow">按鈕</g-button>
          <g-button pill type="red">按鈕</g-button>
          <g-button pill type="white">按鈕</g-button>
        </div>

        <div class="leading-10 text-mainDarker">
          {{ '<g-button pill>按鈕</g-button>' }}<br /><span class=""
            >Type:default , second , yellow , red , white</span
          >
        </div>
      </div>
      <div class="mb-8">
        <div class="w-1/2 flex justify-between mb-4">
          <g-button flat>按鈕</g-button>
          <g-button flat type="second">按鈕</g-button>
          <g-button flat type="yellow">按鈕</g-button>
          <g-button flat type="red">按鈕</g-button>
          <g-button flat type="white">按鈕</g-button>
        </div>

        <div class="leading-10 text-mainDarker">
          {{ '<g-button flat>按鈕</g-button> ' }}<br /><span class=""
            >Type:default , second , yellow , red , white</span
          >
        </div>
      </div>

      <div class="mb-8">
        <div class="w-1/2 flex justify-between mb-4">
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

        <div class="w-1/2 flex justify-between mb-4">
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

        <div class="leading-10 text-mainDarker">
          <span>
            {{`<g-button flat
              ><g-icons name="chevronLeft" class="w-8" /> 上一頁</g-button
            >
            `}} </span
          ><br />
          <span>
            {{`
            <g-button flat
              ><g-icons name="chevronRight" class="w-8" /> 下一頁</g-button
            >`}} </span
          ><br /><span class=""
            >Type:default , second , yellow , red , white</span
          >
        </div>
      </div>

      <div class="mb-8">
        <div class="w-1/2 flex justify-between mb-4">
          <g-button round>按鈕</g-button>
          <g-button round type="second">按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <div class="leading-10 text-mainDarker">
          {{ ' <g-button round>按鈕</g-button> ' }}<br /><span class=""
            >Type:default , second , yellow , red , white</span
          >
        </div>
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">svg icon</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
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
