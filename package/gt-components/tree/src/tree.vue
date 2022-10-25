<script setup>
import { ref } from 'vue';
import treeItem from './treeItem.vue';

const props = defineProps({
  data: {
    type: Array,
  },
});

const genTree = (collection, level = 1) => {
  return collection.map((item) => {
    return {
      ...item,
      level: level,
      collasped: false,
      children: (function () {
        return Array.isArray(item.children)
          ? genTree(item.children, level + 1)
          : [];
      })(),
    };
  });
};

const dataRef = ref(Array.isArray(props.data) ? genTree(props.data) : []);

defineExpose({
  data: dataRef,
});
</script>
<script>
export default {
  name: 'GTree',
};
</script>
<template>
  <div class="gt-tree-wrapper">
    <ul>
      <treeItem v-for="item in dataRef" :key="item.uuid" :treeData="item" :currentArea="currentArea" />
    </ul>
  </div>
</template>
