<script setup>
import { onMounted, computed, ref, getCurrentInstance, watch } from 'vue';
import { useRouter } from 'vue-router';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import packageMap from '../../package/components.json';
import packageChartMap from '../../package-chart/components.json';

gsap.registerPlugin(ScrollToPlugin);

const instance = getCurrentInstance();

const Router = useRouter();

const nameComputed = computed(() => {
  let title = Router.currentRoute.value.meta.title;
  let cName = Router.currentRoute.value.params?.componentName || null;
  return cName ? `GT元件-${cName}` : title;
});

// console.log("packagesList",packagesList)
const appMenu = ref(null);

const redLine = ref(false);

const onlyOneLevel = ref(
  localStorage.getItem('app-menu-onlyOneLevel') === 'true'
);

const appMenuCollaped = ref(localStorage.getItem('app-menu') === 'true');

const ignoreItems = ['timelineitem', 'collapse-card-section'];
const packagesCompNameList = Object.keys(packageMap).filter(
  (item) => !ignoreItems.includes(item)
);
const packagesChartCompNameList = Object.keys(packageChartMap);

// console.log(packagesChartCompNameList)

const activePath = ref(Router.currentRoute.value.path);

const menuRoutes = [
  {
    label: '指引',
    iconClasses: 'fas fa-tools',
    children: [
      {
        name: 'GT元件使用',
        label: 'GT元件使用',
        icon: 'file',
        path: '/doc',
      },
      {
        name: 'Graph使用',
        label: 'Graph使用',
        icon: 'file',
        path: '/graph',
      },
    ],
  },
  {
    label: '樣式',
    iconClasses: 'far fa-file-code',
    path: '/style',
  },
  {
    label: '圖表',
    iconClasses: 'fas fa-chart-pie',
    children: [
      ...packagesChartCompNameList.map((name) => {
        return {
          name: name,
          label: name,
          iconClasses: 'far fa-sticky-note',
          path: `/chart/${name}`,
        };
      }),
    ],
  },
  {
    label: 'GT元件a-i',
    iconClasses: 'far fa-list-alt',
    children: [
      ...packagesCompNameList
        .filter((name) => /^[a-iA-I].*$/.test(name))
        .map((name) => {
          return {
            name: name,
            label: name,
            iconClasses: 'far fa-sticky-note',
            path: `/gt/a-i/${name}`,
          };
        }),
    ],
  },
  {
    label: 'GT元件j-r',
    iconClasses: 'far fa-list-alt',
    children: [
      ...packagesCompNameList
        .filter((name) => /^[j-rJ-R].*$/.test(name))
        .map((name) => {
          return {
            name: name,
            label: name,
            iconClasses: 'far fa-sticky-note',
            path: `/gt/j-r/${name}`,
          };
        }),
    ],
  },
  {
    label: 'GT元件s-z',
    iconClasses: 'far fa-list-alt',
    children: [
      ...packagesCompNameList
        .filter((name) => /^[s-zS-Z].*$/.test(name))
        .map((name) => {
          return {
            name: name,
            label: name,
            iconClasses: 'far fa-sticky-note',
            path: `/gt/s-z/${name}`,
          };
        }),
    ],
  },
];

// console.log(menuRoutes)

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
    .from('.gt-e-menu', { x: '-50%', ease: 'power1.in' })
    .from('.gt-header', { y: '-100%' })
    .fromTo('.gt-content-wrapper', { opacity: 0 }, { opacity: 1 });
});

watch(
  () => Router.currentRoute.value.path,
  (val) => {
    activePath.value = val;

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
    class="doc-layout"
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
        <span>版本: v1.3.9</span>
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
.doc-layout {
  min-width: 1080px;
}
body {
  width: 100vw;
  height: 100vh;
  overflow-x: scroll;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    width: 5px;
    height: 1px;
    background-color: #d9d9d9;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #aaaaaa;
    &:hover {
      background-color: #666666;
    }
  }
}
.iconBox,
.gt-menu-group-item {
  svg {
    font-size: 14px;
  }
}
</style>
