<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  checkedArr: ['2', 22, 2, 8],
});
</script>

<template>
  <div class="w-full md:w-3/4 mx-auto relative">
    <g-title :level="2" class="mb-3">群組勾選欄</g-title>
  </div>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <p class="py-2">inputs.checkedArr:{{ inputs.checkedArr }}</p>
    <g-checkbox-group class="mb-3 flex w-full" v-model="inputs.checkedArr">
      <g-checkbox class="mr-4" :value="2" label="選項2" />
      <g-checkbox class="mr-4" :value="4" label="選項4" />
      <g-checkbox class="mr-4" :value="6" label="選項6" disabled />
      <g-checkbox class="mr-4" :value="8" label="選項8" disabled />
    </g-checkbox-group>
  </div>
</template>
