<script setup>
import {
  ref,
  useSlots,
  getCurrentInstance,
  computed,
  onMounted,
  watch,
} from 'vue';
import { useElementBounding } from '@vueuse/core';

const instance = getCurrentInstance();
const Router = instance.appContext.config.globalProperties?.$router;

const props = defineProps({
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
  collapsed: {
    type: Boolean,
  },
});

const slots = useSlots();
const slotTabs = Object.keys(slots);
const current = ref(props.currentTab || slotTabs[0]);
const collapsed = ref(props.collapsedFromParent);
const parentWidth = ref(null);

defineExpose({
  collapsed,
  current,
});

const handleTabChange = (name) => {
  current.value = name;
  if (props.clickCallback) {
    let toTab = props.tabs.filter((item) => item.name == name)[0] || {};
    props.clickCallback(toTab);
  }
};

const tabRef = ref(null);
const { width } = useElementBounding(tabRef);

const widthTabs = ref(width.value);

const isMouseIn = ref(false);

const classComputed = computed(() => {
  // console.log('widthTabs.value', widthTabs.value);
  // console.log('parentWidth.value', parentWidth.value);

  let arr = [];
  if (isMouseIn.value) {
    arr.push('mouse-in');
  }
  if (props.layoutMode) {
    arr.push('layoutMode');
  }

  if (parentWidth.value && parseInt(widthTabs.value) > parentWidth.value) {
    arr.push('overTabsWrapper');
  }
  return arr;
});

const styleComputed = computed(() => {
  return props.layoutMode
    ? {
        'max-width': 'calc(100% - 20px)',
      }
    : {};
});

const calcTargetWidth = () => {
  let target = document.getElementById('gtContentRef');
  let target2 = document.getElementById(`${props.name}-tabRef`);
  if (props.name == 'layoutTab' && target && target2) {
    parentWidth.value = target.offsetWidth;
    widthTabs.value = target2.offsetWidth;
  }
};

instance.appContext.config.globalProperties['handleCurrent' + props.name] = (
  tabName
) => {
  current.value = tabName;
};
instance.appContext.config.globalProperties['handleTabs' + props.name] = (
  newTabs
) => {
  props.tabs.value = newTabs;
  parentWidth.value = null;
};

watch(
  () => current.value,
  () => {
    // console.log('in~~!@##');
    setTimeout(() => {
      calcTargetWidth();
    }, 200);
  }
);

watch(
  () => Router.currentRoute.value.path,
  (val) => {
    // console.log('in~~!@##');
    setTimeout(() => {
      calcTargetWidth();
    }, 1000);
  }
);

onMounted(() => {
  setTimeout(() => {
    calcTargetWidth();
  }, 200);
  window.addEventListener('resize', calcTargetWidth);
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
    :style="styleComputed"
  >
    <div class="tabs" :id="name ? `${name}-tabRef` : ''" ref="tabRef">
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
