<script setup>
import { computed, ref, watch } from 'vue';

const props = defineProps({
  pageInfo: {
    type: Object,
    default: {
      currentPage: 13,
      total: 200,
      perPageNums: 15,
    },
  },
  gap:{
    type:Number,
    default:5
  },
  underline:{
    type:Boolean,
    default:false
  }
});

const emit = defineEmits(['updatePage']);

const current = ref(props.pageInfo.currentPage || 1);
const firstPage = 1;
const lastPage = Math.ceil(props.pageInfo.total / props.pageInfo.perPageNums);

watch(
  () => current.value,
  (val) => {
    // console.log(val);
    emit('updatePage', val);
  }
);

const pagesComputed = computed(() => {
  let headAndTail = false;
  let middle = false;
  if (current.value <= firstPage + 2 || current.value > lastPage - 3) {
    headAndTail = true;
  }
  headAndTail = {
    head: lastPage > 7 ? [firstPage, 'pre-dot'] : [firstPage],
    tail: lastPage > 7 ? ['next-dot', lastPage] : [lastPage],
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

  middle = middle.filter((val) => val > firstPage && val < lastPage);

  let arr = [
    ...headAndTail.head,
    ...middle,
    ...headAndTail.tail,
  ];
  // console.log(arr);
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
      current.value = current.value - props.gap;
      break;
    }

    case 'next-dot': {
      current.value = current.value + props.gap;
      break;
    }
    default: {
      current.value = num;
    }
  }
};

const getClass = (num)=>{
  if(current.value == num && props.underline) return 'underline-text';
  if(current.value == num) return 'current';
  if(num == 'pre-dot' || num == 'next-dot') return num ;

  return '';
}

</script>
<script>
export default {
  name: 'GPagination',
};
</script>
<template>
  <div class="gt-pagination">
    <div class="gt-flex">
      <div
        class="pre-next pre"
        :class="current == firstPage ? 'disable' : ''"
        @click="handlePrePage"
      >
      <g-icon classes="fas fa-angle-left" />上一頁  
      </div>

      <div class="pageNums">
        <div
          class="num"
          v-for="num in pagesComputed"
          :key="'n' + num"
          :class="getClass(num)"
          @click="
            () => {
              handlePageChange(num);
            }
          "
        >
          <template v-if="num != 'pre-dot' && num != 'next-dot'">
             <span>{{ num }}</span>
          </template>
          <template v-else>
            <g-icon v-if="pageInfo.total" name="ellipsis" size="md" />
          </template>
        </div>
      </div>
      <div
        class="pre-next next"
        :class="current == lastPage ? 'disable' : ''"
        @click="handleNextPage"
      >
        下一頁<g-icon classes="fas fa-angle-right" />
      </div>
    </div>
  </div>
</template>
