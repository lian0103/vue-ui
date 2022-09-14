<script setup>
import { computed, ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import packageMap from '../../package/components.json';

// console.log("packagesList",packagesList)
const packagesCompNameList = Object.keys(packageMap);

const Router = useRouter();
const Route = useRoute();
// console.log(`Route`,Route)

const activePath =  ref(Router.currentRoute.value.path)

const menuRoutes = [
  {
    label: '文件',
    icon:'tool',
    children: [
      {
        label: '指引',
        icon: 'file',
        path: '/doc',
      },
    ],
  },
  {
    label: 'GT元件',
    icon:'items',
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
  <g-menu class="mx-auto" :activePath="activePath" :menu="menuRoutes" />
</template>

<style lang="scss"></style>
