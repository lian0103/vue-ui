<script>
export default {
  name: 'gt-radiobox',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, ref } from 'vue';

const { disabled, modelValue, value, parentValue, handleChildClick } =
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      default: null,
    },
    value: {
      default: null,
    },
    parentValue: {
      default: null,
    },
    handleChildClick: {
      default: null,
    },
  });
const isChecked = parentValue
  ? computed(() => {
      return value === parentValue.value;
    })
  : ref(modelValue);
const emit = defineEmits(['update:modelValue']);

const onClick = () => {
  if (handleChildClick && value) {
    handleChildClick(value);
  }

  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    isChecked.value = val;
    emit('update:modelValue', val);
  }
};
</script>

<template>
  <div class="gt-radiobox" @click.prevent="onClick">
    <input type="radio" :checked="isChecked" />
    <div
      class="checkmark"
      :class="(isChecked ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '')"
    >
      <div v-show="isChecked" class="circle"></div>
    </div>
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<style lang="scss">
.gt-radiobox {
  padding: 0 10px 0 22px;
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
  span {
    user-select: none;
  }
}
</style>
