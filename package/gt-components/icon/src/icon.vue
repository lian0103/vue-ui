<script>
export default {
  name: 'GIcon',
};
</script>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  name: {
    type: String,
    require: true,
  },
  classes: {
    type: String,
  },
  size: {
    type: String,
    default: 'md',
  },
});
const componentKey = ref(0);

const classesComputed = computed(() => {
  let arr = ['gt-icon'];

  if (props.name) {
    arr.push(`gt-icon-${props.name}`);
  }

  if (props.size) {
    arr.push(`gt-icon-${props.size}`);
  }

  if (props.classes) {
    arr.push(props.classes);
  }
  return arr.length == 1 ? [] : arr;
});

watch(
  () => props.classes,
  (val) => {
    componentKey.value = componentKey.value + 1;
  }
);
</script>

<template>
  <div class="gt-icon-wrapper" :key="componentKey"> <i :class="classesComputed" /></div>
</template>
