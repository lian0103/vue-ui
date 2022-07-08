<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { GMenu } from '../components/indexGT';
import gtDoc from './gtDoc';

const Router = useRouter();
const Route = useRoute();
const active = ref(Router.currentRoute._value.meta.idx ||  gtDoc[Route.params.componentName]?.menuIndex);

const menuRoutes = [
  {
    label: '文件',
    children: [
      {
        label: '指引',
        icon: 'file',
        path: '/doc',
      },
      {
        label: '使用',
        icon: 'plus',
        path: '/use',
      },
      {
        label: '安裝',
        icon: 'download',
        path: '/install',
      },
    ],
  },
  {
    label: '覆寫元件',
    children: [
      {
        label: 'Element',
        icon: 'file',
        path: '/element',
      },
      {
        label: 'Quasar',
        icon: 'file',
        path: '/quasar',
      },
    ],
  },
  {
    label: 'GT元件',
    children: [
      ...Object.keys(gtDoc).map((key) => {
        return {
          label: gtDoc[key].name,
          icon: '',
          path: `/gt/${key}`,
        };
      }),
    ],
  },
];

// console.log(menuRoutes);
</script>

<template>
  <g-menu class="mx-auto" :active="active" :menu="menuRoutes" />
</template>

<style lang="scss"></style>
