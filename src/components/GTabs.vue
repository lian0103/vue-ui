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

<style lang="scss">
.gt-tabs-wrapper {
  width: 100%;
  .tabs {
    @apply flex justify-start items-center;
    height: 32px;
    @apply border-b border-solid border-color3;
    .tab {
      @apply cursor-pointer;
      height: 32px;
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      padding: 0 32px 7px 32px;
      @apply text-gray4 bg-gray3;
      &.current {
        @apply text-main bg-gray3 border-primaryDarker;
        border-bottom-width: 3px;
      }
    }
  }
  .content {
    min-height: 100px;
  }
}
</style>
