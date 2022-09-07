<script setup>
import { isNull } from 'lodash';
import { reactive, getCurrentInstance, onMounted } from 'vue';
import GForm from '../index.js';

const instance = getCurrentInstance();

const inputs = reactive({
  test: {
    test1: 'hi~',
    test2: 123,
    test3: '',
    radioAA: true,
    radio0: true,
    radio1: false,
    radio2: true,
    radio3: false,
    radio4: 2,
    checked0: true,
    checked1: false,
    checked2: true,
    checked3: false,
    dropdown: null,
  },
});

const formRule = {
  test1: [
    {
      require: true,
      message: '必填',
      trigger: 'blur',
    },
    {
      valid: (val) => ('' + val).length > 3,
      message: '長度大於3',
      trigger: 'blur',
    },
  ],
  test2: [
    {
      valid: (val) => ('' + val).length > 10,
      message: '長度大於10',
    },
  ],
  radio1: [
    {
      valid: (val) => val === true,
      message: 'radio1 必須選~',
    },
  ],
  checked1: [
    {
      valid: (val) => val === true,
      message: 'checked1 必須選~',
    },
  ],
  dropdown: [
    {
      valid: (val) => !isNull(val),
      message: 'dropdown 必須選~',
    },
  ],
};

const handleSubmit = async (e) => {
  e.preventDefault();
  let result = await instance.appContext.config.globalProperties[
    'gForms-form1'
  ].callValid();
  // console.log(result);
};

onMounted(() => {
  // console.log('mounted',instance.appContext.config.globalProperties['gForms-form1']);
});
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">輸入框-驗證</g-title>
    <g-form v-model="inputs.test" :rules="formRule" name="form1">
      <g-input label="驗證1" name="test1" green clearable />
      <g-input label="驗證2" name="test2" green clearable />
      <g-input label="驗證3" name="test3" green clearable />

      <g-radiobox class="mr-4 mb-3" name="radioAA" label="AA" />

      <div class="mt-3 mb-3 flex w-full">
        <g-radiobox class="mr-4" name="radio0" label="A" />
        <g-radiobox class="mr-4" name="radio1" label="B" />
        <g-radiobox class="mr-4" name="radio2" disabled label="C" />
        <g-radiobox class="mr-4" name="radio3" disabled label="D" />
      </div>

      <div class="mb-3 flex w-full">
        <g-checkbox class="mr-4" name="checked0" label="選項1" />
        <g-checkbox class="mr-4" name="checked1" label="選項2" />
        <g-checkbox class="mr-4" name="checked2" label="選項3" disabled />
        <g-checkbox class="mr-4" name="checked3" label="選項4" disabled />
      </div>

      <g-dropdown
        name="dropdown"
        class="mt-4 mb-4"
        :options="[
          { label: '請選擇', value: null },
          { label: 'Aaaa', value: 1 },
          { label: 'Bbbb', value: 2 },
          { label: 'Ggggwwwwwwwsssswww', value: 3 },
        ]"
        clicked
        icon
      />

      <g-button class="mb-4" @click="handleSubmit">欄位驗證</g-button>
    </g-form>
    <p>inputs.test.test1:{{ inputs.test.test1 }}</p>
    <p>inputs.test.test2:{{ inputs.test.test2 }}</p>
    <p>inputs.test.test3:{{ inputs.test.test3 }}</p>

    <p>inputs.test.radioAA:{{ inputs.test.radioAA }}</p>
    <p>inputs.test.radio0:{{ inputs.test.radio0 }}</p>
    <p>inputs.test.radio1:{{ inputs.test.radio1 }}</p>

    <p>inputs.test.dropdown:{{ inputs.test.dropdown }}</p>

    <p>inputs.test.checked0:{{ inputs.test.checked0 }}</p>
    <p>inputs.test.checked1:{{ inputs.test.checked1 }}</p>
  </div>
</template>
