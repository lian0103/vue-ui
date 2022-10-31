<script setup>
import { ref , provide } from 'vue';
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

const checkAll = (arr, value, attr) => {
  // console.log(arr, value);
  arr.forEach((item) => {
    item[attr] = value;
    if (item.children.length > 0) {
      checkAll(item.children, value, attr);
    }
  });
};

const resetCurrentArea = () => {
  checkAll(dataRef.value, false, 'isCurrentArea');
};

provide('resetCurrentArea',resetCurrentArea)
provide('checkAll',checkAll)

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
      <treeItem
        v-for="(item, idx) in dataRef"
        :key="`key-${idx}`"
        :treeData="item"
      />
    </ul>
  </div>
</template>
