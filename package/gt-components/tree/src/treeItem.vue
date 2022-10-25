<script setup>
import { any } from 'async';
import { watch, ref } from 'vue';

const props = defineProps({
  treeData: {
    type: Object,
    require: true,
  },
});
const componentKey = ref(0);

const handleDownIcon = () => {
  let val = !props.treeData.collasped;
  props.treeData.collasped = val;
};

const checkAll = (arr, value, attr) => {
  // console.log(arr, value);
  arr.forEach((item) => {
    item[attr] = value;
    if (item.children.length > 0) {
      checkAll(item.children, value, attr);
    }
  });
};

const handleClick = () => {
  if (props.treeData.clickCallBack) {
    props.treeData.clickCallBack();
  }
};

const handleItemClick = () => {
  let val = !props.treeData.isCurrentArea;
  props.treeData['isCurrentArea'] = val;
  if (props.treeData.children.length > 0) {
    checkAll(props.treeData.children, val, 'isCurrentArea');
  }
};

watch(
  () => props.treeData.value,
  (val) => {
    // console.log('in treeData.value', val);
    if (props.treeData.children.length > 0) {
      checkAll(props.treeData.children, val, 'value');
      componentKey.value = componentKey.value + 1;
    }
  }
);
</script>

<template>
  <li
    class="gt-tree-item"
    :class="treeData.isCurrentArea ? 'current' : ''"
    :key="componentKey"
    @click.stop="handleItemClick"
  >
    <div class="item-row">
      <g-icon
        v-if="treeData.children.length > 0"
        :style="{ transform: `rotate(${treeData.collasped ? '-90' : '0'}deg)` }"
        name="down"
        @click.stop="
          () => {
            handleDownIcon(treeData);
          }
        "
      />
      <g-checkbox
        v-model="treeData.value"
        :label="treeData.label"
        :disabled="treeData.disabled"
        @click.stop="
          () => {
            handleClick(treeData);
          }
        "
      />
    </div>

    <ul
      v-if="treeData.children.length > 0"
      :class="treeData?.collasped ? 'collasped' : 'active'"
    >
      <tree-item
        v-for="item in treeData.children"
        :style="{ 'padding-left': item.children.length > 0 ? '21px' : '45px' }"
        :treeData="item"
      />
    </ul>
  </li>
</template>
