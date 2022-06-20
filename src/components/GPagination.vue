<script setup>
import { computed, ref, watch } from 'vue';

const { pageInfo } = defineProps({
  pageInfo: {
    type: Object,
    default: {
      currentPage: 13,
      total: 200,
      perPageNums: 15,
    },
  },
});

const emit = defineEmits(['updatePage']);

const current = ref(pageInfo.currentPage || 1);
const firstPage = 1;
const lastPage = Math.ceil(pageInfo.total / pageInfo.perPageNums);

watch(
  () => current.value,
  (val) => {
    // console.log(val);
    emit('updatePage', val);
  }
);

const pagesComputed = computed(() => {
  let pagesAll = new Array(lastPage).fill(1).map((n, idx) => n + idx);
  let curPageIndex = pagesAll.findIndex((num) => num == current.value);
  let headAndTail = false;
  let middle = false;
  if (current.value <= firstPage + 2 || current.value > lastPage - 3) {
    headAndTail = true;
  }
  headAndTail = {
    head: [firstPage, 'pre-dot'],
    tail: ['next-dot', lastPage],
  };

  if (current.value <= firstPage + 3) {
    headAndTail.head = [firstPage];
    middle = [
      firstPage + 1,
      firstPage + 2,
      firstPage + 3,
      firstPage + 4,
      firstPage + 5,
    ];
  }
  if (current.value >= lastPage - 3) {
    headAndTail.tail = [lastPage];
    middle = [
      lastPage - 5,
      lastPage - 4,
      lastPage - 3,
      lastPage - 2,
      lastPage - 1,
    ];
  }
  if (!middle) {
    middle = [
      current.value - 2,
      current.value - 1,
      current.value,
      current.value + 1,
      current.value + 2,
    ];
  }

  let arr = [...headAndTail.head, ...middle, ...headAndTail.tail];
  //   console.log(arr);
  return arr;
});

const handlePrePage = () => {
  //   console.log('in!!', current.value);
  if (current.value != firstPage) {
    current.value = current.value - 1;
  }
};
const handleNextPage = () => {
  //   console.log('in??', current.value);
  if (current.value != lastPage) {
    current.value = current.value + 1;
  }
};
const handlePageChange = (num) => {
  switch (num) {
    case 'pre-dot': {
      current.value = current.value - 5;
      break;
    }

    case 'next-dot': {
      current.value = current.value + 5;
      break;
    }
    default: {
      current.value = num;
    }
  }
};
</script>

<template>
  <div class="gt-pagination">
    <div class="flex">
      <div
        class="pre-next pre"
        :class="current == firstPage ? 'disable cursor-not-allowed' : ''"
        @click="handlePrePage"
      >
        <g-icons name="chevronLeft" class="w-8" />上一頁
      </div>

      <div class="pageNums">
        <div
          class="num"
          v-for="num in pagesComputed"
          :key="'n' + num"
          :class="
            current == num
              ? 'current'
              : num == 'pre-dot' || num == 'next-dot'
              ? num
              : ''
          "
          @click="
            () => {
              handlePageChange(num);
            }
          "
        >
          <template v-if="num != 'pre-dot' && num != 'next-dot'">
            {{ num }}
          </template>
          <template v-else>
            <g-icons
              v-if="pageInfo.total"
              name="ellipsis"
              class="rotate-90 text-primaryDarker"
              size="md"
            />
          </template>
        </div>
      </div>
      <div
        class="pre-next next"
        :class="current == lastPage ? 'disable cursor-not-allowed' : ''"
        @click="handleNextPage"
      >
        下一頁<g-icons name="chevronRight" class="w-8" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-pagination {
  @apply flex justify-center items-center flex-nowrap;
  padding: 2px 0px;

  .pre-next {
    @apply flex justify-center items-center flex-nowrap text-primaryDarker cursor-pointer select-none;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.7px;
    &.pre {
      margin-right: 28px;
    }

    &.next {
      margin-left: 28px;
    }
    &.disable {
      @apply text-gray0;
    }
  }

  .pageNums {
    @apply flex justify-center items-center;

    .num {
      @apply text-main cursor-pointer select-none;
      width: 34px;
      height: 40px;
      font-weight: 400;
      line-height: 34px;
      text-align: center;
      padding: 2px 0;
      margin-right: 6px;
      &.current {
        width: 28px;
        height: 28px;
        line-height: 22px;
        margin-right: 12px;

        @apply bg-primaryDarker text-white rounded-full;
      }
      &.pre-dot,
      &.next-dot {
        width: 24px;
        padding: 8px 0;
      }
    }
  }
}
</style>
