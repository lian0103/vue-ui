<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  dropdown0: 2,
  dropdown1: 3,
});

const options = [
  { label: 'Aaaa', value: 1 },
  { label: 'Bbbb', value: 2 },
  { label: 'Ggggwwwwwwwsssswww', value: 3 },
];
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">下拉選項點擊模式</g-title>
    <g-dropdown class="mr-4" v-model="inputs.dropdown0" :options="options" />

    <g-title :level="2" class="mb-3">下拉選項停留模式</g-title>
    <g-dropdown v-model="inputs.dropdown1" :options="options" icon hover />
  </div>
</template>
