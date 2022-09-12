<script setup>
  const clickFn = (param)=>{
    console.log('in',param)
  }


</script>

<template>
  <g-tabs :tabs="[{ name: 'tab1' }, { name: 'tab2' }]" :clickCallback="clickFn" :currentTab="'tab2'">
    <template v-slot:tab1="context">
      <g-title :level="1" class="mb-3">hello , tab1 </g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quis
      assumenda similique possimus ipsam consequatur animi ipsa fugit quia.
      Accusantium.
    </template>
    <template v-slot:tab2="context">
      <g-title :level="1" class="mb-3">hello , tab2</g-title>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae alias
      earum exercitationem inventore dignissimos velit dolores maiores quod
      accusantium, reiciendis cupiditate modi quia rem at ut laborum vero
      doloribus rerum?
    </template>
  </g-tabs>
</template>
