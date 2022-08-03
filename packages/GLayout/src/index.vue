<script setup>
import GIcons from 'packages/GIcons/src/index.vue';
import GTitle from 'packages/GTitle/src/index.vue';

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

<style lang="scss">
.gt-wrapper {
  @apply grid h-screen overflow-hidden bg-gray3;
  min-width: 1280px;
  grid-template-columns: 300px 1fr;
  grid-auto-rows: minmax(80px, auto);
  .gt-sidebar {
    @apply col-start-1 col-end-2 row-start-1 row-end-3;

    .gt-headline {
      @apply text-main font-bold text-lg leading-6 flex justify-center items-center w-full;
      height: 80px;
    }
    .gt-menu-box {
      padding: 0 20px 0 50px;
      flex-grow: 2;
      @apply w-full mx-auto overflow-y-scroll relative;
      height: calc(100vh - 150px);
      &::-webkit-scrollbar {
        width: 0px !important;
      }
      &::after {
        content: '';
        width: 1px;
        height: calc(100vh - 150px);
        @apply block bg-gray3 absolute top-0 right-0;
      }
    }

    .gt-bottomLogo {
      @apply flex justify-center items-center;
      height: 60px;
    }
  }
  .gt-header {
    @apply flex justify-between items-center pl-14;
    @apply col-start-2 col-end-3 row-start-1 row-end-2;
  }
  .gt-content {
    @apply col-start-2 col-end-3 row-start-2 row-end-3 overflow-y-scroll;
    height: calc(100vh - 80px);
    &::-webkit-scrollbar {
      width: 5px;
      background-color: #d9d9d9;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #aaaaaa;
      &:hover {
        background-color: #666666;
      }
    }
  }
}
</style>
