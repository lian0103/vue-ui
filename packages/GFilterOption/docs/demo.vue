<script setup>
import { reactive } from 'vue';
import { v4 as uuidv4 } from 'uuid';

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
</script>

<template>
  <div class="w-full md:w-3/4 mx-auto mb-6">
    <g-title :level="2" class="my-4">篩選選項</g-title>
    <p class="mb-4">tableInfo.filterOtions:{{ tableInfo.filterOtions }}</p>
    <div class="flex">
      <g-filter-option
        v-for="column in tableInfo.columns.filter((item) => item.label)"
        v-model="tableInfo.filterOtions[column.name]"
        :key="column.name"
        :optionName="column.label"
      />
    </div>
  </div>
</template>
