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
