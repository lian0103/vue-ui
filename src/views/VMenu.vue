<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const Router = useRouter();
</script>

<template>
  <el-menu :default-active="Router.currentRoute._value.meta.idx">
    <el-sub-menu index="1">
      <template #title>
        <g-icons name="calendar" class="w-6 mr-2" />
        <span>文件</span>
      </template>

      <router-link to="/doc">
        <el-menu-item index="1-1">介紹</el-menu-item></router-link
      >

      <router-link to="/use">
        <el-menu-item index="1-2">使用</el-menu-item></router-link
      >

      <router-link to="/install">
        <el-menu-item index="1-3">安裝</el-menu-item></router-link
      >
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <g-icons name="download" class="w-6 mr-2" />
        <span>元件</span>
      </template>
      <router-link to="/elementPlus">
        <el-menu-item index="2-1">ElementPlus</el-menu-item></router-link
      >
      <router-link to="/quasar"
        ><el-menu-item index="2-2"> Quasar</el-menu-item></router-link
      >
      <router-link to="/gt-self">
        <el-menu-item index="2-3"> GT開發</el-menu-item></router-link
      >
    </el-sub-menu>
  </el-menu>
</template>

<style lang="scss"></style>
