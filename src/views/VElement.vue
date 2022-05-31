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
  radio:'1',
});

const radio = ref('1');

const checkList = ref(['複選框 A'])

const switch_value = ref(true)

const dialogVisible= ref(false)

</script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <!-- 文字定義 -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">文字定義</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <h1>Bold / 24 / 文字樣式</h1>
        </div>
        <div>
          {{`<h1>Bold / 24 / 文字樣式</h1>`}}
        </div>
      </li>
      <li>
        <div><h2>Medium / 20 / 文字樣式</h2></div>
        <div>{{`<h2>Medium / 20 / 文字樣式</h2>`}}</div>
      </li>
      <li>
        <div><h3>Bold / 18 / 文字樣式</h3></div>
        <div>{{`<h3>Bold / 18 / 文字樣式</h3>`}}</div>
      </li>
      <li>
        <div><h4>Medium / 16 / 文字樣式</h4></div>
        <div>{{`<h4>Medium / 16 / 文字樣式</h4>`}}</div>
      </li>
      <li>
        <div><h5>Caption1 / Regular / 13 / 文字樣式</h5></div>
        <div>{{`<h5>Caption1 / Regular / 13 / 文字樣式</h5>`}}</div>
      </li>
      <li>
        <div><h6>Caption2 / Regular / 12 / 文字樣式</h6></div>
        <div>{{`<h6>Caption2 / Regular / 12 / 文字樣式</h6>`}}</div>
      </li>
      <li>
        <div><p style="margin-bottom: 0px;padding: 0;">Body / Regular / 16 / 文字樣式</p></div>
        <div>{{`<p>Body / Regular / 16 / 文字樣式</p>`}}</div>
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
          <el-button class="gt-e-button" type="primary">主要按紐</el-button>
        </div>
        <div>
          {{`<el-button `}}
          <span class="text-red">class="gt-e-button" </span>
          {{`
          type="primary">primary</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="success">成功按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="success">success</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="warning">警告按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="warning">warning</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="danger">危險按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="danger">danger</el-button>`}}
        </div>
      </li>
      <li>
        <div>
          <el-button class="gt-e-button" type="primary" round>圓角按紐</el-button>
        </div>
        <div>
          {{`<el-button class="gt-e-button" type="primary" round>圓角按紐</el-button>`}}
        </div>
      </li>
    </ul>
    <!-- END // el-button -->

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
          >`}}
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
          <el-button type="text" @click="dialogVisible = true">打開Dialog</el-button>
          <el-dialog
            title="提示"
            v-model="dialogVisible"
            width="500px"
          >
            <div class="gt-e-dialog">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
            <template #footer>
              <span class="dialog-footer">
                <el-button @click="dialogVisible = false">取消</el-button>
                <el-button class="gt-e-button" type="success" @click="dialogVisible = false">確認</el-button>
              </span>
            </template>
          </el-dialog>
        </div>
        <div></div>
      </li>
    </ul>
    <!-- END // el-dialog -->

    <!-- el-dropdown -->
    <div class="paragraphHead">
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
    </ul>
    <!-- END // el-dropdown -->

    <!-- el-input -->
    <div class="paragraphHead">
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
    </ul>
    <!-- END // el-input -->

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
        <div><el-tag class="gt-e-tag" effect="dark">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" effect="dark">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag" effect="dark" type="success">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" effect="dark" type="success">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag" effect="dark" type="warning">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" effect="dark" type="warning">TAG</el-tag>`}}</div>
      </li>
      <li>
        <div><el-tag class="gt-e-tag" effect="dark" type="danger">TAG</el-tag></div>
        <div>{{`<el-tag class="gt-e-tag" effect="dark" type="danger">TAG</el-tag>`}}</div>
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
    </ul>
    <!-- END // Tag -->

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