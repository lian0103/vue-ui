<script setup>
const menuRoutes = [
  {
    label: 'group1',
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
    ],
  },
  {
    label: 'group2',
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
  <div class="flex justify-items-start items-start">
    <g-menu active="1-2" :menu="menuRoutes" />
    <g-menu activePath="4511116" :menu="menuRoutes" />
  </div>

</template>
