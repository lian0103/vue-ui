<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">下載中</g-title>
    <div class="mb-3 flex w-full">
      <g-download-icon class="mr-2" />
      <g-download-icon class="mr-2" :percent="20" />
      <g-download-icon class="mr-2" :percent="100" />
      <g-download-icon class="mr-2" :percent="0" :auto="true" />
    </div>
  </div>
</template>