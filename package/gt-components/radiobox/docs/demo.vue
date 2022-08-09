<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  radio0: true,
  radio1: false,
  radio2: true,
  radio3: false,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <div class="mb-3 flex w-full">
      <g-radiobox class="mr-4" v-model="inputs.radio0" label="A" />
      <g-radiobox class="mr-4" v-model="inputs.radio1" label="B" />
      <g-radiobox class="mr-4" v-model="inputs.radio2" disabled label="C" />
      <g-radiobox class="mr-4" v-model="inputs.radio3" disabled label="D" />
    </div>
  </div>
</template>
