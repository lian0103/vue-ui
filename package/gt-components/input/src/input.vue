<script setup>
import { computed, onMounted, ref , getCurrentInstance } from 'vue';
import { v4 as uuidv4 } from 'uuid';

const inputUuid = uuidv4();
const instance = getCurrentInstance();
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
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur']);

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

const inputVal = ref(modelValue || parentValue?.value || '');

const handleInput = (evt) => {
  if (parentValue && handleValChange) {
    console.log('~~~', inputVal.value);
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

  emit('blur', e);
};

const handleFocus = (e) => {
  emit('focus', e);
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

const focusInput = ()=>{
  if(instance.refs[inputUuid]){
    // console.log(instance.refs[inputUuid])
    instance.refs[inputUuid].focus()
  }
}

defineExpose({
  focusInput
})

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
    </div>
  </div>
</template>
