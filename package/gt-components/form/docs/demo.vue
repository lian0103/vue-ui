<script setup>
import { reactive, getCurrentInstance, onMounted } from 'vue';

const instance = getCurrentInstance();

const inputs = reactive({
  test: {
    test1: 'hi~',
    test2: 123,
    test3: '',
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
};

const handleSubmit = () => {
  const instance = getCurrentInstance();
  instance.appContext.config.globalProperties['$gForms-form1'].callValid();
};

onMounted(()=>{
  console.log('mounted',instance.appContext.config.globalProperties['$gForms-form1']);
})
</script>

<template>
  <div class="w-full mx-auto mb-6 relative">
    <g-title :level="2" class="mb-3">輸入框-驗證</g-title>
    <g-form v-model="inputs.test" :rules="formRule" name="form1">
      <g-input label="驗證1" name="test1" green clearable />
      <g-input label="驗證2" name="test2" green clearable />
      <g-input label="驗證3" name="test3" green clearable />
    </g-form>
    <p>inputs.test1:{{ inputs.test.test1 }}</p>
    <p>inputs.test2:{{ inputs.test.test2 }}</p>
    <p>inputs.test3:{{ inputs.test.test3 }}</p>
    <g-button
      class="mb-4"
      @click="
        () => {
          handleSubmit();
        }
      "
      >欄位驗證</g-button
    >
  </div>
</template>
