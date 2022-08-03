<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { GMenu } from '../components/indexGT';
import gtDoc from './gtDoc';
import packagesList from '../../packages/list.json';

// console.log("packagesList",packagesList)
const packagesCompNameList = packagesList.map(item=>item.compName);

const Router = useRouter();
const Route = useRoute();
// console.log(`3-${packagesCompNameList.findIndex(item=>item===Route.params.componentName) + 1}`)
const active = ref(Router.currentRoute._value.meta.idx ||  `3-${packagesCompNameList.findIndex(item=>item===Route.params.componentName) + 1}`);


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
      ...packagesList.map((obj) => {
        return {
          label: obj.compZhName,
          icon: '',
          path: `/gt/${obj.compName}`,
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
