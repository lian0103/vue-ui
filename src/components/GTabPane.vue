<script setup></script>

<template>
  <el-tab-pane class="gt-tab-item"><slot></slot></el-tab-pane>
</template>

<style lang="scss">
.el-tabs__item {
  min-width: 120px;
  height: 32px;
  text-align: center;
  background: #fbfbf9;
  color: #303236;
  @apply text-lg;
}
</style>
