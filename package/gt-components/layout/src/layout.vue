<script setup>
import GTitle from '../../title';
import GTabs from '../../tabs';
import { ref, getCurrentInstance, computed, watch } from 'vue';
import { useElementBounding } from '@vueuse/core';

const instance = getCurrentInstance();

const props = defineProps({
  headText: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  menuTabs: {
    type: Array,
    default: null,
  },
  collapsed: {
    type: Boolean,
    default: false,
  },
  onlyOneLevel: {
    type: Boolean,
    default: false,
  },
});

const gtSidebarContentRef = ref(null);
const { width: widthGtSidebarContent } =
  useElementBounding(gtSidebarContentRef);

const emit = defineEmits(['collapsed']);
const isCollapsed = ref(props.collapsed);

const Router = instance.appContext.config.globalProperties?.$router;

const currentTab = computed(() => {
  let { path } = Router.currentRoute.value;
  if (props.menuTabs && path) {
    return props.menuTabs.filter((item) => item.path == path)[0]?.name;
  }
  return null;
});

const handleMenuTabCallback = (target = {}) => {
  let { path } = target;
  if (path && Router) {
    Router.push(path);
  } else {
    console.log('target is empty');
  }
};

const handleCollapsed = () => {
  let val = !isCollapsed.value;
  isCollapsed.value = val;
  emit('collapsed', val);
  instance.refs.layoutTabs.collapsed = val;
};
// console.log(instance.appContext.config.globalProperties.$route.path)
</script>
<script>
export default {
  name: 'GLayout',
};
</script>
<template>
  <div class="gt-wrapper" :class="isCollapsed ? 'collapsed' : ''">
    <div class="gt-headline-header">
      <div
        class="gt-headline"
        :style="{
          width: isCollapsed ? '100px' : '290px',
          'min-width': isCollapsed ? '100px' : '290px',
        }"
      >
        <g-icon name="menu" @click="handleCollapsed" />
        <div class="head-text">
          {{ headText }}
        </div>
      </div>

      <div class="gt-header">
        <div class="title">
          <g-title :level="1">{{ title }}</g-title>
        </div>
        <slot name="header" />
      </div>
    </div>

    <div
      class="gt-sidebar-content"
      id="gtSidebarContentRef"
      ref="gtSidebarContentRef"
    >
      <div
        class="gt-sidebar"
        :class="onlyOneLevel ? 'onlyOneLevel' : ''"
        :style="{
          width: isCollapsed ? '100px' : '290px',
          'min-width': isCollapsed ? '100px' : '290px',
        }"
      >
        <div class="gt-menu-box"><slot name="sidebar" /></div>

        <div class="gt-bottomLogo">
          <img src="../../../assets/images/gt-logo.png" alt="" />
          <img
            v-if="!isCollapsed"
            src="../../../assets/images/gt-logo-text.png"
            alt=""
          />
        </div>
      </div>

      <div class="gt-content-wrapper">
        <g-tabs
          ref="layoutTabs"
          name="layoutTab"
          v-if="onlyOneLevel && menuTabs && menuTabs.length > 0"
          class="gt-route-tabs"
          :tabs="menuTabs"
          :clickCallback="handleMenuTabCallback"
          :currentTab="currentTab"
          :layoutMode="true"
          :parentWidth="widthGtSidebarContent"
          :collapsed="isCollapsed"
        />

        <div
          class="gt-content"
          :style="{
            height:
              menuTabs && menuTabs.length > 0
                ? 'calc(100vh - 125px)'
                : 'calc(100vh - 80px)',
          }"
        >
          <slot name="content" />
        </div>
      </div>
    </div>
  </div>
</template>
