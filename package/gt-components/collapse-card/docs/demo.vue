<script setup></script>
<template>
  <g-title :level="2"> item mode</g-title>
  <g-collapse-card class="mb-4">
    <template #title>hello</template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
      praesentium.
    </template>
  </g-collapse-card>

  <g-collapse-card class="mb-4">
    <template #title>hello</template>
    <template #content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
      praesentium.
    </template>
  </g-collapse-card>
  <g-divider />
  <g-title :level="2"> section mode</g-title>
  <g-collapse-card-section>
    <g-collapse-card class="mb-4">
      <template #title>hello</template>
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
        praesentium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolor, non iure? Facilis, ea! Fugiat molestiae nesciunt doloremque
        consequuntur corrupti autem.
      </template>
    </g-collapse-card>
    <g-collapse-card class="mb-4">
      <template #title>hello</template>
      <template #content>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
        praesentium.
      </template>
    </g-collapse-card>
  </g-collapse-card-section>
</template>
