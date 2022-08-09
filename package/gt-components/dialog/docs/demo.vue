<script setup>
import { reactive } from 'vue';

const dialogInfo = reactive({
  sm1: false,
  sm2: false,
  md1: false,
  md2: false,
  lg1: false,
  lg2: false,
  title: 'Hello',
});

const handleCallback = () => {
  alert(123);
};

const handleDialog = (target = 1, size = 'sm') => {
  // console.log('~~~', '' + size + target);
  switch (target) {
    case 1: {
      dialogInfo['' + size + target] = true;
      break;
    }
    case 2: {
      dialogInfo['' + size + target] = true;
      break;
    }
  }
};
</script>

<template>
  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.sm1"
    :handleCallback="handleCallback"
    size="sm"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.sm2"
    mode="delete"
    size="sm"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.md1"
    :handleCallback="handleCallback"
    size="md"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.md2"
    mode="delete"
    size="md"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.lg1"
    :handleCallback="handleCallback"
    size="lg"
    >body~~small Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
    dolorum reprehenderit dignissimos quaerat! Soluta voluptatibus quidem autem
    dolorum, magnam minus odio aspernatur! Tenetur, possimus et. Incidunt est
    laboriosam veritatis porro.</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.lg2"
    mode="delete"
    size="lg"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">DIALOG-Small</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        :size="dialogInfo.size"
        class="mr-4"
        @click="
          () => {
            handleDialog(1, 'sm');
          }
        "
        >Small & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'sm');
          }
        "
        >Small & Delete</g-button
      >
    </div>
  </div>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">DIALOG-Middle</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'md');
          }
        "
        >middle & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'md');
          }
        "
        >middle & Delete</g-button
      >
    </div>
  </div>
  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="my-4">DIALOG-LARGE</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'lg');
          }
        "
        >Large & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'lg');
          }
        "
        >Large & Delete</g-button
      >
    </div>
  </div>
</template>
