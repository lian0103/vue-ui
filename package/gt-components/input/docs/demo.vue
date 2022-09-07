<script setup>
import { reactive } from 'vue';

const inputs = reactive({
  input0: 'hello',
  input2: 123,
  input1: '',
});

const handleBlurEvent = (e) => {
  console.log('blur', e);
};

const handleFocusEvent = (e) => {
  console.log('focus', e);
};
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">icon left </g-title>
    <g-input
      v-model="inputs.input0"
      size="md"
      icon="search"
      iconPosition="left"
      green
    />

    <g-title :level="2" class="mb-3">icon right </g-title>
    <g-input v-model="inputs.input0" icon="search" />

    <g-title :level="2" class="mb-3">clearable</g-title>
    <g-input v-model="inputs.input0" green clearable />
    <g-input v-model="inputs.input0" size="md" clearable />

    <g-title :level="2" class="mb-3">事件(blur、focus)</g-title>
    <g-input
      v-model="inputs.input0"
      @blur="handleBlurEvent"
      @focus="handleFocusEvent"
    />

    <g-title :level="2" class="mb-3">輸入框-width 200</g-title>
    <g-input v-model="inputs.input0" size="sm" :width="200" />

    <g-title :level="2" class="mb-3">輸入框-size</g-title>
    <g-title :level="3" class="mb-3">middle height:43px</g-title>
    <g-input v-model="inputs.input0" size="md" clearable />
    <g-title :level="3" class="mb-3">small height:36px</g-title>
    <g-input v-model="inputs.input0" size="sm" clearable />

    <g-title :level="2" class="mb-3">輸入框-type</g-title>
    <g-title :level="3" class="mb-3">number</g-title>
    <g-input v-model="inputs.input2" type="number" label="數字" />
    <g-title :level="3" class="mb-3">password</g-title>
    <g-input v-model="inputs.input1" type="password" label="密碼" />

    <g-title :level="2" class="mb-3">輸入框-green</g-title>
    <g-input v-model="inputs.input0" green label="欄位" />
  </div>
</template>
