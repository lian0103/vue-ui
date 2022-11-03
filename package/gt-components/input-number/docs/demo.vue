<script setup>
import { ref } from 'vue';

const number1 = ref(1);
const number2 = ref(10);
const number3 = ref(3);
</script>
<template>
  <g-title :level="2"> default </g-title>
  <g-input-number v-model="number1" />
  <g-divider />
  <g-title :level="2"> :unit="2" </g-title>
  <g-input-number v-model="number2" :unit="2" />
  <g-divider />
  <g-title :level="2"> :min="2" :max="6" </g-title>
  <g-input-number v-model="number3" :min="2" :max="6" />
  <g-divider />
</template>
