<script setup>
import { ref, computed, reactive, watch, useSlots, h } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const tableEnum = {
  CHECKBOX: 'checkbox',
  ASC: 'asc',
  DESC: 'desc',
};

const { columns, isCheckBox, data } = defineProps({
  columns: {
    type: Array,
    default: [
      {
        name: 'product',
        label: '商品名稱',
        sort: false,
        width: 100,
      },
      {
        name: 'price',
        label: '價格',
        sort: true,
      },
      {
        name: 'storage',
        label: '庫存',
        sort: true,
      },
    ],
  },
  data: {
    type: Array,
    default: [
      { product: 'aaa', price: 200, storage: 25 },
      { product: 'bbbb', price: 100, storage: 15 },
      { product: 'cc', price: 300, storage: 5 },
      { product: 'dddddddddddddddddddddddd', price: 400, storage: 65 },
    ],
  },
  isCheckBox: {
    type: Boolean,
    default: true,
  },
});

const slots = useSlots();

// console.log('slots', slots);

const isCheckAll = ref(false);
const columnSortStatus = reactive({});

const columnsComputed = computed(() => {
  let arr = columns
    .map((cItem, cIdx) => {
      return cItem.name
        ? {
            name: cItem.name,
            label: cItem.label,
            width: cItem.width || 80,
            sort: cItem.sort || false,
          }
        : false;
    })
    .filter((cItem) => cItem);

  //   console.log(arr);

  return arr;
});

const columnsClassComputed = (cItem) => {
  let arr = [];
  if (cItem.sort) arr.push('cursor-pointer');
  return arr;
};

const dataWithStatus = ref([
  ...data.map((dItem) => {
    return {
      ...dItem,
      checked: false,
    };
  }),
]);

watch(
  () => isCheckAll.value,
  () => {
    dataWithStatus.value = dataWithStatus.value.map((dItem) => {
      return {
        ...dItem,
        checked: isCheckAll.value,
      };
    });
  }
);

const handleColumnSort = (cItem) => {
  if (cItem.sort) {
    let target = cItem.name;

    if (
      columnSortStatus[target] === tableEnum.ASC ||
      !columnSortStatus[target]
    ) {
      dataWithStatus.value.sort((a, b) => {
        return b[target] - a[target];
      });
      columnSortStatus[target] = tableEnum.DESC;
    } else {
      dataWithStatus.value.sort((a, b) => {
        return a[target] - b[target];
      });
      columnSortStatus[target] = tableEnum.ASC;
    }
  }
};
</script>

<template>
  <div class="gt-table">
    <div class="table-head">
      <template v-if="isCheckBox">
        <div class="head-column">
          <g-checkbox v-model="isCheckAll" />
        </div>
      </template>

      <div
        v-for="cItem in columnsComputed"
        :key="cItem.name"
        :style="{ width: cItem.width + 'px' }"
        class="head-column"
        :class="columnsClassComputed(cItem)"
        @click="() => handleColumnSort(cItem)"
      >
        <span> {{ cItem.label }}</span>
        <g-icons v-if="cItem.sort" class="sortIcon" name="sequence" />
      </div>
    </div>

    <div class="table-body">
      <div
        v-for="(rItem, rIdx) in dataWithStatus"
        class="row"
        :key="rIdx"
        :class="rItem.checked ? 'row-check' : ''"
      >
        <template v-if="isCheckBox">
          <div class="row-cell">
            <g-checkbox v-if="rItem.checked" v-model="rItem.checked" />
            <g-checkbox v-if="!rItem.checked" v-model="rItem.checked" />
          </div>
        </template>
        <div
          v-for="(cItem, cIdx) in columnsComputed"
          :key="cItem.name + '-' + rIdx + '-' + cIdx"
          :style="{ width: cItem.width + 'px' }"
          class="row-cell"
        >
          <span> {{ rItem[cItem.name] || cItem.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-table {
  @apply w-full rounded-lg;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  min-height: 100px;
  .table-head {
    @apply bg-soft flex justify-start items-center;
    .head-column {
      padding: 7px 9px;
      font-weight: 500;
      font-size: 16px;
      line-height: 24px;
      overflow-wrap: break-word;
      @apply text-primaryDarker flex justify-start items-center select-none;
    }
    .sortIcon {
      @apply text-gray1;
    }
  }
  .table-body {
    padding-bottom: 5px;
    letter-spacing: 0.05em;
    .row {
      min-height: 62px;
      @apply text-gray1 flex justify-start items-center relative;
      .row-cell {
        padding: 7px 9px;
        overflow-wrap: break-word;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        letter-spacing: 0.05em;
      }

      &.row-check {
        width: 99%;
        min-height: 58px;
        margin: 3px 0 3px auto;
        @apply bg-color4 relative border-l-4 border-solid border-main;
        border-radius: 5px;
      }
    }
  }
}
</style>
