<script setup>
import { getCurrentInstance, ref } from 'vue';
const instance = getCurrentInstance();
const menuRoutes = [
  {
    label: 'group1',
    icon: 'user',
    children: [
      {
        label: 'route1',
        icon: '',
        path: 'doc',
      },
      {
        label: 'route2',
        icon: '',
        path: '456',
      },
      {
        label: 'route3',
        icon: '',
        path: '456',
      },
    ],
  },
  {
    label: 'group2',
    icon: 'tool',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
      {
        label: 'route3',
        icon: 'file',
        path: '456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '123',
      },
    ],
  },
  {
    label: 'link',
    path: 'ccc',
  },
  {
    label: 'group3',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '4511116',
      },
      {
        label: 'route466',
        icon: 'file',
        path: '123',
      },
    ],
  },
];

const menuRef = ref(null);

const handleClick = () => {
  // console.log('instance.refs.menuRef', instance.refs.menuRef.collapsed);
  let val = !instance.refs.menuRef.collapsed;
  instance.refs.menuRef.collapsed = val;
};
</script>

<template>
  <div class="w-full box">
    <div class="flex flex-col">
      <g-button @click="handleClick" :width="100">收開</g-button>
      <g-menu ref="menuRef" active="1-2" :menu="menuRoutes" :collapsed="true" />
    </div>

    <g-menu activePath="4511116" :menu="menuRoutes" />
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-around;
  position: relative;
}
</style>
