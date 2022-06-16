<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { GMenu } from '../components/indexGT';

const Router = useRouter();
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
    label: '元件',
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
      {
        label: 'GT開發',
        icon: 'file',
        path: '/gt-self',
      },
    ],
  },
];
</script>

<template>
  <g-menu
    class="mx-auto"
    :active="Router.currentRoute._value.meta.idx"
    :menu="menuRoutes"
  />
</template>

<style lang="scss"></style>
