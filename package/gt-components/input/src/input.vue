<script setup>
import { computed, onMounted, ref, getCurrentInstance, watch } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const inputUuid = uuidv4();
const instance = getCurrentInstance();
const TYPES = ['text', 'number', 'password', 'tex-select'];
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
  width,
  value,
  type,
  green,
  clearable,
  parentValue,
  placeholder,
  validResult,
  handleValChange,
  handleRulesValid,
  size,
  icon,
  iconPosition,
  searchSelectMode,
  selectOptions,
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
    type: String,
    default: null,
  },
  width: {
    type: Number,
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
    type: String,
    default: null,
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
  size: {
    type: String,
    default: 'sm',
  },
  blur: {
    type: Function,
  },
  focus: {
    type: Function,
  },
  icon: {
    type: String,
  },
  iconPosition: {
    type: String,
    default: 'right',
  },
  searchSelectMode: {
    type: Boolean,
    default: false,
  },
  selectOptions: {
    type: Array,
  },
});

const isFocused = ref(false);
const inputVal = ref(modelValue || parentValue?.value || '');

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'keyup']);

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
  if (icon) {
    classStr.push(`icon-${iconPosition}`);
  }

  return classStr;
});

const selectModeClassComputed = computed(() => {
  let arr = [];

  arr.push(isFocused.value ? 'tp-aniIn' : 'tp-aniOut');

  return arr;
});

const selectModeStyleComputed = computed(() => {
  return {
    width: width ? width + 'px' : '260px',
    top: size === 'sm' ? '40px' : '48px',
    left: '0px',
  };
});

const selectOptionsComputed = computed(() => {
  if (!inputVal.value) return selectOptions;

  return selectOptions.filter((item) => {
    return ('' + item.value).includes(inputVal.value);
  });
});

const handleInput = (evt) => {
  if (parentValue && handleValChange) {
    handleValChange(inputVal.value, name);
  } else {
    emit('update:modelValue', inputVal.value);
  }
};

const handleBlur = async (e) => {
  //   console.log('in handleBlur~~', inputVal.value);
  if (handleRulesValid && name) {
    handleRulesValid(inputVal.value, name, 'blur');
  }
  isFocused.value = false;
  emit('blur', e);
};

const handleFocus = (e) => {
  isFocused.value = true;
  emit('focus', e);
};

const handleKeyup = (e) => {
  emit('keyup', e);
};

const handleClear = () => {
  inputVal.value = '';
  if (handleValChange) {
    handleValChange('', name);
  }
  if (handleRulesValid) {
    handleRulesValid(inputVal.value, name, 'blur');
  }
};

const focusInput = () => {
  if (instance.refs[inputUuid]) {
    // console.log(instance.refs[inputUuid])
    instance.refs[inputUuid].focus();
  }
};

const handleClickOption = (item) => {
  inputVal.value = item.value;
};

defineExpose({
  focusInput,
});
</script>
<script>
export default {
  name: 'GInput',
};
</script>
<template>
  <div class="gt-input-wrapper">
    <div class="gt-input-label" v-if="label">{{ label }}</div>
    <div class="gt-relative">
      <input
        :ref="inputUuid"
        :class="classComputed"
        :style="width ? { width: width + 'px' } : {}"
        :placeholder="placeholder || placeholderDefaultMap[type]"
        :type="TYPES.includes(type) ? type : 'text'"
        @blur="handleBlur"
        @change="handleInput"
        @focus="handleFocus"
        @keyup="handleKeyup"
        class="gt-input"
        v-model="inputVal"
      />
      <g-icon
        @click.stop="handleClear"
        class="clear-icon"
        name="x"
        v-if="clearable && !icon"
      />
      <g-icon
        :class="`gt-input-icon-${iconPosition}`"
        :name="icon"
        v-if="icon"
      />
      <div class="gt-input-error-msg" v-if="errorMsg">{{ errorMsg }}</div>
      <div
        v-if="searchSelectMode"
        class="gt-input-select-mode"
        :class="selectModeClassComputed"
        :style="selectModeStyleComputed"
      >
        <template v-if="!selectOptions || selectOptions.length == 0">
          無選項
        </template>
        <template v-else>
          <div
            class="input-option"
            v-for="item in selectOptionsComputed"
            :key="item.label"
            @click.stop="
              () => {
                handleClickOption(item);
              }
            "
          >
            {{ item.label }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
