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

<style lang="scss">
.gt-filter-option {
  @apply bg-white border border-solid border-gray0 text-gray1 cursor-pointer select-none;
  padding: 8px 16px;
  letter-spacing: 0.7px;
  border-radius: 24px;
  margin: 0 5px;
  &.active {
    @apply bg-color1 border-main text-main;
  }
}
</style>
