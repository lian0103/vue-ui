<script>
export default {
  name: "GFilterOption",
};
</script>
<script setup>
import { ref } from 'vue';

const { modelValue } = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  optionName: {
    type: String,
    default: 'option',
  },
});
const emit = defineEmits(['update:modelValue']);

const isActive = ref(modelValue);

const handleClickChange = () => {
  let val = !isActive.value;
  isActive.value = val;

  emit('update:modelValue', val);
};
</script>

<template>
  <div
    class="gt-filter-option"
    :class="isActive ? 'active' : ''"
    @click="handleClickChange"
  >
    {{ optionName }}
  </div>
</template>

