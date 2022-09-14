<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import packageMap from '../../package/components.json';

// console.log("packagesList",packagesList)
const packagesCompNameList = Object.keys(packageMap);

const { isCollapsed } = defineProps({
  isCollapsed: {
    type: Boolean,
  },
});

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

// console.log(menuRoutes);
watch(()=>isCollapsed,(val)=>{
  console.log(val)
})

</script>

<template>
  <g-menu
    class="mx-auto"
    :activePath="activePath"
    :menu="menuRoutes"
    :isCollapsed="isCollapsed"
  />
</template>

<style lang="scss"></style>
