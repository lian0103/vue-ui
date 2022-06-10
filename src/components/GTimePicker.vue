<script setup>
import {
  computed,
  onMounted,
  reactive,
  ref,
  shallowRef,
  watch,
  nextTick,
} from 'vue';
import { useElementBounding, useWindowSize, useScroll } from '@vueuse/core';
import dayjs from 'dayjs';
import GIcons from './GIcons.vue';
import GInput from './GInput.vue';
import { v4 as uuidv4 } from 'uuid';

const formatStr = 'YYYY-MM-DD HH:mm';
const { modelValue, placeholder } = defineProps({
  modelValue: {},
  placeholder: {
    default: dayjs().format('YYYY-MM-DD HH:mm'),
  },
});

const emit = defineEmits(['update:modelValue']);
const root = shallowRef();
const isTimePickerShow = ref(false);
const isHourPickerShow = ref(false);
const curSelect = ref(dayjs());
const curDay = ref(dayjs());
const curDayIndex = ref(null);
const curCalenderInfo = reactive({
  curMonthDayStartIndex: null,
  curMonthDayEndIndex: null,
});

watch(
  () => curSelect.value,
  (val, oldVal) => {
    // console.log('val', val);
    emit('update:modelValue', curSelect.value?.format(formatStr) || '');
  }
);

const eventHandle = () => {
  //   console.log('aaa');
  isTimePickerShow.value = false;
};

watch(
  () => isTimePickerShow.value,
  (val, oldVal) => {
    // console.log('in~', val, document.getElementsByTagName('body'));
    isHourPickerShow.value = false;
    if (val && document.getElementsByTagName('body')[0]) {
      document
        .getElementsByTagName('body')[0]
        .addEventListener('click', eventHandle, false);
    } else {
      document
        .getElementsByTagName('body')[0]
        ?.removeEventListener('click', eventHandle);
    }
  }
);

const monthAll = computed(() => {
  //   console.log('curDay.value', curDay.value);
  return curDay.value ? `${curDay.value.$y}年${curDay.value.$M + 1}月` : '';
});
const isMonthAllShow = ref(false);
const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
const months = [
  '1月',
  '2月',
  '3月',
  '4月',
  '5月',
  '6月',
  '7月',
  '8月',
  '9月',
  '10月',
  '11月',
  '12月',
];
const hours = new Array(24).fill('').map((i, idx) => idx);
const minutes = new Array(60).fill('').map((i, idx) => idx);
const curHourIndex = ref(hours.findIndex((ele) => ele == curDay.value.$H));
const curMinuteIndex = ref(minutes.findIndex((ele) => ele == curDay.value.$m));

const calenderDays = computed(() => {
  curCalenderInfo.curMonthDayStartIndex = null;
  curCalenderInfo.curMonthDayEndIndex = null;
  let arr = new Array(42);
  if (curDay.value) {
    // console.log('curDay.value', curDay.value);
    let { $y: year, $M: month, $D: day, $W: weekday } = curDay.value;
    let { $W: monthStartDayWeekday } = dayjs(new Date(year, month, 1));
    let { $D: preMonthLastday } = dayjs(new Date(year, month, 1)).subtract(
      1,
      'day'
    );

    let { $D: monthEndDay, $W: monthEndWeekday } = dayjs(
      new Date(month == 11 ? year + 1 : year, month == 11 ? 0 : month + 1, 1)
    ).subtract(1, 'day');

    let rowOnediff = monthStartDayWeekday;
    let rowLastPlus = monthEndWeekday == 6 ? 7 : 7 - monthEndWeekday;
    let idx2 = 0;
    for (let index = 0; index < 42; index++) {
      if (rowOnediff - index > 0) {
        // console.log('in..1');
        arr[index] = preMonthLastday - rowOnediff + 1 + index;
      } else if (
        index < 42 - rowLastPlus + 1 &&
        1 + index - rowOnediff <= monthEndDay
      ) {
        // console.log('in..2');
        if (!curCalenderInfo.curMonthDayStartIndex) {
          curCalenderInfo.curMonthDayStartIndex = index;
        }
        arr[index] = 1 + index - rowOnediff;
      } else {
        // console.log('in..3');
        if (!curCalenderInfo.curMonthDayEndIndex) {
          curCalenderInfo.curMonthDayEndIndex = index;
        }
        arr[index] = 1 + idx2;
        idx2++;
      }
    }

    // console.log(arr);
  }
  return arr;
});

const getCalenderClass = (cdStr, idx) => {
  let rowClass = 'calDay-r-' + parseInt(idx / 7) + ' calDay-c-' + (idx % 7);

  if (curDayIndex.value != null && idx == curDayIndex.value) {
    rowClass += ' curSelect';
  }

  if ((idx < 7 && parseInt(cdStr) > 16) || (idx > 21 && parseInt(cdStr) < 16)) {
    return `${rowClass} text-gray0`;
  }

  if (cdStr == curDay.value?.$D) {
    return `${rowClass} text-main font-bold`;
  }
  return `${rowClass} text-gray1`;
};

const handleCalDayClick = (idx) => {
  let month =
    idx < curCalenderInfo.curMonthDayStartIndex
      ? curDay.value.$M - 1 < 0
        ? 11
        : curDay.value.$M - 1
      : idx > curCalenderInfo.curMonthDayEndIndex
      ? curDay.value.$M + 1 > 11
        ? 0
        : curDay.value.$M + 1
      : curDay.value.$M;
  let year =
    curDay.value.$M == 11 && idx > curCalenderInfo.curMonthDayEndIndex
      ? curDay.value.$y + 1
      : curDay.value.$M == 0 && idx < curCalenderInfo.curMonthDayStartIndex
      ? curDay.value.$y - 1
      : curDay.value.$y;

  curSelect.value = dayjs(
    new Date(
      year,
      month,
      calenderDays.value[idx],
      curHourIndex.value ? hours[curHourIndex.value] : 0,
      curMinuteIndex.value ? minutes[curMinuteIndex.value] : 0
    )
  );

  curDayIndex.value = idx;
};

const handleMonthPre = () => {
  curDayIndex.value = null;
  curDay.value = dayjs(
    new Date(
      curDay.value.$M == 0 ? curDay.value.$y - 1 : curDay.value.$y,
      curDay.value.$M == 0 ? 11 : curDay.value.$M - 1,
      1
    )
  );
};

const handleMonthNext = () => {
  curDayIndex.value = null;
  curDay.value = dayjs(
    new Date(
      curDay.value.$M == 11 ? curDay.value.$y + 1 : curDay.value.$y,
      curDay.value.$M == 11 ? 0 : curDay.value.$M + 1,
      1
    )
  );
};

const handleMonthAll = () => {
  isMonthAllShow.value = !isMonthAllShow.value;
};

const handleMonthChange = (month) => {
  curDayIndex.value = null;
  if (month == 'current') {
    isMonthAllShow.value = !isMonthAllShow.value;
    return true;
  }

  curDay.value = dayjs(new Date(curDay.value.$y, month, 1));

  isMonthAllShow.value = !isMonthAllShow.value;
};

const handleUseNow = () => {
  curDay.value = dayjs();
  curSelect.value = dayjs();
  curHourIndex.value = hours.findIndex((ele) => ele == curDay.value.$H);
  curMinuteIndex.value = minutes.findIndex((ele) => ele == curDay.value.$m);
  // console.log(' curDay.value', curDay.value);
  calenderDays.value.forEach((day, idx) => {
    if (
      day == curDay.value.$D &&
      idx >= curCalenderInfo.curMonthDayStartIndex &&
      idx < curCalenderInfo.curMonthDayEndIndex
    ) {
      curDayIndex.value = idx;
    }
  });
  // isTimePickerShow.value = false;
};

const {
  height: rootHeight,
  width: rootWidth,
  top: rootTop,
  bottom: rootBottom,
  right: rootRight,
  left: rootLeft,
  update: updateRoot,
} = useElementBounding(root);

const { width: winWidth, height: winHeight } = useWindowSize();

const popupStyleComputed = computed(() => {
  let rootWidth = parseInt(rootRight.value) - parseInt(rootLeft.value);
  if (root) {
    return {
      top: '50px',
      left: rootRight.value + 100 > winWidth.value ? '-84px' : 0,
    };
  } else {
    return {};
  }
});

const popupClassComputed = computed(() => {
  return isTimePickerShow.value ? 'tp-aniIn' : '';
});

const handleHourMinuteChange = (target, value, idx) => {
  // console.log(curSelect.value);
  switch (target) {
    case 'hour': {
      curSelect.value = curSelect.value.hour(value);
      curHourIndex.value = idx;
      break;
    }
    case 'minute': {
      curSelect.value = curSelect.value.minute(value);
      curMinuteIndex.value = idx;
      break;
    }
  }
};

const handleTimePick = () => {
  isHourPickerShow.value = !isHourPickerShow.value;
};
</script>

<template>
  <div ref="root" class="gt-timepicker-box gt-input-wrapper">
    <span
      class="gt-input gt-input-green select-none"
      @click.stop="isTimePickerShow = !isTimePickerShow"
      >{{ curSelect?.format(formatStr) }}</span
    >
    <g-icons
      class="icon"
      name="calendar"
      @click.stop="isTimePickerShow = !isTimePickerShow"
    />

    <div
      @click.stop="isHourPickerShow = false"
      class="gt-timepicker"
      :class="popupClassComputed"
      :style="popupStyleComputed"
    >
      <div class="calender">
        <span class="month-pre" @click.stop="handleMonthPre">
          <g-icons name="chevronLeft"
        /></span>
        <p class="month-all" @click.stop="handleMonthAll">{{ monthAll }}</p>
        <span class="month-next" @click.stop="handleMonthNext">
          <g-icons name="chevronRight"
        /></span>

        <template v-if="!isMonthAllShow">
          <span
            v-for="(wdStr, idx) in weekDays"
            :class="`wdStr wdStr${idx}`"
            :key="idx + 'bbb'"
            >{{ wdStr }}</span
          >

          <span
            v-for="(cdStr, idx) in calenderDays"
            class="calDay"
            :class="getCalenderClass(cdStr, idx)"
            :key="uuidv4()"
            @click.stop="
              () => {
                handleCalDayClick(idx);
              }
            "
          >
            {{ cdStr }}
          </span>
          <div class="time-select" @click.stop="handleTimePick">
            {{
              curSelect
                ? curSelect?.format(formatStr).split(' ')[1]
                : '請選擇時間'
            }}
            <div class="time-select-popup" v-show="isHourPickerShow">
              <div class="top">
                <div class="left relative" id="left">
                  <span
                    v-for="(item, idx) in hours"
                    :key="item + 'h'"
                    :class="idx == curHourIndex ? 'current' : ''"
                    @click.stop="
                      () => {
                        handleHourMinuteChange('hour', item, idx);
                      }
                    "
                    >{{ item }}</span
                  >
                </div>
                <div class="right">
                  <span
                    v-for="(item, idx) in minutes"
                    :key="item + 'm'"
                    :class="idx == curMinuteIndex ? 'current' : ''"
                    @click.stop="
                      () => {
                        handleHourMinuteChange('minute', item, idx);
                      }
                    "
                    >{{ item }}</span
                  >
                </div>
              </div>
            </div>
          </div>

          <span class="use-cur-time" @click.stop="handleUseNow"
            >套用現在時間</span
          >

          <span class="comfirm" @click.stop="isTimePickerShow = false"
            >確定</span
          >
        </template>
      </div>

      <template v-if="isMonthAllShow">
        <div class="months">
          <span class="month" v-for="(month, idx) in months" :key="month">
            <template v-if="curDay && idx != curDay.$M">
              <g-button
                pill
                type="white"
                @click.stop="
                  () => {
                    handleMonthChange(idx);
                  }
                "
                >{{ month }}</g-button
              >
            </template>
            <template v-else>
              <g-button
                pill
                @click.stop="
                  () => {
                    handleMonthChange('current');
                  }
                "
                >{{ month }}</g-button
              >
            </template>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.gt-timepicker-box {
  width: 100%;
  max-width: 240px;
  @apply relative;
  > span {
    @apply cursor-pointer;
    line-height: 16px !important;
  }
  .icon {
    @apply w-8 absolute right-0 top-0.5 text-gray0 cursor-pointer;
  }
}

.gt-timepicker {
  width: 326px;
  // overflow: hidden;
  opacity: 0;
  display: none;
  @apply absolute flex-col -z-10;
  max-width: 326px;
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
    @apply text-center select-none;
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

      &:hover {
        width: 32px;
        position: relative;
        left: 5px;
        @apply text-main bg-color1 rounded-full;
      }

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

    .time-select {
      height: 32px;
      background: #f1f9f3;
      border: 1px solid #f0f0f0;
      border-radius: 6px;
      @apply select-none cursor-pointer relative leading-7 text-left px-4 z-top;
      grid-column-start: 1;
      grid-column-end: 8;
      grid-row-start: 9;
      grid-row-end: 10;
      .time-select-popup {
        @apply absolute left-0 top-9 flex flex-col text-center;
        width: 152px;
        height: 140px;
        background: #ffffff;
        border: 1px solid #f0f0f0;
        box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        .top {
          overflow: hidden;
          @apply flex text-gray0;
          .left,
          .right {
            width: 50%;
            height: 135px;
            overflow-y: scroll;
            span {
              display: block;
              height: 28px;
            }
            .current,
            > span:hover {
              color: #55585e;
              border-top: 1px solid #f0f0f0;
              border-bottom: 1px solid #f0f0f0;
            }
            &::-webkit-scrollbar {
              width: 5px;
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
          }
        }
      }
    }

    .use-cur-time {
      @apply text-second cursor-pointer select-none;
      grid-column-start: 4;
      grid-column-end: 7;
      grid-row-start: 11;
      grid-row-end: 12;
    }
    .comfirm {
      @apply cursor-pointer select-none;
      grid-column-start: 7;
      grid-column-end: 8;
      grid-row-start: 11;
      grid-row-end: 12;
    }
  }
  .months {
    width: 96%;
    margin: 15px 0;
    @apply flex justify-between flex-wrap;
    @apply col-start-1 col-end-8 row-start-3 row-end-4;
    .month {
      @apply relative flex justify-center items-center;
      width: 64px;
      height: 42px;
      margin: 5px;
    }
  }
}

.tp-aniIn {
  display: flex !important;
  animation: tpFadeIn 0.5s forwards;
}

@keyframes tpFadeIn {
  0% {
    opacity: 0;
    @apply -z-10;
  }
  100% {
    opacity: 1;
    @apply z-top-10;
  }
}
</style>
