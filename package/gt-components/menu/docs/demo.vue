<script setup>
import { getCurrentInstance, ref } from 'vue';
const instance = getCurrentInstance();

const menuRoutes = [
  {
    label: 'group1',
    icon: 'info',
    children: [
      {
        label: 'route1',
        icon: '',
        path: 'doc',
        iconClasses:'fas fa-vote-yea iconWidth'
      },
      {
        label: 'route2',
        icon: '',
        path: '456',
        iconClasses:'fas fa-user iconWidth'
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
    iconClasses:'fas fa-vote-yea iconWidth50'
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

const menuRoutes2 = [
  {
    label: '群組1',
    icon: 'info',
    children: [
      {
        label: '路由1',
        icon: '',
        path: 'doc',
        iconClasses:'fas fa-vote-yea iconWidth'
      },
      {
        label: '路由2',
        icon: '',
        path: '456',
        iconClasses:'fas fa-user iconWidth'
      },
      {
        label: '路由3',
        icon: '',
        path: '456',
      },
    ],
  },
  {
    label: '群組2',
    icon: 'info',
    children: [
      {
        label: '路由1',
        icon: '',
        path: 'doc',
        iconClasses:'fas fa-vote-yea iconWidth'
      }
    ],
  }
];

const menuRef = ref(null);
const menuRoutesRefIndex = ref(1);
const menuRoutesRef = ref([...menuRoutes]);



const handleClick = () => {
  // console.log('instance.refs.menuRef', instance.refs.menuRef.collapsed);
  let val = !instance.refs.menuRef.collapsed;
  instance.refs.menuRef.collapsed = val;
};

const handleRouteChange = () => {
  menuRoutesRef.value = menuRoutesRefIndex.value == 1 ? [...menuRoutes2] : [...menuRoutes];
  menuRoutesRefIndex.value = menuRoutesRefIndex.value == 1 ? 2 : 1;
};
</script>

<template>
  <div class="w-full box">
    <div class="flex flex-col">
      <g-button @click="handleClick" :width="100">收開</g-button>
      <g-menu ref="menuRef" active="1-2" :menu="menuRoutes" :collapsed="true" />
    </div>

    <div class="flex flex-col">
      <g-button @click="handleRouteChange" :width="100">資料更換</g-button>
      <g-menu activePath="4511116" :menu="menuRoutesRef" />
    </div>


  </div>
</template>

<style lang="scss">
.box {
  display: flex;
  justify-content: space-around;
  position: relative;
}
.iconWidth {
  width: 12px !important;
  margin-right: 4px;
}

.iconWidth50 {
  width: 50% !important;
  margin-right: 4px;
}
</style>
