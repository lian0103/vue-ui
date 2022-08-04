<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  input0: 'hello',
  input2: 123,
  input1: '',
});
</script>

<template>
  <div class="w-full md:w-3/4 mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">輸入框-size</g-title>
    <g-title :level="3" class="mb-3">middle height:43px</g-title>
    <g-input v-model="inputs.input0" size="md" />
    <g-title :level="3" class="mb-3">small height:36px</g-title>
    <g-input v-model="inputs.input0" size="sm" />

    <g-title :level="2" class="mb-3">輸入框-type</g-title>
    <g-title :level="3" class="mb-3">number</g-title>
    <g-input v-model="inputs.input2" type="number" label="數字" />
    <g-title :level="3" class="mb-3">password</g-title>
    <g-input v-model="inputs.input1" type="password" label="密碼" />

    <g-title :level="2" class="mb-3">輸入框-green</g-title>
    <g-input v-model="inputs.input0" green label="欄位" />
  </div>
</template>
