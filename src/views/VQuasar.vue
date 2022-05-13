<script setup></script>

<template>
  <div class="py-12 flex justify-center items-center flex-col">
    <div class="paragraphHead">
      <g-title :level="1" class="mb-4">q-avatar </g-title>
    </div>
    <div class="mb-16 px-2 w-full md:w-3/4">
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

<style lang="scss" scoped></style>
