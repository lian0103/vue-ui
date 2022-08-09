<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import packageMap from '../../package/components.json';

// console.log("packagesList",packagesList)
const packagesCompNameList = Object.keys(packageMap);

const Router = useRouter();
const Route = useRoute();
// console.log(`3-${packagesCompNameList.findIndex(item=>item===Route.params.componentName) + 1}`)
const active = ref(
  Router.currentRoute._value.meta.idx ||
    `3-${
      packagesCompNameList.findIndex(
        (item) => item === Route.params.componentName
      ) + 1
    }`
);

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
      ...packagesCompNameList.map((name) => {
        return {
          label: name,
          icon: '',
          path: `/gt/${name}`,
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
