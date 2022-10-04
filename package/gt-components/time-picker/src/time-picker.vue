<script>
export default {
  name: 'GTimePicker',
};
</script>

<script setup>
import { computed, reactive, ref, shallowRef, watch } from 'vue';
import { useElementBounding, useWindowSize } from '@vueuse/core';
import dayjs from 'dayjs/esm';
import isBetween from 'dayjs/plugin/isBetween';
import { v4 as uuidv4 } from 'uuid';

dayjs.extend(isBetween);

const timeRangeFormat = 'YYYY-MM-DD';
const rangeSelectResult = ref('');

const { modelValue, placeholder, format, width, rangeSelectMode } = defineProps(
  {
    modelValue: {},
    placeholder: {
      default: dayjs().format('YYYY-MM-DD HH:mm'),
    },
    format: {
      type: String,
      default: 'YYYY-MM-DD HH:mm',
    },
    width: {
      type: Number,
      default: 180,
    },
    autoHideLabel: {
      type: Boolean,
      default: true,
    },
    rangeSelectMode: {
      type: Boolean,
      default: false,
    },
  }
);

const emit = defineEmits(['update:modelValue']);
const root = shallowRef();
const isSelect = ref(false);
const isMouseIn = ref(false);
const isTimePickerShow = ref(false);
const isHourPickerShow = ref(false);
const curSelect = rangeSelectMode ? ref([null, null]) : ref(dayjs());
const curDay = ref(dayjs());
const curDayIndex = rangeSelectMode ? ref([null, null]) : ref(null);
const curCalenderInfo = reactive({
  curMonthDayStartIndex: null,
  curMonthDayEndIndex: null,
});

watch(
  () =>
    rangeSelectMode
      ? [curSelect.value[0], curSelect.value[1]]
      : curSelect.value,
  (val, oldVal) => {
    if (!rangeSelectMode) {
      emit('update:modelValue', curSelect.value?.format(format));
    }

    if (!curSelect.value[0] && !curSelect.value[1]) {
      rangeSelectResult.value = '';
      emit('update:modelValue', '');
    }

    if (curSelect.value[0] && !curSelect.value[1]) {
      curSelect.value = [curSelect.value[0], curSelect.value[0]];
    }

    if (curSelect.value[0] && curSelect.value[1]) {
      let needReverse = curSelect.value[1].isBefore(
        curSelect.value[0].format(timeRangeFormat),
        'day'
      );
      let emitVal = needReverse
        ? `${curSelect.value[1].format(
            timeRangeFormat
          )} - ${curSelect.value[0].format(timeRangeFormat)}`
        : `${curSelect.value[0].format(
            timeRangeFormat
          )} - ${curSelect.value[1].format(timeRangeFormat)}`;
      rangeSelectResult.value = emitVal;
      emit('update:modelValue', emitVal);
    }
  }
);

const eventHandle = () => {
  isTimePickerShow.value = false;
};

watch(
  () => isTimePickerShow.value,
  (val, oldVal) => {
    isHourPickerShow.value = false;
    isSelect.value = true;
    if (val && document.getElementsByTagName('html')[0]) {
      document
        .getElementsByTagName('html')[0]
        .addEventListener('click', eventHandle, false);
    } else {
      document
        .getElementsByTagName('html')[0]
        ?.removeEventListener('click', eventHandle);
    }
  }
);

const monthAll = computed(() => {
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
const calenderDaysInfo = ref([]);

const calenderDays = computed(() => {
  curCalenderInfo.curMonthDayStartIndex = null;
  curCalenderInfo.curMonthDayEndIndex = null;
  let arr = new Array(42);
  if (curDay.value) {
    let { $y: year, $M: month, $D: day, $W: weekday } = curDay.value;
    let { $W: monthStartDayWeekday } = dayjs(new Date(year, month, 1));
    let { $D: preMonthLastday, $M: preMonth } = dayjs(
      new Date(year, month, 1)
    ).subtract(1, 'day');

    let { $D: monthEndDay, $W: monthEndWeekday } = dayjs(
      new Date(month == 11 ? year + 1 : year, month == 11 ? 0 : month + 1, 1)
    ).subtract(1, 'day');

    let rowOnediff = monthStartDayWeekday;
    let rowLastPlus = monthEndWeekday == 6 ? 7 : 7 - monthEndWeekday;
    let idx2 = 0;
    for (let index = 0; index < 42; index++) {
      if (rowOnediff - index > 0) {
        let day = preMonthLastday - rowOnediff + 1 + index;
        arr[index] = day;
        calenderDaysInfo.value[index] = dayjs(new Date(year, preMonth, day));
      } else if (
        index < 42 - rowLastPlus + 1 &&
        1 + index - rowOnediff <= monthEndDay
      ) {
        if (!curCalenderInfo.curMonthDayStartIndex) {
          curCalenderInfo.curMonthDayStartIndex = index;
        }
        let day = 1 + index - rowOnediff;
        arr[index] = day;
        calenderDaysInfo.value[index] = dayjs(new Date(year, month, day));
      } else {
        if (!curCalenderInfo.curMonthDayEndIndex) {
          curCalenderInfo.curMonthDayEndIndex = index;
        }
        let day = 1 + idx2;
        arr[index] = day;
        calenderDaysInfo.value[index] = dayjs(new Date(year, month, day)).add(
          1,
          'month'
        );
        idx2++;
      }
    }

    // console.log(calenderDaysInfo.value);
  }
  return arr;
});

const getCalenderClass = (cdStr, idx) => {
  let rowClass = 'calDay-r-' + parseInt(idx / 7) + ' calDay-c-' + (idx % 7);

  if (
    rangeSelectMode &&
    (curSelect.value[0]?.isSame(calenderDaysInfo.value[idx], 'day') ||
      curSelect.value[1]?.isSame(calenderDaysInfo.value[idx], 'day'))
  ) {
    rowClass += ' curSelect';
  }

  if (
    rangeSelectMode &&
    curSelect.value[0] &&
    curSelect.value[1] &&
    dayjs(calenderDaysInfo.value[idx]).isBetween(
      curSelect.value[0]?.format(timeRangeFormat),
      curSelect.value[1]?.format(timeRangeFormat),
      'day',
      ')'
    )
  ) {
    rowClass += ' curSelectRange';
  }

  if (
    curDayIndex.value != null &&
    idx == curDayIndex.value &&
    !rangeSelectMode
  ) {
    rowClass += ' curSelect';
  }

  if ((idx < 7 && parseInt(cdStr) > 16) || (idx > 21 && parseInt(cdStr) < 16)) {
    return `${rowClass} gray0`;
  }

  if (cdStr == curDay.value?.$D) {
    return `${rowClass} today`;
  }
  return `${rowClass} gray1`;
};

const handleCalDayClick = (idx) => {
  let month =
    idx < curCalenderInfo.curMonthDayStartIndex
      ? curDay.value.$M - 1 < 0
        ? 11
        : curDay.value.$M - 1
      : idx >= curCalenderInfo.curMonthDayEndIndex
      ? curDay.value.$M + 1 > 11
        ? 0
        : curDay.value.$M + 1
      : curDay.value.$M;
  let year =
    curDay.value.$M == 11 && idx >= curCalenderInfo.curMonthDayEndIndex
      ? curDay.value.$y + 1
      : curDay.value.$M == 0 && idx < curCalenderInfo.curMonthDayStartIndex
      ? curDay.value.$y - 1
      : curDay.value.$y;

  let selectTime = new Date(
    year,
    month,
    calenderDays.value[idx],
    curHourIndex.value ? hours[curHourIndex.value] : 0,
    curMinuteIndex.value ? minutes[curMinuteIndex.value] : 0
  );

  if (rangeSelectMode) {
    if (!curSelect.value[0]) {
      curSelect.value[0] = dayjs(calenderDaysInfo.value[idx]);
    } else if (!curSelect.value[1]) {
      curSelect.value[1] = dayjs(calenderDaysInfo.value[idx]);
    } else if (curSelect.value[0] == curSelect.value[1]) {
      curSelect.value[1] = dayjs(calenderDaysInfo.value[idx]);
    } else {
      curSelect.value = [null, null];
    }
  }

  if (!rangeSelectMode) {
    curSelect.value = dayjs(selectTime);
    curDayIndex.value = idx;
  }
};

const handleMonthPre = () => {
  if (!rangeSelectMode) {
    curDayIndex.value = null;
  }

  curDay.value = dayjs(
    new Date(
      curDay.value.$M == 0 ? curDay.value.$y - 1 : curDay.value.$y,
      curDay.value.$M == 0 ? 11 : curDay.value.$M - 1,
      1
    )
  );
};

const handleMonthNext = () => {
  if (!rangeSelectMode) {
    curDayIndex.value = null;
  }
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
  if (!rangeSelectMode) {
    curDayIndex.value = null;
  }
  if (month == 'current') {
    isMonthAllShow.value = !isMonthAllShow.value;
    return true;
  }

  curDay.value = dayjs(new Date(curDay.value.$y, month, 1));

  isMonthAllShow.value = !isMonthAllShow.value;
};

const handleUseNow = () => {
  if (!rangeSelectMode) {
    curDay.value = dayjs();
    curSelect.value = dayjs();
    curHourIndex.value = hours.findIndex((ele) => ele == curDay.value.$H);
    curMinuteIndex.value = minutes.findIndex((ele) => ele == curDay.value.$m);
    calenderDays.value.forEach((day, idx) => {
      if (
        day == curDay.value.$D &&
        idx >= curCalenderInfo.curMonthDayStartIndex &&
        idx < curCalenderInfo.curMonthDayEndIndex
      ) {
        curDayIndex.value = idx;
      }
    });
  }

  // isTimePickerShow.value = false;
};

const { right: rootRight } = useElementBounding(root);

const { width: winWidth } = useWindowSize();

const popupStyleComputed = computed(() => {
  if (root) {
    return {
      top: 42 + 'px',
      left: rootRight.value + 100 > winWidth.value ? '-110px' : 0 + 'px',
    };
  } else {
    return {};
  }
});

const popupClassComputed = computed(() => {
  let arr = [];

  if (isSelect.value) {
    arr.push(
      isTimePickerShow.value ? 'tp-aniInTimepicker' : 'tp-aniOutTimepicker'
    );
  }
  if (rangeSelectMode) {
    arr.push('rangeSelectMode');
  }
  return arr;
});

const handleHourMinuteChange = (target, value, idx) => {
  if (!rangeSelectMode) {
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
  }
};

const handleTimePick = () => {
  isHourPickerShow.value = !isHourPickerShow.value;
};
</script>

<template>
  <div ref="root" class="gt-timepicker-box gt-input-wrapper">
    <span
      class="gt-time-input"
      :style="{ width: `${width}px` }"
      @mouseenter="isMouseIn = true"
      @mouseleave="isMouseIn = false"
      :class="
        isTimePickerShow
          ? 'open'
          : isSelect
          ? 'selected'
          : isMouseIn
          ? 'hover'
          : ''
      "
      @click.stop="isTimePickerShow = !isTimePickerShow"
      >{{
        !isTimePickerShow & isSelect && autoHideLabel
          ? rangeSelectMode && curSelect[0] && curSelect[1]
            ? ''
            : '時間: '
          : '時間: '
      }}
      <span>{{
        rangeSelectMode ? rangeSelectResult : curSelect?.format(format)
      }}</span>
    </span>
    <g-icon
      class="icon"
      name="calendar"
      size="sm"
      @click.stop="isTimePickerShow = !isTimePickerShow"
    />

    <div
      @click.stop="isHourPickerShow = false"
      class="gt-timepicker"
      :class="popupClassComputed"
      :style="popupStyleComputed"
    >
      <div class="calender" :class="rangeSelectMode ? 'rangeSelectMode' : ''">
        <span class="month-pre" @click.stop="handleMonthPre">
          <g-icon name="chevron-left"
        /></span>
        <p class="month-all" @click.stop="handleMonthAll">{{ monthAll }}</p>
        <span class="month-next" @click.stop="handleMonthNext">
          <g-icon name="chevron-right"
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
          <div
            class="time-select"
            v-if="!rangeSelectMode"
            @click.stop="handleTimePick"
          >
            {{
              !rangeSelectMode && curSelect
                ? curSelect?.format('YYYY-MM-DD HH:mm').split(' ')[1]
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

          <span
            class="use-cur-time"
            v-if="!rangeSelectMode"
            @click.stop="handleUseNow"
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
