<script setup>
import { ref, getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const treeRef = ref(null);

const demoData = ref([
  {
    label: 'tree1',
    value: false,
    children: [
      {
        label: '1-1',
        value: false,
        clickCallBack: () => {
          alert('label1-1 click');
        },
      },
      {
        label: '1-2',
        value: true,
        children: [
          {
            label: '1-2-1',
            value: false,
            children: [{ label: 'hello!', value: false , disabled:true },{ label: 'world', value: false }],
          },
        ],
      },
    ],
  },
  {
    label: 'tree2',
    value: false,
    children: [
      {
        label: '2-1',
        value: false,
        children: [
          { label: '2-1-1', value: false },
          { label: '2-1-2', value: true },
        ],
      },
      { label: '2-2', value: true },
    ],
  },
  {
    label: 'tree3',
    value: false,
  },
]);

const getData = () => {
  // console.log('in click');
  // console.log(instance.refs.treeRef.data);
  demoData.value = instance.refs.treeRef.data;
};
</script>
<template>
  <g-tree ref="treeRef" :data="demoData" @click.stop="getData" />

  demoData: <br />
  {{ demoData }}
</template>
