<script setup>
import GMessage from '../../message/index.js';
import { ref , reactive, getCurrentInstance, onMounted, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const instance = getCurrentInstance();

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

const handleRowClick = (row, dialogType) => {
  // console.log(row);
  // handleDialog(dialogType);
  dialogInfo['show' + dialogType] = true;
};
const handleTableChecked = () => {
  // let arr =
  //   instance.appContext.config.globalProperties[
  //     'gt-table-products'
  //   ].getCheckedList();

  let arr = instance.refs.tableRef.getCheckedList();
  arr = arr.map((obj) => obj.id);
  instance.appContext.config.globalProperties.handleMessageTrigger({
    type: 'info',
    title: '已選擇',
    msg: `row ids:${arr.join(',')}`,
  });
};

const dialogInfo = reactive({
  show1: false,
  show2: false,
});

const showLoading = () => {
  tableInfo.isLoading = true;
  setTimeout(() => {
    tableInfo.isLoading = false;
  }, 3000);
};

</script>
<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">表格</g-title>
    <g-table
      ref="tableRef"
      :columns="tableInfo.columns"
      :data="tableInfo.data"
      :height="450"
      name="products"
      rowClick
      :isLoading="tableInfo.isLoading"
    >
      <template v-slot:tags="{ row }">
        <div class="flex justify-between">
          <g-tag type="warning" border label="上架中" />
          <g-tag type="second" border dot label="可出貨" />
        </div>
      </template>

      <template v-slot:btns="{ row }">
        <div class="flex justify-start">
          <g-button
            flat
            class="mr-4"
            @click.stop="
              () => {
                handleRowClick(row, 1);
              }
            "
            >編輯</g-button
          >
          <g-button
            flat
            type="red"
            @click.stop="
              () => {
                handleRowClick(row, 2);
              }
            "
            >刪除</g-button
          >
        </div>
      </template>
    </g-table>
    <g-dialog :title="dialogInfo.title" v-model="dialogInfo.show1">
      body~~
    </g-dialog>

    <g-dialog v-model="dialogInfo.show2" mode="delete"> 確定刪除嗎? </g-dialog>
    <g-button
      class="mb-4 mt-4"
      @click="
        () => {
          handleTableChecked();
        }
      "
      >當前選擇顯示</g-button
    >
    <g-button
      class="mb-4 mt-4"
      @click="
        () => {
          showLoading();
        }
      "
      >載入中顯示</g-button
    >
  </div>
  <g-message />
</template>
