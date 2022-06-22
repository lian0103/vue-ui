<script setup>
import {
  ref,
  computed,
  reactive,
  watch,
  useSlots,
  onMounted,
  getCurrentInstance,
} from 'vue';
import GLoadingIcon from '../GLoadingIcon.vue';

const tableEnum = {
  CHECKBOX: 'checkbox',
  ASC: 'asc',
  DESC: 'desc',
};

const {
  name,
  columns,
  isCheckBox,
  data,
  height,
  getCheckedList,
  rowClick,
  isLoading,
} = defineProps({
  name: {},
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  isCheckBox: {
    type: Boolean,
    default: true,
  },
  height: {},
  rowClick: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
});

const gtTable = ref();
const slots = useSlots();
const slotColumns = Object.keys(slots);

const isCheckAll = ref(false);
const columnSortStatus = reactive({});

const columnsComputed = computed(() => {
  let arr = columns
    .map((cItem, cIdx) => {
      return cItem.name
        ? {
            name: cItem.name,
            label: cItem.label || '',
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
  if (cItem.sort) arr.push('gt-cursor-pointer');
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

const isOverflowX = ref(false);

const tableWidthComputed = computed(() => {
  let width =
    columnsComputed.value.map((item) => item.width).reduce((a, b) => a + b) +
    80;

  if (width > Math.ceil(gtTable.value?.getBoundingClientRect()?.width)) {
    isOverflowX.value = true;
  }

  return width;
});

const tableMaxHeightComputed = computed(() => {
  let maxHeight = parseInt(height) - 40;
  return maxHeight ? maxHeight + 'px' : 'none';
});

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

const handleRowClick = (row) => {
  if (!rowClick) return false;
  // console.log(row)
  row.checked = !row.checked;
};

onMounted(() => {
  if (name) {
    const instance = getCurrentInstance();
    instance.appContext.config.globalProperties[`gt-table-${name}`] = {
      getCheckedList: () => {
        return dataWithStatus.value.filter((dItem) => dItem.checked);
      },
    };
  }
});
</script>

<template>
  <div
    ref="gtTable"
    class="gt-table-wrapper"
    :class="
      isLoading ? 'overflow-hidden' : isOverflowX ? 'overflow-x-scroll' : ''
    "
  >
    <div class="gt-table" :style="{ width: tableWidthComputed + 'px' }">
      <div class="table-head">
        <template v-if="isCheckBox">
          <div class="head-column checknoxColumn">
            <g-checkbox v-model="isCheckAll" type="white" />
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

      <div
        class="table-body"
        :class="isLoading ? 'overflow-hidden' : ''"
        :style="{ 'max-height': tableMaxHeightComputed }"
      >
        <template v-if="isLoading">
          <div class="loading">
            <g-loading-icon />
          </div>
        </template>
        <template v-else>
          <div
            v-for="(rItem, rIdx) in dataWithStatus"
            class="row"
            :key="rIdx"
            :class="rItem.checked ? 'row-check' : ''"
            @click="
              () => {
                handleRowClick(rItem);
              }
            "
          >
            <template v-if="isCheckBox">
              <div
                class="row-cell checknoxColumn"
                @click="
                  () => {
                    handleRowClick(rItem);
                  }
                "
              >
                <g-checkbox
                  v-if="rItem.checked"
                  v-model="rItem.checked"
                  type="white"
                />
                <g-checkbox
                  v-if="!rItem.checked"
                  v-model="rItem.checked"
                  type="white"
                />
              </div>
            </template>
            <div
              v-for="(cItem, cIdx) in columnsComputed"
              :key="cItem.name + '-' + rIdx + '-' + cIdx"
              :style="{ width: cItem.width + 'px' }"
              class="row-cell"
            >
              <template v-if="slotColumns.includes(cItem.name)">
                <slot :name="cItem.name" :row="rItem" />
              </template>
              <template v-else>
                <span> {{ rItem[cItem.name] || cItem.name }}</span>
              </template>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-table-wrapper {
  border-radius: 8px;
  padding-bottom: 10px;
  @apply bg-white relative;
  // overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #d9d9d9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #aaaaaa;
    &:hover {
      background-color: #666666;
    }
  }
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
}

.gt-table {
  min-width: 100%;
  letter-spacing: 0.8px;
  min-height: 200px;
  .table-head {
    margin-bottom: 2px;
    padding: 0 10px;
    @apply bg-soft flex flex-shrink-0 justify-start items-center;
    .head-column {
      padding: 7px 9px;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      overflow-wrap: break-word;
      @apply text-primaryDarker flex justify-start items-center select-none;
      &.checknoxColumn {
        padding: 5px 33px 5px 23px;
      }
    }
    .sortIcon {
      @apply text-gray1;
    }
  }
  .table-body {
    padding: 0 10px 5px 10px;
    height: auto;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
      background-color: #d9d9d9;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #aaaaaa;
      &:hover {
        background-color: #666666;
      }
    }
    .loading {
      @apply flex justify-center items-center absolute;
      left: 0;
      top: 38px;
      width: 100%;
      height: 162px;
    }

    .row {
      min-height: 58px;
      margin: 2px 0 2px auto;
      @apply text-gray1 flex justify-start items-center relative flex-nowrap bg-white;
      .row-cell {
        padding: 7px 9px;
        overflow-wrap: break-word;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        &.checknoxColumn {
          padding: 5px 33px 5px 23px;
        }
      }

      &:hover {
        @apply bg-color6;
      }

      &.row-check {
        width: 100%;
        min-height: 58px;
        margin: 2px 0 2px auto;
        @apply bg-color4 relative border-l-4 border-solid border-main;
        border-radius: 5px;
      }
    }
  }
}
</style>
