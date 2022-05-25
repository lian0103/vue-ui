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
  placeholder,
  validResult,
  handleValChange,
  handleRulesValid,
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
};
</script>

<template>
  <div class="gt-input-wrapper">
    <div class="gt-input-label" v-if="label">{{ label }}</div>
    <div class="relative">
      <input
        class="gt-input"
        :class="classComputed"
        :type="TYPES.includes(type) ? type : 'text'"
        v-model="inputVal"
        :placeholder="placeholderDefaultMap[type]"
        @change="handleInput"
        @blur="handleBlur"
      />
      <g-icons
        class="clear-icon"
        v-if="clearable"
        name="x"
        @click.prevent="handleClear"
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
    font-size: 16px;
    padding: 0 12px;
    line-height: 2.4;
  }
  .gt-input {
    width: 100%;
    max-width: 240px;
    height: 36px;
    padding: 10px 22px 10px 20px;
    font-size: 16px;
    color: #303236;
    background: #f0f0f0;
    outline: #d9d9d9 1px solid;
    border-radius: 8px;

    &.gt-input-green {
      background: #f1f9f3;
      &:focus {
        outline: #dbe9d8 1px solid;
        box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
      }
    }

    &.gt-input-error {
      outline: #fc806f 1px solid !important;
    }
  }

  .gt-input-error-msg {
    @apply absolute left-0.5 -bottom-5;
    color: #fc806f;
    letter-spacing: 0.6px;
  }

  .gt-input:focus ~ .clear-icon {
    opacity: 1;
    z-index: 1;
  }

  .clear-icon {
    width: 22px;
    color: #aaa;
    opacity: 0;
    z-index: -1;
    @apply absolute cursor-pointer transition-all duration-300;
    right: 0;
    top: 7px;
  }
}
</style>
