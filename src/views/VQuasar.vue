<script setup></script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-button</g-title>
    </div>
    <ul class="mb-4 px-2 w-full md:w-3/4">
      <li>
        <div>
          <q-btn color="primary" label="原生primary" />
        </div>
        <div>
          <p>{{`<q-btn color="primary" label="原生primary" />`}}</p>
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-button" color="primary" label="Primary" />
        </div>
        <div>
          <p>{{`<q-btn class="gt-button" color="primary" label="Primary" />`}}</p>
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-button" color="positive" label="positive" />
        </div>
        <div>
          <p>{{`<q-btn class="gt-button" color="positive" label="positive" />`}}</p>
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-button" color="negative" label="negative" />
        </div>
        <div>
          <p>{{`<q-btn class="gt-button" color="negative" label="negative" />`}}</p>
        </div>
      </li>
      <li>
        <div>
          <q-btn class="gt-button" color="warning" label="warning" />
        </div>
        <div>
          <p>{{`<q-btn class="gt-button" color="warning" label="warning" />`}}</p>
        </div>
      </li>
    </ul>

    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-avatar </g-title>
    </div>
    <div class="mb-4 px-2 w-full md:w-3/4">
      <div class="flex justify-start mb-4">
        <span class="w-1/2 flex justify-between">
          <q-avatar  color="red" text-color="white" icon="directions" />
          <q-avatar  color="primary" text-color="white">J</q-avatar>
          <q-avatar
            
            size="100px"
            font-size="82px"
            color="teal"
            text-color="white"
            icon="directions"
          />
          <q-avatar  size="24px" color="orange">J</q-avatar>
          <q-avatar >
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
        </span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
ul{
  li{
    display: flex;
    div{
      width: 50%;
    }
  }
}
</style>
