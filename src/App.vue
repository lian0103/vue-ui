<script setup>
import { ref, getCurrentInstance, reactive } from 'vue';

// import {
//   GButton,
//   GIcons,
//   GTitle,
//   GDropdown,
//   GDropdownMenu,
//   GDropdownItem,
// } from 'gt-front-ui';

import { GButton, GIcons, GTitle, GLayout, GLoading } from './components/';

import VMenu from './views/VMenu.vue';

const icons = [
  'up',
  'arrowDown',
  'arrowLeft',
  'calendar',
  'check',
  'chevronDown',
  'chevronLeft',
  'chevronRight',
  'chevronUp',
  'circle',
  'down',
  'download',
  'ellipsis',
  'plus',
  'search',
  'sequence',
  'trash',
  'x',
];

const activeName = ref('first');

const instance = getCurrentInstance();

const handleLoading = () => {
  instance.appContext.config.globalProperties.handleLoadingTrigger(true);
};

const handleClick = (tab, event) => {
  // console.log(tab, event)
};

const handleLoadTrigger = (show) => {
  console.log(show.value);
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
  <g-layout headText="Great Tree UI" title="Demo">
    <template #sidebar>
      <v-menu class="gt-menu" />
    </template>
    <template #header>
      <div class="w-1/4 flex justify-center items-center px-4">
        <span class="flex leading-8 mr-4 cursor-pointer"
          ><g-icons name="search" class="text-primary w-8" /><span
            >搜尋</span
          ></span
        >
        <span class="cursor-pointer"
          ><g-icons name="calendar" class="text-primary w-8"
        /></span>
      </div>
    </template>
    <template #content>
      <div class="py-12 flex justify-center items-center flex-col">
        <div class="paragraphHead">
          <g-title :level="1" class="mb-4">v0.0.2說明</g-title>
        </div>
        <div class="mb-8 w-full md:w-3/4 mx-auto">
          <p>
            1.class目前使用規則:前綴加"gt-"，後踩駝峰 ex. gt-title、gt-btnFlat
          </p>
          <p>
            2.這包有使用tailwind.config.js來設定設計上要求的對應參數 ex:
            primary: '#32A03D'
          </p>
          <p>
            3.目前不重複打包ElementPlus
            UI庫。只打包在'assets/elementPlus.css'中覆寫樣式，各自專案還是需引入原本的Element樣式，使用方式為元件上加上指定的gt樣式名稱。
          </p>
          <p>
            4.
            實際專案修改elementPlus的設定參照官網文件，需要如'assets/elementPlusInit.scss'覆寫基礎的變數定義。
          </p>
        </div>
        <div class="paragraphHead">
          <g-title :level="1" class="mb-4">覆寫ElementPlus樣式 </g-title>
        </div>
        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">不同類型el-input</g-title>
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
                    class="text-primary w-5 absolute left-2.5 top-2"
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
              }}<sapn class="redText">gt-inputSearch</sapn
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
              }}<sapn class="redText">gt-inputPlain</sapn
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
              }}<sapn class="redText">gt-input</sapn
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

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">el-tabs & el-tab-pane</g-title>
        </div>
        <div class="mb-16 px-2 w-full md:w-3/4">
          <el-tabs
            class="gt-tabs"
            v-model="activeName"
            @tab-click="handleClick"
          >
            <el-tab-pane label="VeryLongTabName" name="first">
              <span class="mx-4 leading-10"
                >{{ `<el-tabs class="` }}<sapn class="redText">gt-tabs</sapn
                >{{ `">` }}</span
              >
            </el-tab-pane>
            <el-tab-pane label="TAB" name="second">
              <span class="mx-4 leading-10">內容2</span></el-tab-pane
            >
          </el-tabs>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4"
            >el-dropdown-menu & el-dropdown-item</g-title
          >
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

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">大樹後台layout Grid排版</g-title>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="mb-4">
            {{`<g-layout headText="Great Tree UI" title="Demo"
              >`}} <br />
              <div class="redText pl-6">
                {{`<template #sidebar> ... </template>`}}
              </div>
              <div class="redText pl-6">
                {{`<template #header> ... </template>`}}
              </div>
              <div class="redText pl-6">
                {{`<template #content> ... </template>`}}
              </div>

              {{`</g-layout
            >
            `}}
          </div>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">layout版型中el-menu使用</g-title>
        </div>
        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="mb-4">
            {{`<g-layout headText="HeadText" title="title"
              >`}} <br />
              <div class="redText pl-6">
                //樣式如左方所示 <br />
                {{`<template #sidebar> <el-menu class="gt-menu" /> </template
                >`}}
              </div>
              {{`</g-layout
            >
            `}}
          </div>
        </div>
        <div class="paragraphHead">
          <g-title :level="1" class="mb-4">手刻設計的基礎元件</g-title>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">頁面過場</g-title>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button pill @click="handleLoading"
                >顯示Loading效果</g-button
              ></span
            >
          </div>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">標題文字</g-title>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-title :level="1">Bold / 24 / 文字樣式</g-title></span
            >
            <span class="mx-4 leading-10 font-bold"
              >{{ '<g-title :level="1">Bold / 24 / 文字樣式</g-title>' }}</span
            >
          </div>
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-title :level="2">Medium / 20 / 文字樣式</g-title></span
            >
            <span class="mx-4 leading-10 font-medium"
              >{{ '<g-title :level="2">Medium / 20 / 文字樣式</g-title>'
              }}</span
            >
          </div>
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-title :level="3">Bold / 18 / 文字樣式</g-title></span
            >
            <span class="mx-4 leading-10 font-light"
              >{{ '<g-title :level="3">Bold / 18 / 文字樣式</g-title>' }}</span
            >
          </div>
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-title>Medium / 16 / 文字樣式</g-title></span
            >
            <span class="mx-4 leading-6 font-thin"
              >{{ '<g-title>Medium / 16 / 文字樣式</g-title>' }}</span
            >
          </div>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">按鈕</g-title>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"><g-button pill>按鈕</g-button></span>
            <span class="mx-4 leading-10 text-primaryDarker"
              >{{ '<g-button pill>按鈕</g-button>' }}</span
            >
          </div>
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button flat>文字按鈕</g-button></span
            >
            <span class="mx-4 leading-10 text-primaryDarker"
              >{{ '<g-button flat>文字按鈕</g-button> ' }}</span
            >
          </div>

          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button flat
                ><g-icons name="chevronLeft" class="w-8" />上一頁</g-button
              ></span
            >
            <span class="mx-4 leading-10 text-primaryDarker"
              >{{ `<g-button flat
                ><g-icons name="chevronLeft" class="w-8" /> 上一頁</g-button
              >
              ` }}</span
            >
          </div>

          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button flat
                ><g-icons
                  name="chevronRight"
                  class="text-primary w-8"
                />下一頁</g-button
              ></span
            >
            <span class="mx-4 leading-10 text-primaryDarker"
              >{{ `<g-button flat
                ><g-icons name="chevronRight" class="text-primary w-8" />
                下一頁</g-button
              >
              ` }}</span
            >
          </div>

          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"><g-button>預設按鈕</g-button></span>
            <span class="mx-4 leading-10 font-semibold text-primaryDarker"
              >{{ ' <g-button>預設按鈕</g-button> ' }}</span
            >
          </div>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button pill type="second">按鈕</g-button></span
            >
            <span class="mx-4 leading-10 font-semibold text-second"
              >{{ '<g-button pill type="second">按鈕</g-button>' }}</span
            >
          </div>
          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button flat type="second">文字按鈕</g-button></span
            >
            <span class="mx-4 leading-10 font-semibold text-second"
              >{{ '<g-button flat type="second">文字按鈕</g-button> ' }}</span
            >
          </div>

          <div class="flex justify-start mb-4">
            <span class="w-1/2 md:w-1/3"
              ><g-button type="second">預設按鈕</g-button></span
            >
            <span class="mx-4 leading-10 font-semibold text-second"
              >{{ ' <g-button type="second">預設按鈕</g-button> ' }}</span
            >
          </div>
        </div>

        <div class="w-full md:w-3/4 mx-auto">
          <g-title :level="2" class="mb-4">svg icon</g-title>
        </div>

        <div class="mb-4 px-2 w-full md:w-3/4">
          <span
            class="flex justify-start mb-2"
            v-for="(item, idx) in icons"
            :key="item"
          >
            <template v-if="idx % 2 == 0">
              <span class="w-1/2 md:w-1/3"
                ><g-icons :name="item" class="text-primary w-8"
              /></span>
              <span class="text-gray-600 leading-10">
                {{ `<g-icons name="${item}" class="text-primary w-8" />`}}
              </span>
            </template>
            <template v-else>
              <span class="w-1/2 md:w-1/3"
                ><g-icons :name="item" class="text-second w-8"
              /></span>
              <span class="text-gray-600 leading-10">
                {{ `<g-icons name="${item}" class="text-second w-8" />`}}
              </span>
            </template>
          </span>
        </div>
      </div>
    </template>
  </g-layout>
  <g-loading :trigger="handleLoadTrigger" />
</template>

<style lang="scss" scoped>
div > p {
  margin-bottom: 10px;
  padding: 4px 10px;
}

.redText {
  @apply text-red-500;
}

.paragraphHead {
  @apply w-full pl-14 py-8 text-left;
}
</style>
