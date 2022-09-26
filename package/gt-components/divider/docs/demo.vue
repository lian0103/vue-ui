<script setup>
const arr = new Array(3);
</script>
<template>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> horizontal </g-title>
    <div class="flex flex-col w-1/3 mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-full h-24 bg-red-300"></div>
        <g-divider v-if="idx != arr.length - 1" />
      </template>
    </div>
  </div>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> vertical height 100%</g-title>
    <div class="flex h-24  w-1/3  mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-24 h-24 bg-green-300"></div>
        <g-divider v-if="idx != arr.length - 1" vertical />
      </template>
    </div>
  </div>
  <div class="mb-3 px-2 w-full">
    <g-title :level="2" class="mb-3"> vertical height 60%</g-title>
    <div class="flex h-24  w-1/3  mx-auto">
      <template v-for="(item, idx) in arr" :key="idx">
        <div class="w-24 h-24 bg-blue-300"></div>
        <g-divider v-if="idx != arr.length - 1" vertical height="60%" />
      </template>
    </div>
  </div>
</template>
