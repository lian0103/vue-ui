<script setup>
import GTitle from '../../title';
import GTabs from '../../tabs';
import { ref , getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();

const { headText, title, menuTabs } = defineProps({
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
});

const currentTab = computed(()=>{
  let path = instance.appContext.config.globalProperties?.$route.path;
  if(menuTabs && path){
    console.log('menuTabs',menuTabs)
    console.log('path',path)
    return menuTabs.filter(item=>item.path == path)[0].name;
  }
  return null;
});

const handleMenuTabCallback = (target) => {
  let { path } = target;
  if (path && instance.appContext.config.globalProperties.$router) {
    instance.appContext.config.globalProperties.$router.push(path);
  }
};

// console.log(instance.appContext.config.globalProperties.$route.path)
</script>
<script>
export default {
  name: 'GLayout',
};
</script>
<template>
  <div class="gt-wrapper">
    <div class="gt-sidebar">
      <div class="flex flex-col">
        <div class="gt-headline">
          {{ headText }}
        </div>
        <div class="gt-menu-box"><slot name="sidebar" /></div>
        <div class="gt-bottomLogo">
          <img src="../../../assets/images/gt-logo.png" alt="" />
          <img src="../../../assets/images/gt-logo-text.png" alt="" />
        </div>
      </div>
    </div>

    <div class="gt-header">
      <div class="w:1/3">
        <g-title :level="1">{{ title }}</g-title>
      </div>
      <slot name="header" />
    </div>
    <div class="gt-content">
      <g-tabs
        v-if="menuTabs && menuTabs.length > 0"
        :tabs="menuTabs"
        :clickCallback="handleMenuTabCallback"
        :currentTab="currentTab"
      />
      <slot name="content" />
    </div>
  </div>
</template>
