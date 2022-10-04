<script>
export default {
  name: 'GFilterOption',
};
</script>
<script setup>
import { ref } from 'vue';

const props = defineProps({
  name: { default: null },
  modelValue: {
    type: Boolean,
    default: false,
  },
  label:{
    type: String,
    default: null,
  },
  optionName: {
    type: String,
    default: 'option',
  },
  parentValue: {
    type: Object,
    default: null,
  },
  handleChildClick: {
    type: Function,
    default: null,
  },
});
const emit = defineEmits(['update:modelValue']);

const isActive = props.parentValue
  ? ref(props.parentValue)
  : ref(props.modelValue);

const handleClickChange = () => {
  let val = !isActive.value;

  if (!props.handleChildClick) {
    isActive.value = val;
    emit('update:modelValue', val);
  }

  if (props.handleChildClick) {
    props.handleChildClick(props.name, val);
  }
};
</script>

<template>
  <div
    class="gt-filter-option"
    :class="isActive ? 'active' : ''"
    @click="handleClickChange"
  >
    {{ label || optionName }}
  </div>
</template>
