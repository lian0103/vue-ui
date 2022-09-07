<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  time1: '',
});
</script>

<template>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">日期選擇</g-title>
    <g-time-picker v-model="inputs.time1" format="YYYY-MM-DD" />
    <p>inputs.time1:{{ inputs.time1 }}</p>
  </div>
</template>
