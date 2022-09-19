<script setup>
import { ref, useSlots, getCurrentInstance, computed } from 'vue';

const instance = getCurrentInstance();

const {
  name,
  tabs: tabsFromParent,
  clickCallback,
  currentTab,
  layoutMode,
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
});
const slots = useSlots();
const slotTabs = Object.keys(slots);

const tabs = ref(tabsFromParent);
const current = ref(currentTab);

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

const isMouseIn = ref(false);

const classComputed = computed(() => {
  let arr = [];
  if (isMouseIn.value) {
    arr.push('mouse-in');
  }
  if (layoutMode) {
    arr.push('layoutMode');
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
  >
    <div class="tabs">
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
