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
  padding: 6px;
  &.gt-btn-white {
    @apply text-gray2;
  }
  &:hover {
    @apply text-gray1;
  }
}
</style>
