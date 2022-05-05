<script setup></script>

<template>
  <el-tabs><slot></slot></el-tabs>
</template>

<style lang="scss">
.el-tabs__nav-wrap::after {
  width: 0;
}

.el-tabs__item {
  min-width: 120px;
  height: 32px;
  text-align: center;
  background: #fbfbf9;
  color: #303236;
  @apply text-lg;
}
</style>
