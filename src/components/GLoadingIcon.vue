<script setup>
import GIcons from './GIcons.vue';
</script>

<template>
  <div class="gt-loading-icon">
    <g-icons name="loading" />
  </div>
</template>

<style lang="scss">
.gt-loading-icon {
  width: 32px;
  height: 32px;
  animation: ani_rotate 1s linear infinite;
  svg {
    width: 32px !important;
    height: 32px !important;
  }
}

@keyframes ani_rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
