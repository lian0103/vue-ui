<script setup>
import { ref, getCurrentInstance, reactive } from 'vue';
import { GButton, GIcons, GTitle, GLayout, GLoading } from '../components/';

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
  instance.appContext.config.globalProperties.handleLoadingTrigger(true);
};
const handleLoadTrigger = (show) => {
  // console.log(show.value);
};
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">版型</g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">大樹後台layout Grid排版</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4">
        {{`<g-layout headText="Great Tree UI" title="Demo"
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

    <div class="w-full md:w-3/4 mx-auto">
      <g-title :level="2" class="mb-4">layout版型中el-menu使用</g-title>
    </div>
    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="mb-4">
        {{`<g-layout headText="HeadText" title="title"
          >`}} <br />
          <div class="redText pl-6">
            //樣式如左方所示 <br />
            {{`<template #sidebar> <el-menu class="gt-menu" /> </template>`}}
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
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button pill>按鈕</g-button></span>
        <span class="mx-4 leading-10 text-mainDarker"
          >{{ '<g-button pill>按鈕</g-button>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button flat>按鈕</g-button></span>
        <span class="mx-4 leading-10 text-mainDarker"
          >{{ '<g-button flat>按鈕</g-button> ' }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button flat
            ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
          ></span
        >
        <span class="mx-4 leading-10 text-mainDarker"
          >{{ `<g-button flat
            ><g-icons name="chevronLeft" class="w-8" /> 上一頁</g-button
          >
          ` }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button flat
            ><g-icons
              name="chevronRight"
              class="text-main w-8"
            />下一頁</g-button
          ></span
        >
        <span class="mx-4 leading-10 text-mainDarker"
          >{{ `<g-button flat
            ><g-icons name="chevronRight" class="text-main w-8" />
            下一頁</g-button
          >
          ` }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button>預設按鈕</g-button></span>
        <span class="mx-4 leading-10 font-semibold text-mainDarker"
          >{{ ' <g-button>預設按鈕</g-button> ' }}</span
        >
      </div>
    </div>

    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button pill type="second">按鈕</g-button></span
        >
        <span class="mx-4 leading-10 font-semibold text-second"
          >{{ '<g-button pill type="second">按鈕</g-button>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button flat type="second">按鈕</g-button></span
        >
        <span class="mx-4 leading-10 font-semibold text-second"
          >{{ '<g-button flat type="second">按鈕</g-button> ' }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button type="second">預設按鈕</g-button></span
        >
        <span class="mx-4 leading-10 font-semibold text-second"
          >{{ ' <g-button type="second">預設按鈕</g-button> ' }}</span
        >
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
            {{ `<g-icons name="${item}" class="text-main w-8" />`}}
          </span>
        </template>
        <template v-else>
          <span class="w-1/2 md:w-1/3"
            ><g-icons :name="item" class="text-second w-8"
          /></span>
          <span class="text-gray-600 leading-10">
            {{ `<g-icons name="${item}" class="text-second w-8" />`}}
          </span>
        </template>
      </span>
    </div>
  </div>

  <g-loading :trigger="handleLoadTrigger" />
</template>

<style lang="scss" scoped></style>
