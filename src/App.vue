<script setup>
import { ref } from 'vue';

// import {
//   GButton,
//   GIcons,
//   GTitle,
//   GDropdown,
//   GDropdownMenu,
//   GDropdownItem,
// } from 'gt-front-ui';

import {
  GButton,
  GIcons,
  GTitle,
  GDropdown,
  GDropdownMenu,
  GDropdownItem,
  GTabs,
  GTabPane,
} from './components/';

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

const activeName = ref('first');

const handleClick = (tab, event) => {
  // console.log(tab, event)
};
</script>

<template>
  <div class="py-12 flex justify-center items-center h-full flex-col">
    <div class="mb-8 w-full md:w-1/2 mx-auto">
      <g-title :level="1">樣式全域變數</g-title>
      <p class="">
        方式1:在 sre/assets/index.scss設定scss參數 ex. $color:#f00;
      </p>
      <p class="">
        方式2:在 sre/assets/index.scss設定css參數 ex. :root { --color4: #444;
        --color5: #f66; --color6: #66f; }
      </p>
      <p class="">
        方式3:在tailwind.config.js中設定tailwind語法的對應參數 ex: primary:
        '#32A03D'
      </p>
      <p class="">
        其他:elementPlus:依官方文件可在蓋掉定義在var.scss中的變數
        ex.elementPlus.scss
      </p>
    </div>
    <div class="mb-16 w-full md:w-1/2 mx-auto h-32">
      <g-title :level="1">ElementPlus組件修改(測試..)</g-title>
      <g-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="VeryLongTabName" name="first">
          <span class="mx-4 leading-10 font-bold"
            >{{ `<g-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="TAB" name="first">TAB</el-tab-pane>
              <el-tab-pane label="VeryLongTabName" name="second"
                >VeryLongTabName</el-tab-pane
              > </g-tabs
            >` }}
          </span>
        </el-tab-pane>
        <el-tab-pane label="TAB" name="second">TAB</el-tab-pane>
      </g-tabs>
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3">
          <g-dropdown type="primary" size="large" :hide-on-click="false">
            <g-button>
              <g-icons
                name="ellipsis"
                class="w-6"
              />假裝是很長的下拉選單</g-button
            >
            <template #dropdown>
              <g-dropdown-menu>
                <g-dropdown-item>wa</g-dropdown-item>
                <g-dropdown-item>Action 1111111</g-dropdown-item>
                <g-dropdown-item>Action 2222222</g-dropdown-item>
                <g-dropdown-item>Action 3333333</g-dropdown-item>
              </g-dropdown-menu>
            </template>
          </g-dropdown>
        </span>
        <span class="mx-4 leading-10 font-bold"
          >{{ `<g-dropdown type="primary">///</g-dropdown>` }}</span
        >
      </div>
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
      <div class="flex justify-start mb-4">
        <div class="w-1/2 md:w-1/3">
          <g-dropdown type="primary" size="large" :hide-on-click="false">
            <g-button flat>
              <g-icons
                name="ellipsis"
                class="w-6"
              />假裝是很長的下拉選單</g-button
            >
            <template #dropdown>
              <g-dropdown-menu>
                <g-dropdown-item>a</g-dropdown-item>
                <g-dropdown-item>Action 1111111</g-dropdown-item>
                <g-dropdown-item>Action 2222222</g-dropdown-item>
                <g-dropdown-item>Action 3333333</g-dropdown-item>
              </g-dropdown-menu>
            </template>
          </g-dropdown>
        </div>
        <div class="mx-4 leading-10 font-bold">
          {{`<g-dropdown type="primary" size="large" :hide-on-click="false"
            >///</g-dropdown
          >`}}
        </div>
      </div>
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
      <g-title :level="1">手刻設計的基礎元件</g-title>
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
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

    <div class="mb-4 px-2 w-full md:w-1/2">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button pill>按鈕</g-button></span>
        <span class="mx-4 leading-10 text-primaryDarker"
          >{{ '<g-button pill>按鈕</g-button>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button flat>文字按鈕</g-button></span>
        <span class="mx-4 leading-10 text-primaryDarker"
          >{{ '<g-button flat>文字按鈕</g-button> ' }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"
          ><g-button flat
            ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
          ></span
        >
        <span class="mx-4 leading-10 text-primaryDarker"
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
              class="text-primary w-8"
            />下一頁</g-button
          ></span
        >
        <span class="mx-4 leading-10 text-primaryDarker"
          >{{ `<g-button flat
            ><g-icons name="chevronRight" class="text-primary w-8" />
            下一頁</g-button
          >
          ` }}</span
        >
      </div>

      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button>預設按鈕</g-button></span>
        <span class="mx-4 leading-10 font-semibold text-primaryDarker"
          >{{ ' <g-button>預設按鈕</g-button> ' }}</span
        >
      </div>
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
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
          ><g-button flat type="second">文字按鈕</g-button></span
        >
        <span class="mx-4 leading-10 font-semibold text-second"
          >{{ '<g-button flat type="second">文字按鈕</g-button> ' }}</span
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

    <div class="mb-4 px-2 w-full md:w-1/2">
      <span
        class="flex justify-start mb-2"
        v-for="(item, idx) in icons"
        :key="item"
      >
        <template v-if="idx % 2 == 0">
          <span class="w-1/2 md:w-1/3"
            ><g-icons :name="item" class="text-primary w-8"
          /></span>
          <span class="text-gray-600 leading-10">
            {{ '<g-icons name="'}} {{item}} {{'" class="text-primary w-8" />'}}
          </span>
        </template>
        <template v-else>
          <span class="w-1/2 md:w-1/3"
            ><g-icons :name="item" class="text-second w-8"
          /></span>
          <span class="text-gray-600 leading-10">
            {{ '<g-icons name="'}} {{item}} {{'" class="text-second w-8" />'}}
          </span>
        </template>
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import './assets/index';

div > p {
  margin-bottom: 10px;
  padding: 4px 10px;
}
.test {
  color: $color1;
  background: $color2;
  border: 2px solid $color3;
}

.test2 {
  color: var(--color4);
  background: var(--color5);
  border: 2px solid var(--color6);
}

.test3 {
  @apply text-primary bg-soft border border-red-600;
}

.code {
  @apply bg-gray-600 text-white;
}
</style>
