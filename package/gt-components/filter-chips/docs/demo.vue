<script setup>
import { reactive } from 'vue';

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
  ],
  filterOtions: {},
  filterOtions2: {
    id: '',
    product: true,
    price: '',
    storage: '',
    tags: '',
  },
  isLoading: false,
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">篩選選項</g-title>
    <p class="mb-4">tableInfo.filterOtions:{{ tableInfo.filterOtions }}</p>
    <div class="flex">
      <g-filter-chips
        v-for="column in tableInfo.columns"
        v-model="tableInfo.filterOtions[column.name]"
        :key="column.name"
        :label="column.label"
      />
    </div>

    <g-title :level="2" class="my-4">篩選選項-單選模式</g-title>
    <p class="mb-4">tableInfo.filterOtions2:{{ tableInfo.filterOtions2 }}</p>
    <p>暫不支援迴圈渲染slot內容</p>
    <g-filter-chips-group class="flex" v-model="tableInfo.filterOtions2">
      <g-filter-chips name="id" label="ID" />
      <g-filter-chips name="product" label="商品名稱" />
      <g-filter-chips name="price" label="價格" />
      <g-filter-chips name="storage" label="庫存" />
      <g-filter-chips name="tags" label="標籤" />
    </g-filter-chips-group>
  </div>
</template>
