<script setup>
import VMenu from './VMenu.vue';
import { useRouter } from 'vue-router';

const Router = useRouter();
</script>

<template>
  <g-layout
    headText="Great Tree UI"
    :title="Router.currentRoute._value.meta.title"
  >
    <template #sidebar>
      <v-menu class="gt-menu" />
    </template>
    <template #header>
      <div class="w-1/4 flex justify-center items-center px-4">
        <span class="flex leading-8 mr-4 cursor-pointer"
          ><g-icons name="search" class="text-main w-8" /><span
            >搜尋</span
          ></span
        >
        <span class="cursor-pointer"
          ><g-icons name="calendar" class="text-main w-8"
        /></span>
      </div>
    </template>
    <template #content>
      <router-view name='mainView'></router-view>
    </template>
  </g-layout>
</template>

<style lang="scss" scoped></style>
