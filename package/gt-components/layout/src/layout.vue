<script setup>
import GTitle from '../../title';
import GTabs from '../../tabs';
import { ref, getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();

const { headText, title, menuTabs, collapsed } = defineProps({
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
});

const emit = defineEmits(['collapsed'])

const isCollapsed = ref(collapsed);

const currentTab = computed(() => {
  let path = instance.appContext.config.globalProperties?.$route.path;
  if (menuTabs && path) {
    // console.log('menuTabs',menuTabs)
    // console.log('path',path)
    return menuTabs.filter((item) => item.path == path)[0].name;
  }
  return null;
});

const handleMenuTabCallback = (target) => {
  let { path } = target;
  if (path && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.push(path);
  }
};

const handleCollapsed = () => {
  let val = !isCollapsed.value
  isCollapsed.value = val;
  emit('collapsed', val)
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
    <div class="gt-headline">
      {{ headText }}
    </div>

    <div class="gt-header">
      <g-icon name="setting" @click="handleCollapsed" />
      <div class="title">
        <g-title :level="1">{{ title }}</g-title>
      </div>
      <slot name="header" />
    </div>

    <div class="gt-sidebar-content">
      <div class="gt-sidebar" :style="{width:isCollapsed?'80px':'300px'}">
        <div class="flex flex-col">
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
      </div>

      <div class="gt-content" :style="{width:isCollapsed?'calc(100% - 80px)':'calc(100% - 300px)'}">
        <g-tabs
          v-if="menuTabs && menuTabs.length > 0"
          :tabs="menuTabs"
          :clickCallback="handleMenuTabCallback"
          :currentTab="currentTab"
        />
        <slot name="content" />
      </div>
    </div>
  </div>
</template>