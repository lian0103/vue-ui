<script setup>
import { ref, getCurrentInstance, computed, watch } from "vue";
import { useElementBounding } from "@vueuse/core";

const instance = getCurrentInstance();

const props = defineProps({
  headText: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
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

const emit = defineEmits(["collapsed"]);
const isCollapsed = ref(props.collapsed);

const Router = instance.appContext.config.globalProperties?.$router;

const currentTab = computed(() => {
  let { path } = Router.currentRoute.value;
  if (props.menuTabs && path) {
    return props.menuTabs.filter((item) => item.path == path)[0]?.name;
  }
  return null;
});

watch(
  () => Router.currentRoute.value.path,
  (val) => {
    if (
      props.menuTabs &&
      val &&
      props.onlyOneLevel &&
      instance.refs.layoutTabs
    ) {
      let name = props.menuTabs.filter((item) => item.path == val)[0]?.name;
      if (name && instance.refs.layoutTabs) {
        instance.refs.layoutTabs.current = name;
      }
    }
  }
);

watch(
  () => props.menuTabs,
  (menuArr) => {
    // console.log(menuArr);
    if (
      instance.refs.layoutTabs &&
      menuArr &&
      menuArr.find((item) => item.path == Router.currentRoute.value.path)
    ) {
      let target = menuArr.find(
        (item) => item.path == Router.currentRoute.value.path
      );
      instance.refs.layoutTabs.current = target.name;
    }
  }
);

const handleMenuTabCallback = (target = {}) => {
  let { path, query } = target;
  if (path && Router) {

    Router.push({
      path: path, 
      query: query
    });
  } else {
    console.log("target is empty");
  }
};

const handleCollapsed = () => {
  let val = !isCollapsed.value;
  isCollapsed.value = val;
  emit("collapsed", val);

  if (instance.refs.layoutTabs) {
    instance.refs.layoutTabs.collapsed = val;
  }
};
// console.log(instance.appContext.config.globalProperties.$route.path)
</script>
<script>
export default {
  name: "GLayout",
};
</script>
<template>
  <div class="gt-wrapper" :class="isCollapsed ? 'collapsed' : ''">
    <div class="gt-headline-header">
      <div
        class="gt-headline"
        :style="{
          width: isCollapsed ? '100px' : '290px',
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

    <div class="gt-sidebar-content" id="gtSidebarContentRef">
      <div class="gt-sidebar" :class="onlyOneLevel ? 'onlyOneLevel' : ''">
        <div class="gt-menu-box">
          <slot name="sidebar" />
        </div>

        <div class="gt-bottomLogo">
          <img
            style="width: 28.58px; height: 28.09px"
            src="../../../assets/images/greattree-icon.svg"
            alt=""
          />
          <img
            style="width: 80px; height: 18.41px"
            v-if="!isCollapsed"
            src="../../../assets/images/greattree-text.svg"
            alt=""
          />
          <!-- <img src="../../../assets/svg/gt-icon-with-text.svg"/> -->
        </div>
      </div>

      <div
        id="gtContentRef"
        class="gt-content-wrapper"
        :style="{
          width: isCollapsed ? 'calc(100% - 100px)' : 'calc(100% - 280px)',
        }"
      >
        <g-tabs
          ref="layoutTabs"
          name="layoutTab"
          v-if="onlyOneLevel && menuTabs && menuTabs.length > 0"
          class="gt-route-tabs"
          :tabs="menuTabs"
          :clickCallback="handleMenuTabCallback"
          :currentTab="currentTab"
          :layoutMode="true"
          :collapsed="isCollapsed"
        />

        <div
          class="gt-content"
          :style="{
            height:
            onlyOneLevel && menuTabs && menuTabs.length > 0
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
