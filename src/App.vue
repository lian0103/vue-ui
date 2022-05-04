<script setup>
import { ref } from 'vue';
import { GButton, GIcons, GTitle, GDropdown } from './components/';

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
  // 'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
];
</script>

<template>
  <div class="py-12 flex justify-center items-center h-full flex-col">
    <div class="mb-4 px-2 w-full md:w-1/2">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3">
          <g-dropdown type="primary">
            <g-button>
              <g-icons name="ellipsis" class="w-6" />很長的列表名稱</g-button
            >
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1111111</el-dropdown-item>
                <el-dropdown-item>Action 2222222</el-dropdown-item>
                <el-dropdown-item>Action 3333333</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </g-dropdown>
        </span>
        <span class="mx-4 leading-10 font-bold"
          >{{ `<g-dropdown type="primary">
            ...<template #dropdown>...</template> </g-dropdown
          >` }}</span
        >
      </div>
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
    </div>

    <div class="mb-4 px-2 w-full md:w-1/2">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button pill>按鈕</g-button></span>
        <span class="mx-4 leading-10 font-semibold text-primaryDarker"
          >{{ '<g-button pill>按鈕</g-button>' }}</span
        >
      </div>
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3"><g-button flat>文字按鈕</g-button></span>
        <span class="mx-4 leading-10 font-semibold text-primaryDarker"
          >{{ '<g-button flat>文字按鈕</g-button> ' }}</span
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
      <span class="flex justify-start mb-2" v-for="item in icons" :key="item">
        <span class="w-1/2 md:w-1/3"
          ><g-icons :name="item" class="text-primary w-12"
        /></span>
        <span class="text-gray-600 leading-10"
          >{{ '<g-icons name="'}}{{item}}{{'" class="text-primary w-12" />'}}</span
        >
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
