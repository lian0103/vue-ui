<script>
import { defineComponent, defineAsyncComponent , ref , computed} from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    return {
      shape: ref('line1'),
      valCheckbox1: ref(true),
      valCheckbox2: ref(false),
      valCheckbox3: ref(false),
      value: ref(true),
      current: ref(1),
      tab: ref('mails'),
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ],
      prompt:ref(false),
      font_weight:['100','200','300','400','500','600','700','bold','bolder','lighter','normal'],
    }
  }
})
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
    
    <!-- button -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-button</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn class="gt-q-button" color="primary" label="主要按紐" />
        </div>
        <div>
          {{`<q-btn `}} <span class="text-red">class="gt-q-button"</span> {{`color="primary" label="Primary" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="positive" label="成功按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="positive" label="positive" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="warning" label="警告按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="warning" label="warning" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" color="negative" label="危險按紐" />
        </div>
        <div>
          {{`<q-btn class="gt-q-button" color="negative" label="negative" />`}}
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-q-button" outline rounded color="primary" label="圓角按紐" />
        </div>
        <div>
          {{ `<q-btn class="gt-q-button" outline rounded color="primary" label="圓角按紐" />` }}
        </div>
      </li>
    </ul>
    <!-- END // button -->

    <!-- a -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">a</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <a href="https://www.google.com.tw/" class="gt-q-link primary" target="_blank">超連結</a>
        </div>
        <div>
          {{`<a `}} <span class="text-red">class="gt-q-link primary"</span> {{` href="https://www.google.com.tw/" target="_blank">超連結</a>`}}
        </div>
      </li>
      <li>
        <div>
          <a href="https://www.google.com.tw/" class="gt-q-disable-link primary" target="_blank">超連結</a>
        </div>
        <div>
          {{`<a href="https://www.google.com.tw/"`}} <span class="text-red">class="gt-q-disable-link primary"</span>  {{`target="_blank">超連結</a>`}}
        </div>
      </li>
    </ul>
    <!-- END // a -->

    <!-- radio -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">radio</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-radio class="gt-q-radio q-mr-sm" v-model="shape" val="line1" label="選項1" />
          <q-radio class="gt-q-radio" v-model="shape" val="line2" label="選項2" />
        </div>
        <div>
          {{`<q-radio `}}
          <span class="text-red">class="gt-q-radio"</span>
          {{`v-model="shape" val="line1" label="選項1" />`}}
        </div>
      </li>
    </ul>
    <!-- END // radio -->

    <!-- q-checkbox -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-checkbox</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-checkbox class="gt-q-checkbox q-mr-sm" v-model="valCheckbox1" label="複選框 A" />
          <q-checkbox class="gt-q-checkbox q-mr-sm" v-model="valCheckbox2" label="複選框 B" />
          <q-checkbox class="gt-q-checkbox" v-model="valCheckbox3" label="複選框 C" />
        </div>
        <div>
          {{`<q-checkbox `}}
          <span class="text-red">class="gt-q-checkbox"</span>
          {{` v-model="valCheckbox1" label="複選框 A" />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-checkbox -->

    <!-- q-toggle -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-toggle</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-toggle class="gt-q-toggle" v-model="value" />
        </div>
        <div>
          {{`<q-toggle `}}
          <span class="text-red">class="gt-q-toggle"</span>
          {{` v-model="value" />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-toggle -->

    <!-- q-pagination -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-pagination</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-pagination
            class="gt-q-pagination"
            rounded 
            v-model="current"
            :max="5"
            direction-links
          />
        </div>
        <div>
          {{`<q-pagination
          `}}
            <span class="text-red">class="gt-q-pagination"</span>
          {{`
            rounded 
            v-model="current"
            :max="5"
            direction-links
          />`}}
        </div>
      </li>
    </ul>
    <!-- END // q-pagination -->

    <!-- tabs -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">tabs</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <!-- <el-card> -->
            <q-tabs
              class="gt-q-tabs"
              v-model="tab"
            >
              <q-tab name="mails" label="內容1" />
              <q-tab name="alarms" label="內容2" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                內容1
              </q-tab-panel>

              <q-tab-panel name="alarms">
                內容2
              </q-tab-panel>
            </q-tab-panels>
          <!-- </el-card> -->
        </div>
        <div>
          {{`
            <q-tabs
          `}}
            <span class="text-red">class="gt-q-tabs"</span>
          {{`
              v-model="tab"
            >
              <q-tab name="mails" label="內容1" />
              <q-tab name="alarms" label="內容2" />
            </q-tabs>

            <q-tab-panels v-model="tab" animated>
              <q-tab-panel name="mails">
                內容1
              </q-tab-panel>

              <q-tab-panel name="alarms">
                內容2
              </q-tab-panel>
            </q-tab-panels>`}}
        </div>
      </li>
    </ul>
    <!-- END // tabs -->

    <!-- Dialog -->
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">Dialog</g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn label="打開Dialog" class="gt-q-button" color="primary" @click="prompt = true" />

          <q-dialog class="gt-q-dialog" v-model="prompt" persistent>
            <q-card style="width: 380px">
              <q-card-section class="card-header row items-center q-pb-none">
                <div>TITLE</div>
                <q-btn class="gt-q-close" icon="close" flat round dense v-close-popup />
              </q-card-section>
              <q-card-section class="card-body">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-card-section>
              <q-card-actions class="card-footer" align="right">
                <q-btn flat label="取消" v-close-popup />
                <q-btn class="gt-q-button" color="positive" label="確認" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </div>
        <div>
          {{`<q-dialog `}}
          <span class="text-red">class="gt-q-dialog"</span>
          {{`v-model="prompt" persistent>
            <q-card style="width: 380px">
              <q-card-section class="`}}
              <span class="text-red">card-header</span>
              {{` row items-center q-pb-none">
                <div class="text-h6">TITLE</div>
                <q-btn class="`}}
                <span class="text-red">gt-q-close</span>{{`" icon="close" flat round dense v-close-popup />
              </q-card-section>
              <q-card-section class="`}}<span class="text-red">card-body</span>{{`">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </q-card-section>
              <q-card-actions class="`}}<span class="text-red">card-footer</span> {{`" align="right">
                <q-btn flat label="取消" v-close-popup />
                <q-btn `}}<span class="text-red">class="gt-q-button"</span>{{`color="positive" label="確認" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>`}}
        </div>
      </li>
    </ul>
    <!-- END // Dialog -->

    <!--  -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4"></g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          
        </div>
        <div></div>
      </li>
    </ul> -->
    <!-- END //  -->

    <!--  -->
    <!-- <div class="paragraphHead">
      <g-title :level="1" class="mb-4"></g-title>
    </div>
    <ul class="ui-flex mb-4 px-2 w-full md:w-3/4">
      <li>
        <div></div>
        <div></div>
      </li>
    </ul> -->
    <!-- END //  -->

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