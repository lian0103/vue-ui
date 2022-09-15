<script setup>
import { ref, watch } from 'vue';
import appInfo from '../stores';
import { useRouter } from 'vue-router';
import packageMap from '../../package/components.json';

// console.log("packagesList",packagesList)
const packagesCompNameList = Object.keys(packageMap);

const Router = useRouter();

const activePath = ref(Router.currentRoute.value.path);

const menuRoutes = [
  {
    label: '文件',
    icon: 'tool',
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
    icon: 'items',
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

const isCollapsed = ref(appInfo.value.isCollapsed);

watch(
  () => appInfo.value.isCollapsed,
  (val) => {
    // console.log('in watch', val);
    isCollapsed.value = val;
  }
);
</script>

<template>
  <g-menu
    v-if="isCollapsed"
    class="mx-auto"
    :activePath="activePath"
    :menu="menuRoutes"
    :collapsed="true"
  />
  <g-menu
    v-else
    class="mx-auto"
    :activePath="activePath"
    :menu="menuRoutes"
    :collapsed="false"
  />
</template>

<style lang="scss"></style>
