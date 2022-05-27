<script setup>
import up from '../assets/icons/up.svg';
import arrowDown from '../assets/icons/arrow-down.svg';
import arrowLeft from '../assets/icons/arrow-left.svg';
import calendar from '../assets/icons/calendar.svg';
import check from '../assets/icons/check.svg';
import chevronDown from '../assets/icons/chevron-down.svg';
import chevronLeft from '../assets/icons/chevron-left.svg';
import chevronRight from '../assets/icons/chevron-right.svg';
import chevronUp from '../assets/icons/chevron-up.svg';
import circle from '../assets/icons/circle.svg';
import down from '../assets/icons/down.svg';
import download from '../assets/icons/download.svg';
import ellipsis from '../assets/icons/ellipsis.svg';
import plus from '../assets/icons/plus.svg';
import search from '../assets/icons/search.svg';
import sequence from '../assets/icons/sequence.svg';
import trash from '../assets/icons/trash.svg';
import x from '../assets/icons/x.svg';
import loading from '../assets/icons/loading.svg';
import upload from '../assets/icons/upload.svg';
import download_sm from '../assets/icons/download_sm.svg'

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
  download_sm
};

const { name } = defineProps({
  name: {
    type: String,
    default: 'up',
  },
});
</script>

<template>
  <div class="text-center">
    <!-- <img class="w-full" :src="iconNameMap[name]" alt="icon" /> -->
    <component class="gt-svg-icon" :is="iconNameMap[name]" />
  </div>
</template>

<style lang="scss">
.gt-svg-icon {
  @apply w-full;
  fill: currentColor !important;
}
</style>
