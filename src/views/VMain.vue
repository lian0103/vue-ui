<script setup>
import {
  onMounted,
  onBeforeUpdate,
  computed,
  ref,
  getCurrentInstance,
  watch,
} from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import packageMap from '../../package/components.json';

gsap.registerPlugin(ScrollToPlugin)

const instance = getCurrentInstance();

const Router = useRouter();

const nameComputed = computed(() => {
  let cName = Router.currentRoute.value.params?.componentName || null;
  return cName ? `GT元件-${cName}` : 'GT元件';
});

// console.log("packagesList",packagesList)
const appMenu = ref(null);

const appMenuCollaped = ref(localStorage.getItem('app-menu') === 'true');

const packagesCompNameList = Object.keys(packageMap);

const activePath = ref(Router.currentRoute.value.path);

const menuRoutes = [
  {
    label: '指引',
    icon: 'tool',
    children: [
      {
        name: 'README.md',
        label: 'README.md',
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
          name: name,
          label: name,
          icon: '',
          path: `/gt/${name}`,
        };
      }),
    ],
  },
];

const menuChildrenComputed = computed({
  get() {
    return (
      menuRoutes.filter(
        (item) => item.label === Router.currentRoute.value?.meta?.title
      )[0]?.children || []
    );
  },
});

const handleCollapsed = (val) => {
  // console.log('handleCollapsed',val)
  instance.refs.appMenu.collapsed = val;
  appMenuCollaped.value = val;
  localStorage.setItem('app-menu', val);
};

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1 } });
  timeline
    .from('.gt-e-menu', { x: '-100%', ease: 'power1.in' })
    .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content', { opacity: 0 }, { opacity: 1 });
});

watch(
  () => Router.currentRoute.value.fullPath,
  (val) => {
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });
    timeline
      .to('.gt-content ', { opacity: 0 })
      .from('.gt-header', { y: '-100%' })
      .fromTo('.gt-content', { opacity: 0 }, { opacity: 1, ease: 'power1.in' })
      .to('.gt-content', { scrollTo: { y: 0 } });
  }
);
</script>

<template>
  <g-layout
    class="layout"
    headText="Great Tree UI"
    :title="nameComputed"
    :collapsed="appMenuCollaped"
    @collapsed="handleCollapsed"
    :menuTabs="menuChildrenComputed"
  >
    <template #sidebar>
      <g-menu
        ref="appMenu"
        class="mx-auto gt-e-menu"
        :activePath="activePath"
        :menu="menuRoutes"
        :collapsed="appMenuCollaped"
      />
    </template>
    <template #header>
      <div class="w-1/4 flex justify-center items-center px-4">
        <span>v0.0.23</span>
      </div>
    </template>
    <template #content>
      <router-view name="mainView"></router-view>
    </template>
  </g-layout>
</template>
