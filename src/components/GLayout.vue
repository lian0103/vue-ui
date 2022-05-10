<script setup>
import GIcons from './GIcons.vue';
import GTitle from './GTitle.vue';

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
        <div class="gt-menu"><slot name="sidebar" /></div>
        <div class="gt-bottomLogo">
          <img src="../assets/images/gt-logo.png" alt="" />
          <img src="../assets/images/gt-logo-text.png" alt="" />
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
/* width */
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #D9D9D9;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 5px;
  border: 0px solid #D9D9D9;
}

.gt-wrapper {
  display: grid;
  height: 100vh;
  overflow: hidden;
  min-width: 1280px;
  grid-template-columns: 300px 1fr;
  grid-auto-rows: minmax(80px, auto);
  background-color: #fbfbf9;
  .gt-sidebar {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 3;
    .gt-headline {
      @apply text-primary font-bold text-lg leading-6 flex justify-center items-center w-full;
      height: 80px;
    }
    .gt-menu {
      flex-grow: 2;
      width: 85%;
      margin: auto;
      height: calc(100vh - 150px);
      overflow-y: scroll;
    }

    .gt-bottomLogo {
      @apply flex justify-center items-center;
      height: 60px;
    }
  }
  .gt-header {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    @apply flex justify-between items-center pl-14;
  }
  .gt-content {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    height: calc(100vh - 80px);
    overflow-y: scroll;
  }
}
</style>
