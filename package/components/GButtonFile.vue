<script setup>
import GIcon from '../gt-components/icon/index' ;
import GButton from '../gt-components/button/index';

const { name } = defineProps({
  name: {
    type: String,
    default: 'file',
  },
});
</script>

<template>
  <g-button round noBorder type="black" class="gt-button-file">
    <g-icon :name="name" size="md" />
  </g-button>
</template>

<style lang="scss">
.gt-button-file {
  padding: 6px !important;
  &.gt-btn-black {
    // @apply bg-color2;
    background-color: #f0f0f0 !important;
  }
  &:hover {
    // @apply bg-color3;
    background-color: #d9d9d9 !important;
  }
}
</style>
