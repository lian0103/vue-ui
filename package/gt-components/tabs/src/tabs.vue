<script setup>
import { ref, useSlots } from 'vue';

const { tabs } = defineProps({
  tabs: {
    type: Array,
    default: [{ name: 'tab1' }, { name: 'tab2' }],
  },
});
const slots = useSlots();
const slotTabs = Object.keys(slots);

const current = ref(tabs[0].name);

const handleTabChange = (name) => {
  current.value = name;
};
</script>
<script>
export default {
  name: 'GTabs',
};
</script>
<template>
  <div class="gt-tabs-wrapper">
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
    <div class="content">
      <template v-if="slotTabs.includes(current)">
        <slot :name="current" />
      </template>
      <template v-else> //無對應slot </template>
    </div>
  </div>
</template>
