<script setup>
import { reactive, getCurrentInstance, onMounted, ref } from 'vue';
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
            handleSortCallback: function () {
                alert('custom sort callback');
            },
            width: 480,
        },
        {
            name: 'price',
            label: '價格',
            width: 380,
            sort: true,
        },
        {
            name: 'storage',
            label: '庫存',
            sort: true,
        },
        {
            name: 'tags',
            width: 620,
            label: '標籤',
        },
        {
            name: 'btns',
            width: 200,
            label: '',
        },
    ],
    columns2: [
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
            handleSortCallback: function () {
                alert('custom sort callback');
            },
            width: 480,
        },
        {
            name: 'price',
            label: '價格',
            width: 380,
            sort: true,
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
    data2: [
        { product: 'aaa', price: 200, storage: 25, id: uuidv4() },
        { product: 'bbbb', price: 100, storage: 15, id: uuidv4() },
        { product: 'cc', price: 300, storage: 5, id: uuidv4() },
    ],
    filterOtions: {},
    isLoading: false,
});

const tableInfo2 = reactive({
    columns: [
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
        },
        {
            name: 'price',
            label: '價格',
            sort: true,
        },
    ],
    data: [
        { product: 'aaa', price: 200, id: uuidv4() },
        { product: 'bbbb', price: 100, id: uuidv4() },
    ],
    filterOtions: {},
    isLoading: false,
});

const tableInfo3 = reactive({
    columns: [
        {
            name: 'selection',
            type: 'selection',
        },
        {
            name: 'product',
            label: '商品名稱',
            sort: false,
        },
        {
            name: 'price',
            label: '價格',
            sort: true,
        },
    ],
    data: [
        { product: 'aaa', price: 200, id: uuidv4() },
        { product: 'bbbb', price: 100, id: uuidv4() },
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
    let arr = instance.refs.tableRef.getCheckedList();
    // console.log('arr',arr)
    arr = arr.map((obj) => obj.product);
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

const tableDemoData = ref({
    data: tableInfo.data,
    columns: tableInfo.columns,
});

const switchData = () => {
    tableDemoData.value =
        tableDemoData.value.data.length === tableInfo.data.length
            ? {
                  data: tableInfo.data2,
                  columns: tableInfo.columns2,
              }
            : {
                  data: tableInfo.data,
                  columns: tableInfo.columns,
              };
};

const showLoading = () => {
    tableInfo.isLoading = true;
    setTimeout(() => {
        tableInfo.isLoading = false;
    }, 3000);
};
</script>
<template>
    <div class="w-full mx-auto mb-6">
        <g-title :level="2" class="tw-m3">表格 資料->tableInfo3</g-title>
        支援欄位資料為selection時,也顯示checkbox。 --temp
        <g-table :columns="tableInfo3.columns" :data="tableInfo3.data" />

        <g-title :level="2" class="tw-m3">表格 固定高度</g-title>
        <g-table :columns="tableInfo2.columns" :data="tableInfo2.data" :height="350" underline />

        <g-divider />

        <g-title :level="2" class="tw-m3">表格 固定寬度</g-title>
        <g-table :columns="tableInfo2.columns" :data="tableInfo2.data" :isCheckbox="true" :width="500" />

        <g-divider />

        <g-title :level="2" class="tw-m3">表格 寬高卷軸</g-title>
        <g-table
            ref="tableRef"
            :columns="tableDemoData.columns"
            :data="tableDemoData.data"
            :height="500"
            :isCheckbox="true"
            name="products"
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
        <g-dialog :title="dialogInfo.title" v-model="dialogInfo.show1"> body~~ </g-dialog>

        <g-dialog v-model="dialogInfo.show2" mode="delete"> 確定刪除嗎? </g-dialog>

        <g-button
            class="mb-4 mt-4"
            @click="
                () => {
                    switchData();
                }
            "
            >切換資料</g-button
        >
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

<style lang="scss">
.tw-m3{
  @apply m-3;
}


</style>