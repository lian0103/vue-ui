<script setup>
import { ref, reactive } from 'vue';
const activeName = ref('first');

const handleClick = (tab, event) => {
  // console.log(tab, event)
};

const rules = {
  input2: [{ required: true, message: '必填', trigger: 'blur' }],
};

const inputs = reactive({
  search0: '',
  input0: '',
  input1: '',
  input2: '',
});
</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">不同類型el-input </g-title>
    </div>
    <div class="w-full md:w-3/4 mx-auto pb-10 flex">
      <div class="w-1/2">
        <el-form
          ref="addEditForm"
          :model="inputs"
          :rules="rules"
          label-width="65px"
          @submit.prevent
        >
          <el-form-item prop="search0" label="搜尋0">
            <div class="relative">
              <el-input
                class="mb-4 gt-inputSearch"
                v-model="inputs.search0"
                placeholder="我是搜尋"
              />
              <g-icons
                name="search"
                class="text-main w-5 absolute left-2.5 top-2"
              />
            </div>
          </el-form-item>
          <el-form-item prop="input0" label="輸入0">
            <el-input
              class="mb-4 gt-inputPlain"
              v-model="inputs.input0"
              placeholder="我是輸入框"
            />
          </el-form-item>
          <el-form-item prop="input1" label="輸入1">
            <el-input
              class="mb-4 gt-input"
              v-model="inputs.input1"
              placeholder="我是輸入框"
            />
          </el-form-item>
          <el-form-item prop="input2" label="輸入2">
            <el-input
              class="mb-4 gt-input"
              v-model="inputs.input2"
              placeholder="我是輸入框"
            />
          </el-form-item>
        </el-form>
      </div>
      <div class="w-1/2 flex flex-col">
        <p>
          {{
            `
              <el-input
                class="`
          }}<span class="redText">gt-inputSearch</span
          >{{
            `"
                v-model="inputs.search0"
                placeholder="我是搜尋"
              /> (icon另外用)`
          }}
        </p>
        <p>
          {{
            `
              <el-input
                class="`
          }}<span class="redText">gt-inputPlain</span
          >{{
            `"
                v-model="inputs.input0"
                placeholder="我是輸入框"
              />`
          }}
        </p>
        <p>
          {{
            `
              <el-input
                class="`
          }}<span class="redText">gt-input</span
          >{{
            `"
                v-model="inputs.input1"
                placeholder="我是輸入框"
              />`
          }}
        </p>
        <p>驗證欄位錯誤提示</p>
      </div>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-tabs & el-tab-pane </g-title>
    </div>

    <div class="mb-16 px-2 w-full md:w-3/4">
      <el-tabs class="gt-tabs" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="VeryLongTabName" name="first">
          <span class="mx-4 leading-10"
            >{{ `<el-tabs class="` }}<span class="redText">gt-tabs</span
            >{{ `">` }}</span
          >
        </el-tab-pane>
        <el-tab-pane label="TAB" name="second">
          <span class="mx-4 leading-10">內容2</span></el-tab-pane
        >
      </el-tabs>
    </div>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4"
        >el-dropdown-menu & el-dropdown-item
      </g-title>
    </div>

    <div class="mb-16 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 md:w-1/3">
          <el-dropdown
            class="gt-dropdown"
            type="primary"
            size="large"
            :hide-on-click="false"
          >
            <g-button>
              <g-icons
                name="ellipsis"
                class="w-6"
              />假裝是很長的下拉選單</g-button
            >
            <template #dropdown>
              <el-dropdown-menu class="gt-dropdown-menu">
                <el-dropdown-item class="gt-dropdown-item">
                  <div class="redText">依el元件設計 要分開寫class</div>
                </el-dropdown-item>
                <el-dropdown-item class="gt-dropdown-item"
                  >{{ `class="` }}
                  <div class="redText">gt-dropdown</div>
                  {{ `"` }}</el-dropdown-item
                >
                <el-dropdown-item class="gt-dropdown-item"
                  >{{ `class="` }}
                  <div class="redText">gt-dropdown-menu</div>
                  {{ `"` }}</el-dropdown-item
                >
                <el-dropdown-item class="gt-dropdown-item"
                  >{{ `class="` }}
                  <div class="redText">gt-dropdown-item</div>
                  {{ `"` }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </span>
        <span class="mx-4 leading-10 font-bold">
          <el-dropdown type="primary" size="large" :hide-on-click="false">
            <g-button flat>
              <g-icons
                name="ellipsis"
                class="w-6"
              />假裝是很長的下拉選單</g-button
            >
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>未加class</el-dropdown-item>
                <el-dropdown-item>Action 1111111</el-dropdown-item>
                <el-dropdown-item>Action 2222222</el-dropdown-item>
                <el-dropdown-item>Action 3333333</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown></span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
