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
<script>
export default {
  name: 'GTable',
};
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
          <g-icon v-if="cItem.sort" class="sort-icon" name="sequence" />
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
