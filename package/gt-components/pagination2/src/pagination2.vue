
<script>
export default {
  name: "GPagination2",
};
</script>
<script setup>
import { computed, ref, toRefs, watch } from "vue";

const emit = defineEmits([
  "update:page-size",
  "update:page-count",
  "update:current-page",
  "change",
]);

const props = defineProps({
  pageSize: {
    type: Number,
    default: () => 10,
  },
  pageCount: {
    type: Number,
    default: () => null,
  },
  currentPage: {
    type: Number,
    default: () => 1,
  },
  pagerCount: {
    type: Number,
    default: () => 7,
  },
});

const { pageSize, pageCount, currentPage } = toRefs(props);

const firstPage = ref(1);
const lastPage = computed(() => {
  return pageCount.value
    ? Math.trunc(
        pageCount.value / pageSize.value +
          (pageCount.value % pageSize.value === 0 ? 0 : 1)
      )
    : 1;
});
const list = computed(() => {
  let result = [
    {
      label: 1,
      type: "num",
      click: () => {
        handleCurrentPageChange(0, 1);
      },
    },
  ];

  if (currentPage.value - 3 > firstPage.value) {
    result.push({
      label: "ellipsis-1",
      icon: "ellipsis",
      type: "icon",
      click: () => {
        handleCurrentPageChange(-5);
      },
    });
  }
  let maxmin = [currentPage.value - 2, currentPage.value + 3];
  while (maxmin[0] < 2) {
    maxmin[0]++;
    maxmin[1]++;
  }

  while (maxmin[1] > lastPage.value) {
    if (maxmin[0] > firstPage.value) {
      maxmin[0]--;
    }
    maxmin[1]--;
  }
  for (let i = maxmin[0]; i < maxmin[1]; i++) {
    result.push({
      label: i,
      type: "num",
      click: () => {
        handleCurrentPageChange(0, i);
      },
    });
  }

  if (currentPage.value + 3 < lastPage.value) {
    result.push({
      label: "ellipsis-2",
      icon: "ellipsis",
      type: "icon",
      click: () => {
        handleCurrentPageChange(5);
      },
    });
  }

  result.push({
    label: lastPage.value,
    type: "num",
    click: () => {
      handleCurrentPageChange(0, lastPage.value);
    },
  });
  return result.filter((record, index, self) => {
    if (typeof record.label === "number") {
      return record.label >= index + 1;
    } else {
      return true;
    }
  });
});

const handleCurrentPageChange = (n, cp = null) => {
  let result = currentPage.value + n;
  if (result < firstPage.value) {
    result = firstPage.value;
  } else if (result > lastPage.value) {
    result = lastPage.value;
  }
  result = cp ? cp : result;
  emit("update:current-page", result);
  handleChange(result);
  // console.log(currentPage.value)
};
const handleChange = (v) => {
  emit("change", v);
};
</script>
<template>
  <div class="gt-pagination2">
    <div class="gt-flex">
      <div
        class="pre-next pre"
        :class="currentPage == firstPage ? 'disable' : ''"
        @click="
          () => {
            handleCurrentPageChange(-1);
          }
        "
      >
        <g-icon name="chevron-left" class="w-8" />上一頁
      </div>

      <div class="pageNums">
        <template v-for="(record, idx) in list" :key="idx">
          <template v-if="record.type === 'num'">
            <div
              class="num"
              :class="currentPage === record.label ? 'current' : ''"
              @click="record.click"
            >
              {{ record.label }}
            </div>
          </template>
          <template v-else-if="record.type === 'icon'">
            <div class="num dot" @click="record.click">
              <g-icon :name="record.icon" size="md" />
            </div> </template
        ></template>
      </div>

      <div
        class="pre-next next"
        :class="currentPage == lastPage ? 'disable' : ''"
        @click="
          () => {
            handleCurrentPageChange(1);
          }
        "
      >
        下一頁<g-icon name="chevron-right" class="w-8" />
      </div>
    </div>
  </div>
</template>
