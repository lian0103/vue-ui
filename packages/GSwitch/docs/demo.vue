<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  switch0: false,
  switch1: true,
  switch2: false,
  switch3: true,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="mb-3 flex w-full">
      <g-switch class="mr-4" v-model="inputs.switch0" />
      <g-switch class="mr-4" v-model="inputs.switch1" />
      <g-switch class="mr-4" v-model="inputs.switch2" statusLabel />
      <g-switch class="mr-4" v-model="inputs.switch3" statusLabel />
    </div>
  </div>
</template>
