<template>
  <div class="mb-3 px-2 w-full md:w-3/4">
    <g-title :level="2" class="mb-3">上傳中</g-title>
    <div class="mb-3 flex w-full">
      <g-upload-icon class="mr-2" />
      <g-upload-icon class="mr-2" :percent="20" />
      <g-upload-icon class="mr-2" :percent="80" />
      <g-upload-icon class="mr-2" :percent="0" auto />
    </div>
  </div>
</template>
