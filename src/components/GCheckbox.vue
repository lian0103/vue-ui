<script>
export default {
  name: 'gt-checkbox',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, ref } from 'vue';
import GIcons from './GIcons.vue';

const { disabled, modelValue, label, value, parentValue, handleChildClick } =
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
  ? computed(() => parentValue?.value?.includes(value))
  : ref(modelValue);

const emit = defineEmits(['update:modelValue']);
const onClick = () => {
  if (!disabled && handleChildClick) {
    handleChildClick(value);
  }
  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    // console.log('val', val);
    isChecked.value = val;
    emit('update:modelValue', val);
  }
};
</script>

<template>
  <div class="gt-checkbox" @click.prevent="onClick">
    <input type="checkbox" :checked="isChecked" />
    <div
      class="checkmark"
      :class="(isChecked ? 'checked' : '') + ' ' + (disabled ? 'disabled' : '')"
    >
      <g-icons v-show="isChecked" class="icon" name="check" />
    </div>
    <span
      class="label"
      :class="disabled ? 'label-disabled' : ''"
      v-if="label"
      >{{ label }}</span
    >
  </div>
</template>

<style lang="scss">
.gt-checkbox {
  min-width: 18px;
  height: 18px;
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
    width: 18px;
    height: 18px;
    border: 1.5px solid #32a03d;
    background: #eef5eb;
    @apply transition-all duration-300;
  }

  .checked {
    background: #32a03d;
    .icon {
      color: #fff;
    }
  }
  .disabled {
    border: 1.5px solid #aaaaaa !important;
    background-color: #ffffff !important;
    @apply cursor-not-allowed;
    .icon {
      color: #aaaaaa;
    }
  }
  .label {
    padding: 0 10px 0 20px;
    &.label-disabled {
      @apply cursor-not-allowed;
      color: #aaa;
    }
  }
}
</style>
