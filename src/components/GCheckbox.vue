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

const CheckboxEnum = {
  GREEN: 'box-green',
  WHITE: 'box-white',
};

const {
  disabled,
  modelValue,
  label,
  value,
  parentValue,
  handleChildClick,
  type,
} = defineProps({
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
});

const isChecked = parentValue
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
  }
};
</script>

<template>
  <div class="gt-checkbox" @click.prevent="onClick">
    <input type="checkbox" :checked="isChecked" />
    <div :class="classComputed">
      <g-icons v-show="isChecked" class="icon" name="check" size="sm" />
    </div>
    <span
      class="label select-none"
      :class="disabled ? 'label-disabled' : ''"
      v-if="label"
      >{{ label }}</span
    >
  </div>
</template>

<style lang="scss">
.box-green {
  --bg-color: #eef5eb;
  --border-color: #32a03d;
}

.box-white {
  --bg-color: #fff;
  --border-color: #aaa;
}

.gt-checkbox {
  min-width: 17px;
  height: 17px;
  @apply relative block cursor-pointer;
  input {
    @apply absolute w-0 h-0 opacity-0 cursor-pointer;
  }

  .checkmark {
    width: 17px;
    height: 17px;
    @apply absolute left-0 rounded-sm;
    top: 2px;
    border-width: 1.5px;
    @apply border-solid;
    border-color: var(--border-color);
    background-color: var(--bg-color);
    @apply transition-all duration-300;
  }

  .checked {
    @apply bg-main;
    .icon {
      @apply text-white;
    }
  }
  .disabled {
    border-width: 1.5px;
    @apply border border-solid border-gray0;
    @apply bg-white;
    @apply cursor-not-allowed;
    .icon {
      @apply text-color1;
    }
  }
  .label {
    padding: 0 10px 0 30px;
    &.label-disabled {
      @apply cursor-not-allowed text-gray0;
    }
  }
}
</style>
