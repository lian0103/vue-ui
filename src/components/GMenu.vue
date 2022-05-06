<template>
  <el-menu
    active-text-color="#3bb071"
    background-color="#fbfbf9"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#444"
  >
    <el-sub-menu index="1">
      <template #title>
        <g-icons name="calendar" class="text-second w-8" />
        <span>這是menu區塊</span>
      </template>
      <el-menu-item-group title="Group One">
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item one</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <g-icons name="calendar" class="text-second w-8" />
      <span>這是menu區塊</span>
    </el-menu-item>
    <el-menu-item index="3" disabled>
      <g-icons name="calendar" class="text-second w-8" />
      <span>這是menu區塊</span>
    </el-menu-item>
    <el-sub-menu index="4">
      <template #title>
        <g-icons name="calendar" class="text-second w-8" />
        <span>這是menu區塊</span>
      </template>
      <el-menu-item-group title="Group four">
        <el-menu-item index="4-1">item 1</el-menu-item>
        <el-menu-item index="4-2">item 2</el-menu-item>
        <el-menu-item index="4-3">item 3</el-menu-item>
        <el-menu-item index="4-4">item 4</el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
