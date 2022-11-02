<script setup>
import { ref } from 'vue';
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
  'lock',
  'setting',
  'store',
  'tool',
  'user',
  'menu',
  'file',
  'information'
];

const customIconClasses = `寫法: <g-icon classes="fas fa-vote-yea" />。渲染結果:<i class="fas fa-vote-yea"></i>`;

const classArr = ['fas fa-vote-yea', 'fas fa-user' , 'far fa-file-code'];
const classRef = ref(classArr[0]);

const handleIconClassChange = () => {
  let index = classArr.findIndex((item) => item == classRef.value);
  // console.log(index);
  classRef.value =
    index + 1 <= classArr.length - 1 ? classArr[index + 1] : classArr[0];
};
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

  <g-title :level="2" class="mt-3 w-full">自定義classes</g-title>

  <g-button @click="handleIconClassChange" :width="100" class="mt-3"
    >資料更換</g-button
  >
  <div class="my-2">:classes = {{ classRef }}</div>
  <div class="my-2">
    <g-icon :classes="classRef" name="name" />
  </div>
  <div class="text-red-600 my-2"> {{ customIconClasses }} </div>
</template>
