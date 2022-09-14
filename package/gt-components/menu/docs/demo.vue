<script setup>
const menuRoutes = [
  {
    label: 'group1',
    icon:'user',
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
    icon:'tool',
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
    label:'link',
    path:'ccc'
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
        label: 'route4',
        icon: 'file',
        path: '123',
      },
    ],
  }
];
</script>

<template>
  <div class="w-full box">
    <g-menu active="1-2" :menu="menuRoutes" />
    <g-menu activePath="4511116" :menu="menuRoutes" />
  </div>

</template>

<style lang="scss" scoped>
.box{
  display: flex;
  justify-content: space-around;
}

</style>
