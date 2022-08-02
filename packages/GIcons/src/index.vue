<script setup>
import up from 'packages/assets/icons/up.svg';
import arrowDown from 'packages/assets/icons/arrow-down.svg';
import arrowLeft from 'packages/assets/icons/arrow-left.svg';
import calendar from 'packages/assets/icons/calendar.svg';
import check from 'packages/assets/icons/check.svg';
import chevronDown from 'packages/assets/icons/chevron-down.svg';
import chevronLeft from 'packages/assets/icons/chevron-left.svg';
import chevronRight from 'packages/assets/icons/chevron-right.svg';
import chevronUp from 'packages/assets/icons/chevron-up.svg';
import circle from 'packages/assets/icons/circle.svg';
import down from 'packages/assets/icons/down.svg';
import download from 'packages/assets/icons/download.svg';
import ellipsis from 'packages/assets/icons/ellipsis.svg';
import plus from 'packages/assets/icons/plus.svg';
import search from 'packages/assets/icons/search.svg';
import sequence from 'packages/assets/icons/sequence.svg';
import trash from 'packages/assets/icons/trash.svg';
import x from 'packages/assets/icons/x.svg';
import loading from 'packages/assets/icons/loading.svg';
import upload from 'packages/assets/icons/upload.svg';
import download_sm from 'packages/assets/icons/download_sm.svg';
import file from 'packages/assets/icons/file.svg';

import { computed } from 'vue';

const iconNameMap = {
  up,
  arrowDown,
  arrowLeft,
  calendar,
  check,
  chevronDown,
  chevronLeft,
  chevronRight,
  chevronUp,
  circle,
  down,
  download,
  ellipsis,
  plus,
  search,
  sequence,
  trash,
  x,
  loading,
  upload,
  download_sm,
  file,
};

const IconEnum = {
  md: 'icon-md',
  sm: 'icon-sm',
  lg: 'icon-lg',
};

const { name, size } = defineProps({
  name: {
    type: String,
    default: 'up',
  },
  size: {
    type: String,
  },
});

const classComputed = computed(() => {
  return IconEnum[size] ? IconEnum[size] : IconEnum.md;
});
</script>

<template>
  <div class="gt-icon" :class="classComputed">
    <!-- <img class="w-full" :src="iconNameMap[name]" alt="icon" /> -->
    <component class="gt-svg-icon" :is="iconNameMap[name]" />
  </div>
</template>

<style lang="scss">
.gt-icon {
  @apply text-center;
}

.icon-md {
  width: 24px;
  height: 24px;
}
.icon-sm {
  width: 14px;
  height: 14px;
}
.icon-lg {
  width: 36px;
  height: 36px;
}

.gt-svg-icon {
  display: block;
  @apply w-full;
  fill: currentColor !important;
}
</style>
