<script setup>
import {
  ref,
  computed,
  reactive,
  watch,
  useSlots,
  onMounted,
  getCurrentInstance,
} from "vue";

import { v4 as uuidv4 } from "uuid";
import { debug } from "console";

const emit = defineEmits(['update:data'])

const tableEnum = {
  CHECKBOX: "checkbox",
  ASC: "asc",
  DESC: "desc",
};

const props = defineProps({
  name: {},
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  isCheckbox: {
    type: Boolean,
    default: true,
  },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
  },
  rowClick: {
    type: Boolean,
    default: false,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
});

const gtTableId = uuidv4();
const gtTableWidth = ref(0);

const slots = useSlots();
const slotColumns = Object.keys(slots);

const isCheckAll = ref(false);
const columnSortStatus = reactive({});
const isOverflowX = ref(false);

const columnsComputed = computed(() => {
  let arr = props.columns
    .map((cItem, cIdx) => {
      let width = "";
      if (typeof(cItem.width) === 'number') {
        width = cItem.width + "px";
      } else if (typeof(cItem.width) === 'string') {
        width = cItem.width;
      } else {
        width = "auto";
      }
      return cItem.name
        ? {
            ...cItem,
            name: cItem.name,
            label: cItem.label || "",
            width: width,
            sort: cItem.sort || false,
          }
        : false;
    })
    .filter((cItem) => cItem);
  //   console.log(arr);
  return arr;
});

const columnsClassComputed = (cItem) => {
  let arr = ["with-flex-grow"];
  if (cItem.sort || cItem.handleSortCallback) arr.push("gt-cursor-pointer");
  return arr;
};

const wrapperComputed = computed(() => {
  let arr = [];
  if (props.isLoading) {
    return ["overflow-with-hidden"];
  }
  if (isOverflowX.value) {
    return ["overflow-with-x-scroll"];
  }
  return arr;
});

const dataWithStatus = ref([
  ...props.data.map((dItem) => {
    return {
      ...dItem,
      checked: false,
    };
  }),
]);

watch(
  () => {
    return dataWithStatus;
  },
  (newValue, oldValue) => {
    emit('update:data', newValue.value)
  }, {
    deep:true
  }
);

const tableWidthComputed = computed(() => {
  let width =
    columnsComputed.value.map((item) => item.width).reduce((a, b) => a + b) +
    80;
  return width;
});

watch(
  () => gtTableWidth.value,
  (val) => {
    // console.log(val);
  }
);

const tableInnerStyleComputed = computed(() => {
  let height = parseInt(props.height) - 40;
  return {
    height: height ? height + "px" : "none",
  };
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
  // console.log(cItem);
  if (cItem.handleSortCallback) {
    cItem.handleSortCallback();
  }

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
  if (!props.rowClick) return false;
  // console.log(row)
  row.checked = !row.checked;
};

const getCheckedList = () => {
  return dataWithStatus.value.filter((dItem) => dItem.checked);
};

defineExpose({
  getCheckedList,
});

onMounted(() => {
  if (props.name) {
    const instance = getCurrentInstance();
    instance.appContext.config.globalProperties[`gt-table-${props.name}`] = {
      getCheckedList,
    };
  }
  gtTableWidth.value = document.getElementById(`gt-${gtTableId}`).offsetWidth;

  // console.log(tableWidthComputed.value, gtTableWidth.value);
  if (tableWidthComputed.value > gtTableWidth.value) {
    isOverflowX.value = true;
  }
});
</script>
<script>
export default {
  name: "GTable",
};
</script>
<template>
  <div
    :id="'gt-' + gtTableId"
    ref="gtTable"
    class="gt-table-wrapper"
    :class="wrapperComputed"
    :style="width ? { width: width + 'px' } : {}"
  >
    <div class="gt-table" :style="{ width: tableWidthComputed + 'px' }">
      <div class="table-head">
        <template v-if="isCheckbox">
          <div class="head-column checknoxColumn">
            <g-checkbox v-model="isCheckAll" type="white" />
          </div>
        </template>

        <div
          v-for="cItem in columnsComputed"
          :key="cItem.name"
          :style="{ width: cItem.width }"
          class="head-column"
          :class="columnsClassComputed(cItem)"
          @click="() => handleColumnSort(cItem)"
        >
          <span> {{ cItem.label }}</span>
          <g-icon
            v-if="cItem.sort || typeof cItem.handleSortCallback === 'function'"
            class="sort-icon"
            name="sequence"
          />
        </div>
      </div>

      <div
        class="table-body"
        :class="isLoading ? 'overflow-with-hidden' : ''"
        :style="tableInnerStyleComputed"
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
            :class="rItem.checked ? 'row-check' : underline ? 'underline' : ''"
            @click="
              () => {
                handleRowClick(rItem);
              }
            "
          >
            <template v-if="isCheckbox">
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
              :style="{ width: cItem.width }"
              class="row-cell with-flex-grow"
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
