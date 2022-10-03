<script setup>
import { ref, getCurrentInstance } from 'vue';
const instance = getCurrentInstance();

const clickFn = (param) => {
  console.log('in', param);
};

const target = {
  group1: [{ name: 'tab1' }, { name: 'tab2' }],
  group2: [{ name: 'tab3' }, { name: 'tab4' }],
};

const tabs = ref(target.group1);
const tabIndex = ref(0);

const toggleGroup = () => {
  // console.log('instance.refs.demoTab',instance.refs.demoTab)
  if (tabIndex.value == 0) {
    tabs.value = target.group2;
    tabIndex.value = 1;
    instance.refs.demoTab.current = 'tab3';
  } else {
    tabs.value = target.group1;
    tabIndex.value = 0;
    instance.refs.demoTab.current = 'tab1';
  }
};
</script>

<template>
  <g-button @click="toggleGroup" :width="100">tab資料改動</g-button>

  <g-tabs
    ref="demoTab"
    :tabs="tabs"
    :clickCallback="clickFn"
  >
    <template v-slot:tab1="context">
      <g-title :level="1" class="mb-3">hello , tab1 </g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
      assumenda similique possimus ipsam consequatur animi ipsa fugit quia.
      Accusantium.
    </template>
    <template v-slot:tab2="context">
      <g-title :level="1" class="mb-3">hello , tab2</g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias
      earum exercitationem inventore dignissimos velit dolores maiores quod
      accusantium, reiciendis cupiditate modi quia rem at ut laborum vero
      doloribus rerum?
    </template>
  </g-tabs>
</template>
