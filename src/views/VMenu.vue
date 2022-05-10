<template>
  <el-menu default-active="2-2">
    <el-sub-menu index="1">
      <template #title>
        <g-icons name="calendar" class="w-8" />
        <span>這是menu區塊</span>
      </template>
      <el-menu-item index="1-1">item one</el-menu-item>
      <el-menu-item index="1-2">item one</el-menu-item>
      <el-menu-item index="1-3">item three</el-menu-item>
      <el-menu-item index="1-4">item one</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <g-icons name="calendar" class="w-8" />
        <span>這是menu區塊</span>
      </template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item one</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-menu-item index="2-4">item one</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss"></style>
