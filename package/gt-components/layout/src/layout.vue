<script setup>
import GTitle from '../../title';
import GTabs from '../../tabs';
import { ref, getCurrentInstance, computed, watch } from 'vue';

const instance = getCurrentInstance();

const { headText, title, menuTabs, collapsed, onlyOneLevel } = defineProps({
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

const emit = defineEmits(['collapsed']);
const isCollapsed = ref(collapsed);

const Router = instance.appContext.config.globalProperties?.$router;

const currentTab = computed(() => {
  let { path } = Router.currentRoute.value;
  if (menuTabs && path) {
    return menuTabs.filter((item) => item.path == path)[0]?.name;
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
      <g-icon name="menu" @click="handleCollapsed" />
      <div>
        {{ headText }}
      </div>
    </div>

    <div class="gt-header">
      <div class="title">
        <g-title :level="1">{{ title }}</g-title>
      </div>
      <slot name="header" />
    </div>

    <div class="gt-sidebar-content">
      <div
        class="gt-sidebar"
        :class="onlyOneLevel ? 'onlyOneLevel' : ''"
        :style="{
          width: isCollapsed ? '80px' : onlyOneLevel ? '220px' : '300px',
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
          name="layoutTab"
          v-if="onlyOneLevel && menuTabs && menuTabs.length > 0"
          class="gt-route-tabs"
          :tabs="menuTabs"
          :clickCallback="handleMenuTabCallback"
          :currentTab="currentTab"
          :layoutMode="true"
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
