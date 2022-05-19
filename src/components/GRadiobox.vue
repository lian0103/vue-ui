<script setup>
import { computed, ref } from 'vue';

const { disabled, modelValue } = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
});
const isChecked = ref(modelValue);
const emit = defineEmits(['update:modelValue']);
const onClick = () => {
  if (!disabled) {
    isChecked.value = !isChecked.value;
    //   console.log('!modelValue', !isChecked.value);
    emit('update:modelValue', !isChecked.value);
  }
};
</script>

<template>
  <div class="gt-radiobox" @click.prevent="onClick">
    <input type="radio" :checked="modelValue" />
    <div
      class="checkmark"
      :class="
        (modelValue ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '')
      "
    >
      <div v-show="modelValue" class="circle"></div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-radiobox {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  @apply relative block;
  cursor: pointer;
  input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-width: 1.5px;
    border-style: solid;
    border-color: #32a03d;
    background: #eef5eb;
    @apply transition-all duration-300;
  }

  .checked {
    @apply flex justify-center items-center;
    .circle {
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: #32a03d;
    }
  }
  .disabled {
    border: 1.5px solid #aaaaaa !important;
    background-color: #ffffff !important;
    @apply cursor-not-allowed;
    .circle {
      width: 50%;
      height: 50%;
      border-radius: 50%;
      background: #aaa;
    }
  }
}
</style>
