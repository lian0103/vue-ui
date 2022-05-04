<script setup></script>

<template>
  <el-tabs><slot></slot></el-tabs>
</template>

<style lang="scss">
.el-tabs__nav-wrap::after{
  width: 0;
}
</style>
