<script setup>
const menuRoutes = [
  {
    label: 'group1',
    children: [
      {
        label: 'route1',
        icon: '',
        path: '/doc',
      },
      {
        label: 'route2',
        icon: '',
        path: '/456',
      },
    ],
  },
  {
    label: 'group2',
    children: [
      {
        label: 'route3',
        icon: 'file',
        path: '/456',
      },
      {
        label: 'route4',
        icon: 'file',
        path: '/123',
      },
    ],
  },
];
</script>

<template>
  <g-menu active="1-1" :menu="menuRoutes" />
</template>
