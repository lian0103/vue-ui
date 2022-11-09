<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  time1: new Date(),
  time2: '',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">日期選擇</g-title>
    <g-time-picker v-model="inputs.time1" :width="250" />
    <p>inputs.time1:{{ inputs.time1 }}</p>
    <g-title :level="2" class="mb-3">日期範圍選擇</g-title>
    <g-time-picker v-model="inputs.time2" rangeSelectMode :width="250" />
    <p>inputs.time2:{{ inputs.time2 }}</p>
  </div>
</template>
