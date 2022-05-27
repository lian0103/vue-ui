<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { DateTime } from 'luxon';
import GIcons from './GIcons.vue';

const curDay = ref(null);
const curIndex = ref(null);
const curCalenderInfo = reactive({
  curMonthDayStartIndex: null,
  curMonthDayEndIndex: null,
});
const monthAll = computed(() => {
  //   console.log('curDay.value', curDay.value);
  return curDay.value ? `${curDay.value.year}年${curDay.value.month}月` : '';
});

const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
const calenderDays = computed(() => {
  curCalenderInfo.curMonthDayStartIndex = null;
  curCalenderInfo.curMonthDayEndIndex = null;
  let arr = new Array(42);
  if (curDay.value) {
    let { year, month, day, weekday } = curDay.value;
    let { weekday: monthStartDayWeekday } = DateTime.fromObject({
      year,
      month,
      day: 1,
    });
    let { day: preMonthLastday } = DateTime.fromObject({
      year,
      month,
      day: 1,
    }).minus({ days: 1 });
    let { day: monthEndDay, weekday: monthEndWeekday } = DateTime.fromObject({
      year: month == 12 ? year + 1 : year,
      month: month == 12 ? 1 : month + 1,
      day: 1,
    }).minus({ days: 1 });

    let rowOnediff = monthStartDayWeekday;
    let rowLastPlus = monthEndWeekday == 6 ? 7 : 7 - monthEndWeekday;

    // console.log('cur', year, month, day);
    // console.log('preMonthLastday', preMonthLastday);
    // console.log('monthStartDayWeekday', monthStartDayWeekday);
    // console.log('monthEndDay', monthEndDay);
    // console.log('monthEndWeekday', monthEndWeekday);
    // console.log('rowOnediff', rowOnediff);
    // console.log('rowLastPlus', rowLastPlus);
    let idx2 = 0;
    for (let index = 0; index < 42; index++) {
      if (rowOnediff - index > 0) {
        console.log('in..1');
        arr[index] = preMonthLastday - rowOnediff + 1 + index;
      } else if (
        index < 42 - rowLastPlus + 1 &&
        1 + index - rowOnediff <= monthEndDay
      ) {
        console.log('in..2');
        if (!curCalenderInfo.curMonthDayStartIndex) {
          curCalenderInfo.curMonthDayStartIndex = index + 1;
        }
        arr[index] = 1 + index - rowOnediff;
      } else {
        console.log('in..3');
        if (!curCalenderInfo.curMonthDayEndIndex) {
          curCalenderInfo.curMonthDayEndIndex = index - 1;
        }
        arr[index] = 1 + idx2;
        idx2++;
      }
    }

    console.log(arr);
  }
  return arr;
});

const getCalenderClass = (cdStr, idx) => {
  let rowClass = 'calDay-r-' + parseInt(idx / 7) + ' calDay-c-' + (idx % 7);

  if (curIndex.value != null && idx == curIndex.value) {
    rowClass += ' curSelect';
  }

  if ((idx < 7 && parseInt(cdStr) > 16) || (idx > 21 && parseInt(cdStr) < 16)) {
    return `${rowClass} text-gray0`;
  }

  if (cdStr == curDay.value?.day) {
    return `${rowClass} text-main font-bold`;
  }
  return `${rowClass} text-gray1`;
};

const handleCalDayClick = (idx) => {
  //   console.log("curIndex.value ",curIndex.value )
  curIndex.value = idx;
};

const handleMonthPre = () => {
  curIndex.value = null;
  curDay.value = DateTime.fromObject({
    year: curDay.value.month == 1 ? curDay.value.year - 1 : curDay.value.year,
    month: curDay.value.month == 1 ? 12 : curDay.value.month - 1,
    day: 1,
  });
};

const handleMonthNext = () => {
  curIndex.value = null;
  curDay.value = DateTime.fromObject({
    year: curDay.value.month == 12 ? curDay.value.year + 1 : curDay.value.year,
    month: curDay.value.month == 12 ? 1 : curDay.value.month + 1,
    day: 1,
  });
};

onMounted(() => {
  const now = DateTime.now();
  curDay.value = now;
});
</script>

<template>
  <div class="gt-timepicker">
    <div class="calender">
      <span class="month-pre" @click.prevent="handleMonthPre">
        <g-icons name="chevronLeft"
      /></span>
      <p class="month-all">{{ monthAll }}</p>
      <span class="month-next" @click.prevent="handleMonthNext">
        <g-icons name="chevronRight"
      /></span>

      <span
        v-for="(wdStr, idx) in weekDays"
        :class="`wdStr wdStr${idx}`"
        :key="idx"
        >{{ wdStr }}</span
      >

      <span
        v-for="(cdStr, idx) in calenderDays"
        class="calDay"
        :class="getCalenderClass(cdStr, idx)"
        :key="idx"
        @click="
          () => {
            handleCalDayClick(idx);
          }
        "
        >{{ cdStr }}</span
      >
    </div>
  </div>
</template>

<style lang="scss">
.gt-timepicker {
  width: 326px;
  height: 416px;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  color: #55585e;
  .calender {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-auto-rows: minmax(32px, auto);
    @apply text-center;
    .month-pre {
      @apply w-full col-start-1 col-end-2 row-start-1 row-end-2 flex cursor-pointer;
      svg {
        width: 24px;
      }
    }
    .month-all {
      @apply col-start-2 col-end-7 row-start-1 row-end-2 cursor-pointer;
    }
    .month-next {
      @apply w-full col-start-7 col-end-8 row-start-1 row-end-2 flex justify-end cursor-pointer;
      svg {
        width: 24px;
      }
    }

    .wdStr {
      font-weight: 500;
      height: 41px;
      padding: 10px 13px;
      @apply row-start-2 row-end-3 select-none;
    }

    .calDay {
      @apply select-none cursor-pointer;
      line-height: 2;
      &.curSelect {
        width: 30px;
        height: 30px;
        @apply text-white bg-main rounded-full relative;
        left: 5.5px;
      }
    }

    @for $r from 0 through 5 {
      .calDay-r-#{$r} {
        grid-row-start: 3 + $r;
        grid-row-end: 4 + $r;
      }
    }

    @for $i from 0 through 6 {
      .wdStr#{$i} {
        grid-column-start: 1 + $i;
        grid-column-end: 2 + $i;
      }
      .calDay-c-#{$i} {
        grid-column-start: 1 + $i;
        grid-column-end: 2 + $i;
      }
    }
  }
}
</style>
