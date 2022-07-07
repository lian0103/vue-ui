<script setup>
import { ref, reactive } from 'vue';
import { ElMessage } from 'element-plus';

const activeName = ref('first');
const rules = {
  input2: [{ required: true, message: '必填', trigger: 'blur' }],
};
const input = ref('')
const inputs = reactive({
  search0: '',
  input0: '',
  input1: '',
  input2: '',
  radio:'1',
});
const buttonClick=ref(false);
const radio = ref('1');
const checkList = ref(['複選框 A']);
const switch_value = ref(true);
const dialogVisible= ref(false);
const font_weight=['100','200','300','400','500','600','700','bold','bolder','lighter','normal'];
const datetime =ref('');
const openMessage1 = () => {
  ElMessage({
    showClose: true,
    message: 'Congrats, this is a success message.',
    type: 'success',
    duration:'0',
  })
}
const openMessage2 = () => {
  ElMessage({
    showClose: true,
    message: 'Warning, this is a warning message.',
    type: 'warning',
    duration:'0',
  })
}
const openMessage3 = () => {
  ElMessage({
    showClose: true,
    message: 'Oops, this is a error message.',
    type: 'error',
    duration:'0',
  })
}
const openFullScreen = () => {
  const loading = ElLoading.service({
    lock: true,
    text: '載入中',
  })
  setTimeout(() => {
    loading.close()
  }, 5000)
}
const tableData = [
  {
    id:1,
    date: '2016-05-01',
    name: 'Tom1',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t01',
    price:'100'
  },
  {
    id:2,
    date: '2016-05-03',
    name: 'Tom2',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t02',
    price:'200'
  },
  {
    id:3,
    date: '2016-05-02',
    name: 'Tom3',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t03',
    price:'150'
  },
  {
    id:4,
    date: '2016-05-04',
    name: 'Tom4',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t04',
    price:'125'
  },
  {
    id:5,
    date: '2016-05-07',
    name: 'Tom5',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t05',
    price:'400'
  },
  {
    id:6,
    date: '2016-05-10',
    name: 'Tom6',
    address: 'No. 189, Grove St, Los Angeles',
    food:'pizza',
    drink:'t06',
    price:'700'
  },
]

const rowName = ref('');

function handleSelectionChange(data) {
  
  if(data[0]){
    rowName.value = data[0].name
  } else{
    rowName.value = ''
  }
  
}

function tableRowClassName(row) {
  if( row.row.name == rowName.value ){
    return 'checked'
  } else{
    return ''
  }
}

</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <!-- 文字定義 -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">文字定義</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li v-for="n in 6">
        <div>
          <h1 :class='`gt-h${n}`'>{{`h${ n }`}} / 文字樣式</h1>
        </div>
        <div>
          {{`<h${n} `}}
          <span class="text-red">class="gt-h{{`${n}`}}"</span>
          {{`
          > h${n} / 文字樣式</h${n}>`}}
        </div>
      </li>
      <li v-for="i in 24" v-show="i >= 12">
        <div>
          <p :class='`gt-font-size-${i} q-pa-none q-ma-none`'>font-size-{{`${i}`}} / 文字樣式</p>
        </div>
        <div>
          {{ `<p class=' `}}
          <span class="text-red">gt-font-size-{{`${i}`}}</span>
          {{` q-pa-none q-ma-none'>font-size-${i} / 文字樣式</p>` }}
        </div>
      </li>
      <li v-for="item in font_weight" :key="item">
        <div>
          <p :class='`gt-font-weight-${item} q-pa-none q-ma-none`'>font-weight:{{item}}</p>
        </div>
        <div>
          {{ `<p class=' `}}
          <span class="text-red">gt-font-weight-{{`${item}`}}</span>
          {{` q-pa-none q-ma-none'>font-weight:${item}</p>` }}
        </div>
      </li>
    </ul>
    <!-- END // 文字定義 -->

    <!-- el-button -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-button</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-button class="gt-e-button">預設按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-button" </span>
          {{`
          >預設按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="primary">主要按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-button" </span>
          {{`
          type="primary">主要按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="warning">警告按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="warning">警告按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="danger">危險按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="danger">危險按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="gary">灰色按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="gary">灰色按紐</el-button>`}}
        </div>
      </li>
      <!-- <li>
        <div>
          <el-button class="gt-e-button" round>圓角預設按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" round>圓角預設按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="primary" round>圓角按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="primary" round>圓角按紐</el-button>`}}
        </div>
      </li> -->
      <li>
        <div>
          <el-button class="gt-e-text-button">文字按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-text-button" </span>
          {{`
          >文字按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-text-button" type="success">文字按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-text-button" </span>
          {{`
          type="success">文字按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-text-button" type="primary">文字按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-text-button" </span>
          {{`
          type="primary">文字按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-text-button" type="warning">文字按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-text-button" type="warning">文字按紐</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-text-button" type="danger">文字按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-text-button" type="danger">文字按紐</el-button>`}}
        </div>
      </li>
    </ul>
    <!-- END // el-button -->

    <!-- filter -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">filter</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-button class="gt-e-filter" round @click="buttonClick = !buttonClick" :type="buttonClick == true ? 'primary' :''">圓角預設按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-filter"</span> {{`round>圓角預設按紐</el-button>`}}
        </div>
      </li>
    </ul>
    <!-- END // filter -->

    <!-- Tag -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Tag</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4"> 
      <li>
        <div>
          <el-tag class="gt-e-tag">TAG</el-tag>
        </div>
        <div>{{`<el-tag `}}
        <span class="text-red">class="gt-e-tag"</span>
        {{`
        >TAG</el-tag>`}}</div>
      </li>
      <li>
        <div>
          <el-tag class="gt-e-tag" type="success">TAG</el-tag>
        </div>
        <div>{{`<el-tag class="gt-e-tag" type="success">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag" type="warning">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" type="warning">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag" type="danger">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" type="danger">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div>
          <el-tag class="gt-e-tag gt-e-tag-bd-none">TAG</el-tag>
        </div>
        <div>{{`<el-tag `}}
        <span class="text-red">class="gt-e-tag gt-e-tag-bd-none"</span>
        {{`
        >TAG</el-tag>`}}</div>
      </li>
      <li>
        <div>
          <el-tag class="gt-e-tag gt-e-tag-bd-none" type="success">TAG</el-tag>
        </div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none" type="success">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag gt-e-tag-bd-none" type="warning">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none" type="warning">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag gt-e-tag-bd-none" type="danger">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none" type="danger">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div>
          <el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point">TAG</el-tag>
        </div>
        <div>{{`<el-tag `}}
        <span class="text-red">class="gt-e-tag gt-e-tag-bd-none gt-e-point"</span>
        {{`
        >TAG</el-tag>`}}</div>
      </li>
      <li>
        <div>
          <el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point" type="success">TAG</el-tag>
        </div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none" type="success">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point" type="warning">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point" type="warning">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point" type="danger">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag gt-e-tag-bd-none gt-e-point" type="danger">TAG</el-tag>`}}</div>
      </li>
    </ul>
    <!-- END // Tag -->

    <!-- el-link -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-link</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-link class="gt-e-link" href="https://element.eleme.io" type="primary">超連結</el-link>
        </div>
        <div>
          {{`<el-link `}} <span class="text-red">class="gt-e-link"</span> {{`href="https://element.eleme.io" type="primary">超連結</el-link>`}}
        </div>
      </li>
      <li>
        <div>
          <el-link class="gt-e-disabled-link" type="primary" disabled>超連結</el-link>
        </div>
        <div>
          {{`<el-link `}} <span class="text-red">class="gt-e-disabled-link"</span> {{` type="primary" disabled>超連結</el-link>`}}
        </div>
      </li>
    </ul>
    <!-- end // el-link -->

    <!-- radio -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">radio</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-radio class="gt-e-radio" v-model="radio" label="1">選項1</el-radio>
          <el-radio class="gt-e-radio" v-model="radio" label="2">選項2</el-radio>
        </div>
        <div>
          {{`<el-radio `}}
          <span class="text-red">class="gt-e-radio" </span>
          {{`v-model="radio" label="1">選項1</el-radio>`}}
        </div>
      </li>
    </ul>
    <!-- END // radio -->

    <!-- checkbox -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-checkbox</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-checkbox-group v-model="checkList">
            <el-checkbox class="gt-e-checkbox" label="複選框 A"></el-checkbox>
            <el-checkbox class="gt-e-checkbox" label="複選框 B"></el-checkbox>
            <el-checkbox class="gt-e-checkbox" label="複選框 C" disabled></el-checkbox>
          </el-checkbox-group>
        </div>
        <div>
          {{`<el-checkbox `}}
          <span class="text-red">class="gt-e-checkbox"</span>
           {{`
          label="複選框 A"></el-checkbox>`}}
        </div>
      </li>
    </ul>
    <!-- END // checkbox -->

    <!-- el-switch -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-switch</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-switch
            class="gt-e-switch"
            v-model="switch_value">
          </el-switch>
        </div>
        <div>
          {{`<el-switch `}}
            <span class="text-red">class="gt-e-switch"</span>
          {{`
            v-model="switch_value">
          </el-switch>`}}
        </div>
      </li>
    </ul>
    <!-- END //  -->

    <!-- el-pagination -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-pagination</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-pagination
            class="gt-e-pagination"
            current-page="1"
            :total="50"
            layout="prev, pager, next"
          >
          </el-pagination>
        </div>
        <div>
          {{`<el-pagination`}}
          <span class="text-red">class="gt-e-pagination"</span>
          {{`
            current-page="1"
            :total="50"
            layout="prev, pager, next"
          ></el-pagination>`}}
        </div>
      </li>
    </ul>
    <!-- END // el-pagination -->

    <!-- el-tabs -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-tabs & el-tab-pane </g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-tabs class="gt-e-tabs" v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="內容1" name="first">
              <span class="mx-4 leading-10">內容1</span>
            </el-tab-pane>
            <el-tab-pane label="內容2" name="second">
              <span class="mx-4 leading-10">內容2</span>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div>
          {{`
          <el-tabs 
          `}}
          <span class="text-red">class="gt-e-tabs" </span>
          {{`v-model="activeName" @tab-click="handleClick"> `}} <br>
          {{`
            <el-tab-pane label="VeryLongTabName" name="first">
              <span class="mx-4 leading-10">內容1</span>
            </el-tab-pane>
          `}} <br>
          {{`
            <el-tab-pane label="TAB" name="second">
              <span class="mx-4 leading-10">內容2</span>
            </el-tab-pane> `}} <br>
          {{`</el-tabs>
          `}}
        </div>
      </li>
    </ul>
    <!-- END // el-tabs -->

    <!-- el-dialog -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-dialog</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-button class="gt-e-button" @click="dialogVisible = true">打開Dialog</el-button>
          <el-dialog
            title="TITLE"
            v-model="dialogVisible"
            width="380px"
          >
            <div class="gt-e-dialog">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <template #footer>
              <span class="dialog-footer">
                <el-button class="gt-e-button" type="text" @click="dialogVisible = false">取消</el-button>
                <el-button class="gt-e-button" type="success" @click="dialogVisible = false">確認</el-button>
              </span>
            </template>
          </el-dialog>
        </div>
        <div>
          {{
            `<el-button class="gt-e-button" type="primary" @click="dialogVisible = true">打開Dialog</el-button>
          <el-dialog
            title="TITLE"
            v-model="dialogVisible"
            width="380px"
          >
            <div  `}} <span class="text-red">class="gt-e-dialog"</span> {{` >Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <template #footer>
              <span class="dialog-footer">
                <el-button class="gt-e-button" type="text" @click="dialogVisible = false">取消</el-button>
                <el-button class="gt-e-button" type="success" @click="dialogVisible = false">確認</el-button>
              </span>
            </template>
          </el-dialog>`
          }}
        </div>
      </li>
    </ul>
    <!-- END // el-dialog -->

    <!-- el-dropdown -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-dropdown & el-dropdown-item</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-dropdown
            class="gt-e-dropdown"
          >
            <g-button>
              <g-icons
                name="ellipsis"
                class="w-6"
              />下拉選單
            </g-button>
            <template #dropdown>
              <el-dropdown-menu class="gt-e-dropdown-menu">
                <el-dropdown-item class="gt-e-dropdown-item">
                  <div class="redText">ITEM 1</div>
                </el-dropdown-item>
                <el-dropdown-item class="gt-e-dropdown-item">
                  <div class="redText">ITEM 2</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        <div>
          {{`<el-dropdown`}}
            <span class="text-red">class="gt-e-dropdown"</span>
          {{`
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
              `}} <br>
            {{`
              <el-dropdown-menu `}}
              <span class="text-red">class="gt-e-dropdown-menu"</span>
            {{`>
                <el-dropdown-item `}}
                <span class="text-red">class="gt-e-dropdown-item"</span>
            {{`
            >
                  <div class="redText">ITEM 1</div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>`}}
        </div>
      </li>
    </ul> -->
    <!-- END // el-dropdown -->

    <!-- el-input -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4">不同類型el-input </g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-form
            ref="addEditForm"
            :model="inputs"
            :rules="rules"
            label-width="65px"
            @submit.prevent
          >
            <el-form-item prop="search0" label="搜尋">
              <div class="relative">
                <el-input
                  class="gt-e-input-search"
                  v-model="inputs.search0"
                  placeholder="我是搜尋"
                />
                <g-icons
                  name="search"
                  class="text-main w-5 absolute left-2.5 top-2"
                />
              </div>
            </el-form-item>
          </el-form> 
        </div>
        <div>
          {{`
          <div class="relative">
            <el-input
          `}} <span class="text-red">
            class="gt-e-input-search"
          </span>
            {{`
              v-model="inputs.search0"
              placeholder="我是搜尋"
            />
            <g-icons
              name="search"
              class="text-main w-5 absolute left-2.5 top-2"
            />
          </div>
          `}}
        </div>
      </li>
      <li>
        <div>
          <el-form
            ref="addEditForm"
            :model="inputs"
            :rules="rules"
            label-width="65px"
            @submit.prevent
          >
            <el-form-item prop="input0" label="輸入">
              <el-input
                class="gt-e-input-plain"
                v-model="inputs.input0"
                placeholder="我是輸入框"
              />
            </el-form-item>
          </el-form> 
        </div>
        <div>
          {{ `
          <el-input
          `}} <span class="text-red">class="gt-e-input-plain"</span>
          {{`
            v-model="inputs.input0"
            placeholder="我是輸入框"
          />
          ` }}
        </div>
      </li>
      <li>
        <div>
          <el-form
            ref="addEditForm"
            :model="inputs"
            :rules="rules"
            label-width="65px"
            @submit.prevent
          >
            <el-form-item prop="input1" label="輸入">
              <el-input
                class="gt-e-input"
                v-model="inputs.input1"
                placeholder="我是輸入框"
              />
            </el-form-item>
          </el-form> 
        </div>
        <div>
          {{`
          <el-input `}}
          <span class="text-red">class="gt-e-input"</span>
          {{`  
            v-model="inputs.input1"
            placeholder="我是輸入框"
          />
          `}}
        </div>
      </li>
      <li>
        <div>
          <el-form
            ref="addEditForm"
            :model="inputs"
            :rules="rules"
            label-width="65px"
            @submit.prevent
          >
            <el-form-item prop="input2" label="提示">
              <el-input
                class="gt-e-input"
                v-model="inputs.input2"
                placeholder="我是輸入框"
              />
            </el-form-item>
          </el-form> 
        </div>
        <div>
          {{` <el-input `}}
            <span class="text-red">class="gt-e-input"</span>
          {{`
            v-model="inputs.input2"
            placeholder="我是輸入框"
          /> `}}
        </div>
      </li>
    </ul> -->
    <!-- END // el-input -->

    <!-- 2022/06/01 start -->
    <!-- el-date-picker -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-date-picker</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-date-picker
            class="el-e-date-picker"
            v-model="datetime"
            type="datetime"
            placeholder="選擇日期時間">
          </el-date-picker>
        </div>
        <div>
          {{`<el-date-picker
          `}}
            <span class="text-red">class="el-e-date-picker"</span>
            {{`
            v-model="datetime"
            type="datetime"
            placeholder="選擇日期時間">
          </el-date-picker>`}}
        </div>
      </li>
    </ul>
    <!-- END // el-date-picker -->

    <!-- Message -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Message</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <el-button :plain="true" @click="openMessage1" type="success">成功</el-button>
          <el-button :plain="true" @click="openMessage2" type="warning">警告</el-button>
          <el-button :plain="true" @click="openMessage3" type="danger">錯誤</el-button>
        </div>
        <div>
          此項目無法添加class <br>
          {{`<el-button :plain="true" @click="openMessage1" type="success">成功</el-button>`}} <br>
          {{`<el-button :plain="true" @click="openMessage2" type="warning">警告</el-button>`}} <br>
          {{`<el-button :plain="true" @click="openMessage3" type="danger">錯誤</el-button>`}}
        </div>
      </li>
    </ul>
    <!-- END // Message -->

    <!-- Loading -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Loading</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
           <el-button class="gt-e-button" @click="openFullScreen">fullscreenLoading</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="primary" @click="openFullScreen">fullscreenLoading</el-button>`}}
          <br>須配合<br>
          {{
            `const openFullScreen = () => {
              const loading = ElLoading.service({
                lock: true,
                text: '載入中',
              })
              setTimeout(() => {
                loading.close()
              }, 5000)
            }`
          }}
        </div>
      </li>
    </ul>
    <!-- END // Loading -->

    <!-- el-table -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-table</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div style="width:100%;">
           <!-- @selection-change="handleSelectionChange" -->
           <!-- :row-class-name="tableRowClassName" -->
          <el-table 
            class="gt-e-table" 
            :data="tableData"
            ref="multipleTableRef"
            :default-sort="{ prop: 'date', order: 'descending' }"
            @selection-change="handleSelectionChange"
            :row-class-name="tableRowClassName"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="Date" sortable width="150" />
            <el-table-column prop="name" label="Name" width="100" />
            <el-table-column prop="address" label="Address" width="300" :formatter="formatter" />
            <el-table-column prop="food" label="food" width="100" />
            <el-table-column prop="drink" label="drink" width="100" />
            <el-table-column prop="price" label="price" width="100" />
          </el-table>

        </div>
      </li>
      <li>
        <div>
          {{`
            <el-table 
          `}}
            <span class="text-red">class="gt-e-table"</span>
          {{`
            :data="tableData"
            ref="multipleTableRef"
            :default-sort="{ prop: 'date', order: 'descending' }"
            @selection-change="handleSelectionChange"
            :row-class-name="tableRowClassName"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column prop="date" label="Date" sortable width="150" />
            <el-table-column prop="name" label="Name" width="100" />
            <el-table-column prop="address" label="Address" width="300" :formatter="formatter" />
            <el-table-column prop="food" label="food" width="100" />
            <el-table-column prop="drink" label="drink" width="100" />
            <el-table-column prop="price" label="price" width="100" />
          </el-table>
          `}}
        </div>
      </li>
    </ul>
    <!-- END // el-table -->

    <!-- el-input -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">el-input</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <div class="row">
            <p>一般:</p>
            <el-input class="gt-e-input" v-model="input" />
          </div>
        </div>
        <div>
          {{`<el-input `}}
          <span class="text-red">class="gt-e-input" </span>
          {{`v-model="input" />`}}
        </div>
      </li>
    </ul>
    <!-- END // el-input -->

  </div>
</template>

<style lang="scss" scoped>
ul.ui-flex{
  li{
    display: flex;
    padding-bottom: 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #00000026;
    > div{
      width: 50%;
      &:nth-child(1){
        margin: auto;
      }
    }
  }
}
</style>