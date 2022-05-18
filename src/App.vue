<script setup></script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
div > p {
  margin-bottom: 20px;
  padding: 4px 10px;
}

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
