<script setup>
import GIcons from './GIcons.vue';
import GTitle from './GTitle.vue';
</script>

<template>
  <div class="gt-wrapper">
    <div class="gt-sidebar">
      <div class="flex flex-col">
        <div class="gt-headline">
          <g-icons name="down" class="w-8" />Headline
        </div>
        <div class="gt-menu"><slot name="sidebar" /></div>
        <div class="gt-bottomLogo">
          <img src="../assets/images/gt-logo.png" alt="" />
          <img src="../assets/images/gt-logo-text.png" alt="" />
        </div>
      </div>
    </div>

    <div class="gt-header">
      <div class="w:1/3"><g-title :level="1">headtitle</g-title></div>
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
  background: #edf2f7;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 100vh;
  border: 0px solid #edf2f7;
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
      height: calc(100vh - 150px);
      overflow-y: scroll;
      .el-menu{
        height: 100%
      }
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
