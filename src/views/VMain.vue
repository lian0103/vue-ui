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
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import packageMap from '../../package/components.json';

gsap.registerPlugin(ScrollToPlugin);

const instance = getCurrentInstance();

const Router = useRouter();

const nameComputed = computed(() => {
  let cName = Router.currentRoute.value.params?.componentName || null;
  return cName ? `GT元件-${cName}` : 'GT元件';
});

// console.log("packagesList",packagesList)
const appMenu = ref(null);

const redLine = ref(false);

const onlyOneLevel = ref(
  localStorage.getItem('app-menu-onlyOneLevel') === 'true'
);

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
    label: '樣式',
    icon: 'cus03',
    path: '/style',
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
    .fromTo('.gt-content-wrapper', { opacity: 0 }, { opacity: 1 });
});

watch(
  () => Router.currentRoute.value.path,
  (val) => {
    instance.refs.appMenu.activePath = val;
    
    const timeline = gsap.timeline({ defaults: { duration: 0.5 } });

    if (onlyOneLevel.value) {
      timeline
        .to('.gt-content ', { opacity: 0 })
        .fromTo(
          '.gt-content',
          { opacity: 0 },
          { opacity: 1, ease: 'power1.in' }
        )
        .to('.gt-content', { scrollTo: { y: 0 } });
    } else {
      timeline
        .to('.gt-content ', { opacity: 0 })
        .fromTo(
          '.gt-content',
          { opacity: 0 },
          { opacity: 1, ease: 'power1.in' }
        )
        .to('.gt-content', { scrollTo: { y: 0 } });
    }
  }
);

watch(
  () => onlyOneLevel.value,
  (val) => {
    localStorage.setItem('app-menu-onlyOneLevel', val);
    instance.refs.appMenu.onlyOneLevel = val;
  }
);
</script>

<template>
  <g-layout
    :class="redLine ? 'redLine' : ''"
    headText="Great Tree UI"
    :title="nameComputed"
    :collapsed="appMenuCollaped"
    @collapsed="handleCollapsed"
    :menuTabs="menuChildrenComputed"
    :onlyOneLevel="onlyOneLevel"
  >
    <template #sidebar>
      <g-menu
        ref="appMenu"
        class="gt-e-menu"
        :activePath="activePath"
        :menu="menuRoutes"
        :collapsed="appMenuCollaped"
        :onlyOneLevel="onlyOneLevel"
      />
    </template>
    <template #header>
      <div class="flex justify-end items-center pr-12">
        <span>版本: v1.3.2</span>
        <span class="ml-2 flex"
          >對齊線<g-switch v-model="redLine" class="ml-2"
        /></span>
        <span class="ml-2 flex"
          >選單tabs模式<g-switch v-model="onlyOneLevel" class="ml-2"
        /></span>
        <a href="https://github.com/lian0103/vue-ui/issues" target="_blank"
          >回報issue</a
        >
      </div>
    </template>
    <template #content>
      <router-view name="mainView"></router-view>
    </template>
  </g-layout>
</template>

<style lang="scss">
.redLine {
  * {
    outline: 1px solid red !important;
  }
}
</style>
