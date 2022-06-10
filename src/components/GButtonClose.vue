<script setup>
import GIcons from './GIcons.vue';
import GButton from './GButton.vue';
</script>

<template>
  <g-button round noBorder type="white" class="gt-button-close"
    ><g-icons name="x" size="md"
  /></g-button>
</template>

<style lang="scss">
.gt-button-close {
  padding: 6px !important;
  &.gt-btn-white {
    // @apply text-gray2;
    color:#dbe9d8 !important;
  }
  &:hover {
    // @apply text-gray1;
    color:#55585E !important;
  }
}
</style>
