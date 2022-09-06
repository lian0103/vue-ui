<script setup>
import { computed, ref } from 'vue';
import { isBoolean } from '@vueuse/core';

const CheckboxEnum = {
  GREEN: 'box-green',
  WHITE: 'box-white',
};

const {
  name,
  formParentValue,
  disabled,
  modelValue,
  label,
  value,
  parentValue,
  handleChildClick,
  type,
  validResult,
  handleValChange,
  handleRulesValid,
} = defineProps({
  name: { default: null },
  formParentValue: { default: null },
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
  type: {
    type: String,
    default: 'GREEN',
  },
  validResult: {
    default: {},
  },
  handleValChange: {
    type: Function,
  },
  handleRulesValid: {
    type: Function,
  },
});

const errorMsg = computed(() => {
  return validResult[name]?.message;
});

const isChecked = isBoolean(formParentValue?.value)
  ? ref(formParentValue.value)
  :  parentValue
  ? computed(() => parentValue?.value?.includes(value))
  : ref(modelValue);

const emit = defineEmits(['update:modelValue']);

const classComputed = computed(() => {
  let arr = [
    'checkmark',
    CheckboxEnum[type.toUpperCase()]
      ? CheckboxEnum[type.toUpperCase()]
      : CheckboxEnum['GREEN'],
  ];
  if (isChecked.value) arr.push('checked');
  if (disabled) arr.push('disabled');
  return arr;
});

const onClick = () => {
  if (!disabled && handleChildClick) {
    handleChildClick(value);
  }
  if (!disabled && !handleChildClick) {
    let val = !isChecked.value;
    // console.log('val', val);
    isChecked.value = val;
    emit('update:modelValue', val);

    if (formParentValue && handleValChange) {
      // console.log(val, name);
      handleValChange(val, name);
    }
  }

};
</script>

<script>
export default {
  name: 'GCheckbox',
};
</script>

<template>
  <div @click.prevent="onClick" class="gt-checkbox">
    <input :checked="isChecked" type="checkbox" />
    <div :class="classComputed">
      <g-icon class="icon" name="check" size="md" v-show="isChecked" />
    </div>
    <span
      :class="disabled ? 'label-disabled' : ''"
      class="label select-none"
      v-if="label"
      >{{ label }}</span
    >
    <span  v-if="errorMsg" class="checkbox-error-msg">{{errorMsg}}</span>
  </div>
</template>
