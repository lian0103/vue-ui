<script setup>
import { ref, useSlots, getCurrentInstance, computed, onMounted } from 'vue';
import { useElementBounding } from '@vueuse/core';

const instance = getCurrentInstance();

const {
  name,
  tabs: tabsFromParent,
  clickCallback,
  currentTab,
  layoutMode,
  parentWidth,
  collapsed:collapsedFromParent
} = defineProps({
  name: {
    type: String,
  },
  tabs: {
    type: Array,
    default: [{ name: 'tab1' }, { name: 'tab2' }],
  },
  currentTab: {
    type: String,
    default: null,
  },
  clickCallback: {
    type: Function,
  },
  layoutMode: {
    type: Boolean,
    default: false,
  },
  parentWidth: {
    type: Number,
  },
  collapsed:{
    type: Boolean,
  }
});
const slots = useSlots();
const slotTabs = Object.keys(slots);

const tabs = ref(tabsFromParent);
const current = ref(currentTab);
const collapsed = ref(collapsedFromParent);

defineExpose({
  collapsed
});

instance.appContext.config.globalProperties['handleCurrent' + name] = (
  tabName
) => {
  current.value = tabName;
};
instance.appContext.config.globalProperties['handleTabs' + name] = (
  newTabs
) => {
  tabs.value = newTabs;
};

const handleTabChange = (name) => {
  current.value = name;
  if (clickCallback) {
    let toTab = tabs.value.filter((item) => item.name == name)[0] || {};
    clickCallback(toTab);
  }
};

const tabRef = ref(null);
const { width: widthTabs } = useElementBounding(tabRef);

const isMouseIn = ref(false);

const classComputed = computed(() => {
  let arr = [];
  if (isMouseIn.value) {
    arr.push('mouse-in');
  }
  if (layoutMode) {
    arr.push('layoutMode');
  }
  if (parseInt(widthTabs.value) > 1440) {
    arr.push('overTabsWrapper');
  }
  return arr;
});
</script>
<script>
export default {
  name: 'GTabs',
};
</script>
<template>
  <div
    class="gt-tabs-wrapper"
    :class="classComputed"
    @mouseenter="isMouseIn = true"
    @mouseleave="isMouseIn = false"
    :style="parentWidth ? { 'max-width': `${collapsed ? parentWidth - 300 : parentWidth - 400 }px` } : {}"
  >
    <div class="tabs" ref="tabRef">
      <div
        class="tab"
        v-for="tab in tabs"
        :key="tab.name"
        :class="current == tab.name ? 'current' : ''"
        @click="
          () => {
            handleTabChange(tab.name);
          }
        "
      >
        {{ tab.name }}
      </div>
    </div>
    <div :class="slotTabs.includes(current) ? 'content' : ''">
      <template v-if="slotTabs.includes(current)">
        <slot :name="current" />
      </template>
      <template v-else> </template>
    </div>
  </div>
</template>
