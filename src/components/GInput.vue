<script>
export default {
  name: 'gt-input',
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue';
import GIcons from './GIcons.vue';

const TYPES = ['text', 'number', 'password'];
const placeholderDefaultMap = {
  text: '輸入文字內容',
  number: '輸入數字內容',
  password: '輸入密碼',
};

const {
  name,
  disabled,
  modelValue,
  label,
  value,
  type,
  green,
  clearable,
  parentValue,
  parentvalue,
  placeholder,
  validResult,
  handleValChange,
  handleRulesValid,
  size,
} = defineProps({
  name: {
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  modelValue: {},
  label: {
    default: null,
  },
  value: {
    default: null,
  },
  type: {
    default: 'text',
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  green: {
    type: Boolean,
    default: false,
  },
  parentValue: {
    default: null,
  },
  parentvalue: {
    default: null,
  },
  placeholder: {
    default: null,
  },
  validResult: {
    default: {},
  },

  handleValChange: {
    default: () => {},
  },
  handleRulesValid: {
    default: async () => {},
  },
  size: {
    type: String,
    default: 'sm',
  },
});

const emit = defineEmits(['update:modelValue']);

const errorMsg = computed(() => {
  return validResult[name]?.message;
});

const classComputed = computed(() => {
  let classStr = [];
  if (green) {
    classStr.push('gt-input-green');
  }
  if (validResult[name]?.message) {
    classStr.push('gt-input-error');
  }
  if (size === 'sm') {
    classStr.push('gt-input-sm');
  }

  return classStr;
});

const inputVal = ref(modelValue || parentValue?.value || '');

const handleInput = (evt) => {
  if (parentValue) {
    // console.log('~~~', inputVal.value);
    handleValChange(inputVal.value, name);
  } else {
    emit('update:modelValue', inputVal.value);
  }
};

const handleBlur = async () => {
  //   console.log('in handleBlur~~', inputVal.value);
  if (handleRulesValid && name) {
    handleRulesValid(inputVal.value, name, 'blur');
  }
};

const handleClear = () => {
  inputVal.value = '';
  handleValChange('', name);
  handleRulesValid(inputVal.value, name, 'blur');
};
</script>

<template>
  <div class="gt-input-wrapper">
    <div class="gt-input-label" v-if="label">{{ label }}</div>
    <div class="gt-relative">
      <input
        class="gt-input"
        :class="classComputed"
        :type="TYPES.includes(type) ? type : 'text'"
        v-model="inputVal"
        :placeholder="placeholder || placeholderDefaultMap[type]"
        @change="handleInput"
        @blur="handleBlur"
      />
      <g-icons
        class="clear-icon"
        v-if="clearable"
        name="x"
        @click.stop="handleClear"
      />
      <div v-if="errorMsg" class="gt-input-error-msg">
        {{ errorMsg }}
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.gt-input-wrapper {
  @apply relative mb-6;
  @apply flex justify-start items-center;
  .gt-input-label {
    height: 36px;
    @apply text-base leading-9 px-3;
  }
  .gt-input {
    @apply w-full text-base text-gray4 bg-color2 rounded-lg;
    @apply outline outline-1 outline-gray2;
    max-width: 240px;
    height: 43px;
    padding: 10px 34px 10px 12px;

    &.gt-input-green {
      @apply bg-color4;
    }

    &:focus,
    &:hover {
      box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.25);
    }

    &.gt-input-error {
      @apply outline-danger;
    }

    &.gt-input-sm {
      height: 36px;
      padding: 6.5px 34px 6.5px 12px;
    }
  }

  .gt-input-error-msg {
    @apply absolute left-0.5 -bottom-5 text-danger;
    letter-spacing: 0.6px;
  }

  .gt-input:focus ~ .clear-icon,
  &:hover .gt-input ~ .clear-icon {
    @apply opacity-100;
  }

  .clear-icon {
    width: 22px;
    @apply text-gray0 opacity-0;
    @apply absolute right-0 cursor-pointer transition-all duration-300;
    top: 7px;
    right: 10px;
  }
}
</style>
