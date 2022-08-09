<script setup>
import GTitle from '../../title';

const { headText, title } = defineProps({
  headText: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
});
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
          <img src="packages/assets/images/gt-logo.png" alt="" />
          <img src="packages/assets/images/gt-logo-text.png" alt="" />
        </div>
      </div>
    </div>

    <div class="gt-header">
      <div class="w:1/3">
        <g-title :level="1">{{ title }}</g-title>
      </div>
      <slot name="header" />
    </div>
    <div class="gt-content"><slot name="content" /></div>
  </div>
</template>
