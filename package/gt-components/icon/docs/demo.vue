<script setup>
const icons = [
  'up',
  'arrow-down',
  'arrow-left',
  'calendar',
  'check',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
  'distribute',
  'home',
  'info',
  'items',
  'lock',
  'setting',
  'store',
  'tool',
  'user',
  'menu',
  'cus01',
  'file',
  'cus03',
  'cus04',
  'cus05',
];

const customIconClasses = `寫法: <g-icon classes="fa-solid fa-store" />。渲染結果:<i class="gt-icon gt-icon-md fa-solid fa-store"></i>`;
</script>

<template>
  <g-title :level="3" class="mb-3 w-full">sm:14px;md:24px;lg:36px;</g-title>
  <div class="mb-3 px-2 w-full md:w-3/4 flex flex-wrap justify-between">
    <span
      class="flex justify-start mb-2 w-1/2"
      v-for="(item, idx) in icons"
      :key="item"
    >
      <div class="flex justify-center items-center leading-4">
        <template v-if="idx % 2 == 0">
          <g-icon :name="item" class="text-purple-600 mr-2" size="sm" />
          <g-icon :name="item" class="text-purple-600 mr-2" size="md" />
          <g-icon :name="item" class="text-purple-600 mr-2" size="lg" />
        </template>
        <template v-else>
          <g-icon :name="item" class="text-blue-600" size="sm" />
          <g-icon :name="item" class="text-blue-600" size="md" />
          <g-icon :name="item" class="text-blue-600" size="lg" />
        </template>
        <span class="text-gray-600 leading-10">
          {{ `<g-icon name="${item}" />`}}
        </span>
      </div>
    </span>
  </div>

  <g-title :level="3" class="mb-3 w-full">自定義classes</g-title>
  <g-icon classes="fa-solid fa-store" />
  {{ customIconClasses }}
</template>
