<script setup>
import { onMounted, onBeforeUpdate } from 'vue';
import VMenu from './VMenu.vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';

const Router = useRouter();

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from('.gt-e-menu', { x: '-100%', ease: 'power1.in' })
    .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content', { opacity: 0 }, { opacity: 1 });
});

onBeforeUpdate(() => {
  const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
  timeline
    .to('.gt-content', { opacity: 0 })
    .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content', { opacity: 0 }, { opacity: 1, ease: 'power1.in' });
});
</script>

<template>
  <g-layout
    class="layout"
    headText="Great Tree UI"
    :title="Router.currentRoute._value.meta.title"
  >
    <template #sidebar>
      <v-menu class="gt-e-menu" />
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
      <router-view name="mainView"></router-view>
    </template>
  </g-layout>
</template>

<style lang="scss" scoped></style>
