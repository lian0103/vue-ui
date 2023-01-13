<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type:Number,
    default: 0
  },
  max: {
    type: Number,
    default: null,
  },
  min: {
    type: Number,
    default: 0,
  },
  unit: {
    type: Number,
    default: 1,
  },
});

const minusClass = computed(() => {
  if (props.min) {
    return props.modelValue <= props.min ? 'disabled' : '';
  }
  return props.modelValue < 1 ? 'disabled' : '';
});

const plusClass = computed(() => {
  if (props.max) {
    return props.modelValue >= props.max ? 'disabled' : '';
  }
  return '';
});

const emit = defineEmits(['update:modelValue']);

const handleNumber = (type) => {
  let val = props.modelValue;
  switch (type) {
    case 'minus': {
      console.log(minusClass.value);
      if (minusClass.value !== 'disabled') {
        emit('update:modelValue', val - props.unit);
      }
      break;
    }
    case 'plus': {
      if (plusClass.value !== 'disabled') {
        emit('update:modelValue', val + props.unit);
      }
      break;
    }
  }
};
</script>
<script>
export default {
  name: 'GInputNumber',
};
</script>
<template>
  <div class="gt-input-number">
    <div
      class="btn minus"
      :class="minusClass"
      @click="
        () => {
          handleNumber('minus');
        }
      "
    >
      <g-icon classes="fas fa-minus" />
    </div>

    <div class="number">{{ modelValue }}</div>

    <div
      class="btn plus"
      :class="plusClass"
      @click="
        () => {
          handleNumber('plus');
        }
      "
    >
      <g-icon classes="fas fa-plus" />
    </div>
  </div>
</template>
