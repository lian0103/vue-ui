<script setup></script>

<template>
  <!-- <router-view></router-view> -->
  <g-loading-icon class="mr-2" :percent="0" :auto="true" />
  <g-upload-icon class="mr-2" :percent="0" auto />
  <g-img-upload />
</template>

<style lang="scss">
.redText {
  @apply text-red-500;
}

.paragraphHead {
  @apply w-full pl-14 py-8 text-left;
}

.vuepress-markdown-body {
  padding: 0 !important;
}
</style>
