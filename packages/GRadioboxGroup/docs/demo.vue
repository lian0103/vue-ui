<script setup>
import { reactive } from 'vue';
const inputs = reactive({
  radio4: 2,
});
</script>

<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <p class="py-2">inputs.radio4:{{ inputs.radio4 }}</p>
    <g-radiobox-group class="mb-3 flex w-full" v-model="inputs.radio4">
      <g-radiobox class="mr-4" :value="2" label="選項2" />
      <g-radiobox class="mr-4" :value="4" label="選項4" />
      <g-radiobox class="mr-4" :value="6" label="選項6" />
      <g-radiobox class="mr-4" :value="8" label="選項8" disabled />
    </g-radiobox-group>
  </div>
</template>
