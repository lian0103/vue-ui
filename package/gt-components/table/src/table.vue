<script setup>
import { ref, computed, reactive, watch, useSlots, onMounted, getCurrentInstance, onUpdated, nextTick } from 'vue';

import { v4 as uuidv4 } from 'uuid';

const emit = defineEmits(['update:data']);

const tableEnum = {
    CHECKBOX: 'checkbox',
    ASC: 'asc',
    DESC: 'desc',
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
        default: false,
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
const isOverflowY = ref(false);
const isHover = ref(false);

const columnsComputed = computed(() => {
    let arr = props.columns
        .map((cItem, cIdx) => {
            let width = '';
            if (typeof cItem.width === 'number') {
                width = cItem.width + 'px';
            } else if (typeof cItem.width === 'string') {
                width = cItem.width;
            } else {
                width = '80px';
            }
            return cItem.name
                ? {
                      ...cItem,
                      name: cItem.name,
                      label: cItem.label || '',
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
    let arr = ['with-flex-grow'];
    if (cItem.sort || cItem.handleSortCallback) arr.push('gt-cursor-pointer');
    return arr;
};

const wrapperComputed = computed(() => {
    let arr = [];
    if (props.isLoading || !isHover.value) {
        return ['overflow-with-hidden'];
    }
    if (isOverflowX.value && isHover.value) {
        return ['overflow-with-x-scroll'];
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

const checkWidthHeight = () => {
    gtTableWidth.value = document.getElementById(`gt-${gtTableId}`)?.offsetWidth || 0;
    if (gtTableWidth.value && tableWidthComputed.value) {
        isOverflowX.value = gtTableWidth.value && tableWidthComputed.value > gtTableWidth.value ? true : false;
    }

    let rowsHeight = document.querySelector(`#gt-${gtTableId} .table-rows`)?.offsetHeight || 0;
    let height = parseInt(props.height) - 40;
    if (rowsHeight && height) {
        isOverflowY.value = rowsHeight > height ? true : false;
        console.log('isOverflowY.value', isOverflowY.value);
    }
};

watch(
    () => props.data,
    (val) => {
        dataWithStatus.value = [
            ...props.data.map((dItem) => {
                return {
                    ...dItem,
                    checked: false,
                };
            }),
        ];
        isCheckAll.value = false;

        nextTick(() => {
            checkWidthHeight();
        });
    }
);

watch(
    () => dataWithStatus.value,
    (newValue, oldValue) => {
        emit('update:data', newValue.value);
    },
    {
        deep: true,
    }
);

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

const tableWidthComputed = computed(() => {
    let width =
        columnsComputed.value.map((item) => parseInt(('' + item.width).replace('px', ''))).reduce((a, b) => a + b, 0) +
        80;
    return width;
});

const tableInnerStyleComputed = computed(() => {
    let height = parseInt(props.height) - 40;
    return isOverflowY.value
        ? {
              height: height ? height + 'px' : 'none',
              'overflow-y': 'scroll',
          }
        : {
              height: height ? height + 'px' : 'none',
          };
});

const selectionIcon = computed(() => {
    let len = dataWithStatus.value.map((dataItem) => dataItem.checked).filter((bool) => bool).length;
    if (len === 0 || dataWithStatus.value?.length === 0) {
        return null;
    } else if (len !== dataWithStatus.value?.length) {
        return 'minus';
    } else if (len === dataWithStatus.value?.length) {
        return 'plus';
    }
});

const selectionClick = function () {
    switch (selectionIcon.value) {
        case null:
        case 'minus':
            dataWithStatus.value = dataWithStatus.value.map((item) => {
                return {
                    ...item,
                    checked: true,
                };
            });
            break;
        case 'plus':
            dataWithStatus.value = dataWithStatus.value.map((item) => {
                return {
                    ...item,
                    checked: false,
                };
            });
            break;
    }
};

const handleColumnSort = (cItem) => {
    // console.log(cItem);
    if (cItem.handleSortCallback) {
        cItem.handleSortCallback();
    }

    if (cItem.sort) {
        let target = cItem.name;
        if (columnSortStatus[target] === tableEnum.ASC || !columnSortStatus[target]) {
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
    checkWidthHeight();
});
</script>
<script>
export default {
    name: 'GTable',
};
</script>
<template>
    <div :id="'gt-' + gtTableId" ref="gtTable" class="gt-table-wrapper" :style="width ? { width: width + 'px' } : {}">
        <div :class="wrapperComputed" :style="{height:`${height}px`}" @mousemove="isHover=true" @mouseleave="isHover=false">
            <div class="gt-table" :style="{ width: tableWidthComputed + 'px' }">
                <div class="table-head">
                    <template v-if="isCheckbox">
                        <div class="head-column checknoxColumn">
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
                        </div>
                    </template>

                    <div
                        v-for="(cItem, columnIdx) in columnsComputed"
                        :key="cItem.name || cItem.type"
                        :style="{ width: cItem.width }"
                        class="head-column"
                        :class="columnsClassComputed(cItem)"
                        @click="() => handleColumnSort(cItem)"
                    >
                        <template v-if="cItem.type === 'selection'">
                            <div class="head-column checknoxColumn">
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
                            </div>
                        </template>
                        <template v-else-if="cItem.scopedSlots?.customHeaderRender">
                            <slot
                                :name="cItem.scopedSlots?.customHeaderRender"
                                v-bind="{ column: cItem, $index: columnIdx }"
                            ></slot>
                        </template>
                        <template v-else>
                            <span> {{ cItem.label }}</span>
                            <g-icon
                                v-if="cItem.sort || typeof cItem.handleSortCallback === 'function'"
                                class="sort-icon"
                                name="sequence"
                            />
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
                        <div class="table-rows">
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
                                        <g-checkbox v-if="rItem.checked" v-model="rItem.checked" type="white" />
                                        <g-checkbox v-if="!rItem.checked" v-model="rItem.checked" type="white" />
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
                                    <template v-else-if="cItem.type === 'selection'">
                                        <div
                                            class="row-cell checknoxColumn"
                                            @click="
                                                () => {
                                                    handleRowClick(rItem);
                                                }
                                            "
                                        >
                                            <g-checkbox v-model="rItem.checked" type="white" />
                                        </div>
                                    </template>
                                    <template v-else>
                                        <span> {{ rItem[cItem.name] || cItem.name }}</span>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>
