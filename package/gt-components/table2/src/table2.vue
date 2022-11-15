<script setup>
import {
  ref,
  computed,
  reactive,
  watch,
  useSlots,
  onMounted,
  getCurrentInstance,
  toRefs,
} from "vue";

// import { v4 as uuidv4 } from "uuid";

const emit = defineEmits(["sort-change", "selection-change"]);

const tableEnum = {
  CHECKBOX: "checkbox",
  ASC: "asc",
  DESC: "desc",
};

const order = ["ascending", "descending", null];

const props = defineProps({
  columns: {
    type: Array,
    default: [],
  },
  data: {
    type: Array,
    default: [],
  },
  // isCheckbox: {
  //   type: Boolean,
  //   default: true,
  // },
  width: {
    type: Number,
    default: null,
  },
  height: {
    type: Number,
  },
  // rowClick: {
  //   type: Boolean,
  //   default: false,
  // },
  isLoading: {
    type: Boolean,
    default: false,
  },
  underline: {
    type: Boolean,
    default: false,
  },
  defaultSort: {
    type: Object,
    default: () => {
      return null;
    },
  },
});

const { data, columns, defaultSort } = toRefs(props);

const gtTableWidth = ref(0);

const slots = useSlots();
// const slotColumns = Object.keys(slots);
// debugger;
const columnSort = ref(defaultSort.value);
const isOverflowX = ref(false);
const selectedList = ref({});
const selectionIcon = computed(() => {
  let len = Object.values(selectedList.value).filter((bool) => bool).length;
  if (len === 0 || data.value?.length === 0) {
    return null;
  } else if (len !== data.value?.length) {
    return "minus";
  } else if (len === data.value?.length) {
    return "plus";
  }
});
const selectionClick = function () {
  let len = Object.values(selectedList.value).length;
  let result = {};
  switch (selectionIcon.value) {
    case null:
    case "minus":
      for (let i = 0; i < len; i++) {
        result[String(i)] = true;
      }
      break;
    case "plus":
      for (let i = 0; i < len; i++) {
        result[String(i)] = false;
      }
      break;
  }
  selectedList.value = result;
};

watch(
  () => data,
  () => {
    data.value?.forEach((record, idx) => {
      selectedList.value[String(idx)] = false;
    });
  },
  { deep: true, immediate: true }
);
watch(
  () => selectedList,
  () => {
    let selected = data.value.filter((record, idx) => {
      return selectedList.value[String(idx)];
    });
    emit("selection-change", selected);
  },
  { deep: true }
);
const columnsComputed = computed(() => {
  let arr = columns.value
    .map((column, columnIdx) => {
      let style = {};

      if (typeof column.width === "number") {
        style.width = column.width + "px";
        style["min-width"] = column.width + "px";
        style["max-width"] = column.width + "px";
      } else if (typeof column.width === "string") {
        style.width = column.width;
        style["min-width"] = column.width;
        style["max-width"] = column.width;
      } else {
        style.width = "auto";
      }
      let label = column.label;
      if (typeof label === "function") {
        label = label();
      } else {
        label = label ?? "";
      }

      let sortable = column.sortable;
      if (typeof sortable === "string" && sortable === "custom") {
        sortable = {
          icon: "sequence",
          click: (column) => handleRemoteColumnSort(column),
        };
      } else if (typeof sortable === "boolean") {
        sortable = {
          icon: "sequence",
          click: handleLocalColumnSort,
        };
      }
      return {
        // ...column,
        type: column.type,
        prop: column.prop,
        sortable: sortable,
        scopedSlots: column.scopedSlots,
        label: label,
        style: style,
      };
    })
    .filter((cItem) => cItem);
  //   console.log(arr);
  return arr;
});

const dataComputed = computed(() => {
  return data.value;
});

const columnsClassComputed = (column) => {
  let arr = ["with-flex-grow"];
  if (column.type === "selection") {
    // arr.push("checknoxColumn");
  }
  if (column.sortable?.click) {
    arr.push("gt-cursor-pointer");
  }
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

const tableWidthComputed = computed(() => {
  let width =
    columnsComputed.value
      .map((item) => item.style.width)
      .reduce((a, b) => a + b, 0) + 80;
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

const handleLocalColumnSort = (cItem) => {
  // console.log(cItem);
  // if (cItem.handleSortCallback) {
  //   cItem.handleSortCallback();
  // }
  // if (cItem.sort) {
  //   let target = cItem.prop;
  //   if (
  //     columnSortStatus[target] === tableEnum.ASC ||
  //     !columnSortStatus[target]
  //   ) {
  //     dataWithStatus.value.sort((a, b) => {
  //       return b[target] - a[target];
  //     });
  //     columnSortStatus[target] = tableEnum.DESC;
  //   } else {
  //     dataWithStatus.value.sort((a, b) => {
  //       return a[target] - b[target];
  //     });
  //     columnSortStatus[target] = tableEnum.ASC;
  //   }
  // }
};
const handleRemoteColumnSort = (column) => {
  let oldProp = columnSort.value?.prop;
  if (column.prop === oldProp) {
    columnSort.value.order = ((columnSort.value.order ?? 0) + 1) % 3;
  } else {
    columnSort.value.prop = column.prop;
    columnSort.value.order = 0;
  }
  emit("sort-change", {
    column,
    prop: columnSort.value.prop,
    order: order[columnSort.value.order],
  });
};

onMounted(() => {});
</script>
<script>
export default {
  name: "GTable2",
};
</script>
<template>
  <!-- :id="'gt-' + gtTableId"
  ref="gtTable" -->
  <div
    class="gt-table2-wrapper"
    :class="wrapperComputed"
    :style="width ? { width: width + 'px' } : {}"
  >
    <div class="gt-table2" :style="{ width: tableWidthComputed + 'px' }">
      <div class="table-head">
        <div
          v-for="(column, columnIdx) in columnsComputed"
          :key="columnIdx"
          :style="column.style"
          class="head-column"
          :class="columnsClassComputed(column)"
          @click="
            () => {
              column.sortable?.click(column);
            }
          "
        >
          <!-- @click="() => handleColumnSort(column)" -->
          <template v-if="column.type === 'selection'">
            <g-checkbox
              :controlMode="true"
              type="white"
              :checkedIcon="selectionIcon"
              @change="
                (val) => {
                  selectionClick(val);
                }
              "
            />
          </template>
          <template v-else-if="column.scopedSlots?.customHeaderRender">
            <slot
              :name="column.scopedSlots?.customHeaderRender"
              v-bind="{ column: column, $index: columnIdx }"
            ></slot>
          </template>
          <template v-else>
            <!-- <div> -->
            <span> {{ column.label }}</span>
            <g-icon
              v-if="column.sortable?.icon"
              class="sort-icon"
              :name="column.sortable?.icon"
            />
            <!-- </div> -->
          </template>
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
            v-for="(rowItem, rowIdx) in dataComputed"
            class="row"
            :key="rowIdx"
            :class="{
              underline: underline,
              'row-check': selectedList[String(rowIdx)],
            }"
          >
            <div class="row-content">
              <div
                v-for="(column, columnIdx) in columnsComputed"
                :key="columnIdx"
                :style="column.style"
                class="row-cell with-flex-grow"
              >
                <template v-if="column.scopedSlots?.customRender">
                  <slot
                    :name="column.scopedSlots?.customRender"
                    v-bind="{
                      prop: rowItem[column.prop],
                      row: rowItem,
                      column: column,
                      $index: columnIdx,
                    }"
                  ></slot>
                </template>
                <template v-else-if="column.type === 'selection'">
                  <g-checkbox
                    type="white"
                    v-model="selectedList[String(rowIdx)]"
                  >
                  </g-checkbox>
                </template>
                <template v-else>
                  <span> {{ rowItem[column.prop] || "" }}</span>
                </template>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
