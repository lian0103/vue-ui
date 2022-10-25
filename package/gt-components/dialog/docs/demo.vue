<script setup>
import { reactive } from 'vue';

const dialogInfo = reactive({
  cus: false,
  sm1: false,
  sm2: false,
  md1: false,
  md2: false,
  lg1: false,
  lg2: false,
  title: 'Hello',
});

const handleCallback = () => {
  alert(123);
};

const handleDialog = (target = 1, size = 'sm') => {
  // console.log('~~~', '' + size + target);
  switch (target) {
    case 0: {
      dialogInfo.cus = true;
      break;
    }
    case 1: {
      dialogInfo['' + size + target] = true;
      break;
    }
    case 2: {
      dialogInfo['' + size + target] = true;
      break;
    }
  }
};
</script>

<template>
  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.cus"
    :handleCallback="handleCallback"
    :width="600"
    :height="400"
    >hello Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dignissimos corporis repellat, aliquam magnam velit perspiciatis libero assumenda accusamus, fuga in a aperiam qui ex! Ratione ea, sapiente repudiandae quasi vel minima necessitatibus ut hic, debitis non blanditiis beatae, odit odio cupiditate obcaecati impedit earum aperiam natus dolore eius itaque fuga harum! Quam officiis accusamus dignissimos enim ea, porro nesciunt natus totam consectetur illum dolor modi, suscipit aliquid nam quae. Explicabo assumenda quod autem unde voluptas repudiandae nisi vitae nemo blanditiis corporis consequatur, eaque expedita accusantium ullam, non, fuga dignissimos laboriosam odit ipsa provident saepe at commodi! Natus, sequi officia fugiat dicta incidunt nam culpa, qui tempora recusandae tenetur ad. Quos accusantium repudiandae voluptas. Reprehenderit dignissimos sunt repellat quae dolorum, nihil voluptate perferendis? Illo ipsam modi aliquid sunt magnam quasi eum quia qui ducimus, voluptatibus, labore praesentium inventore. Minima modi voluptate facere consectetur quam similique iste iusto voluptas, aliquid numquam dignissimos sunt tempore sapiente esse? Quod ab similique aperiam nesciunt hic odio incidunt eveniet commodi eum, perspiciatis deleniti pariatur. Magnam consequuntur delectus nihil nam laborum beatae in, veritatis voluptatem saepe nemo. Praesentium architecto nesciunt quis? Hic, corporis! Dignissimos sunt eligendi quasi. Officiis quae aliquid praesentium nobis sequi neque, maiores molestias similique placeat voluptate itaque maxime amet reiciendis exercitationem nisi quia laudantium adipisci, incidunt dolorum optio quas cupiditate. Similique reiciendis sapiente illum aspernatur adipisci et odit quae iste praesentium possimus! Veritatis similique ullam dolorem! Id sapiente accusamus tempora illum error a nostrum consequatur in animi voluptates quisquam praesentium, quae, neque officia fugiat quidem ratione eveniet. Amet nulla sint repellendus? Porro ullam nam, quis velit earum omnis molestiae distinctio, accusamus nesciunt ex eaque temporibus sint ea sit nobis! Nobis, id fuga reiciendis dolore totam ipsa officia at earum, perspiciatis ut eius esse natus laborum corrupti eaque laboriosam aliquam commodi? Mollitia totam modi, eius odit aperiam consequatur vero corporis ipsam minus numquam, voluptates atque officia commodi rerum excepturi maxime ad ipsum reprehenderit. Illum aspernatur nisi quos amet temporibus sit mollitia ea. Voluptatum atque rerum, quaerat vitae corporis odio. Recusandae laudantium amet earum ad quibusdam odio distinctio, excepturi adipisci reiciendis nobis et possimus, eveniet sint nisi facere quaerat unde hic tenetur laboriosam assumenda placeat, eum repudiandae. Labore architecto ut natus maxime quos. Soluta voluptatibus deserunt assumenda ut distinctio rem laborum reiciendis magnam repellendus incidunt neque esse eos consequatur qui, eveniet harum molestias debitis iste voluptate iure et perferendis excepturi? Nam praesentium obcaecati quis unde!</g-dialog
  >


  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.sm1"
    :handleCallback="handleCallback"
    size="sm"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.sm2"
    mode="delete"
    size="sm"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.md1"
    :handleCallback="handleCallback"
    size="md"
    >body~~</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.md2"
    mode="delete"
    size="md"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <g-dialog
    :title="dialogInfo.title"
    v-model="dialogInfo.lg1"
    :handleCallback="handleCallback"
    size="lg"
    >body~~small Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
    dolorum reprehenderit dignissimos quaerat! Soluta voluptatibus quidem autem
    dolorum, magnam minus odio aspernatur! Tenetur, possimus et. Incidunt est
    laboriosam veritatis porro.</g-dialog
  >
  <g-dialog
    v-model="dialogInfo.lg2"
    mode="delete"
    size="lg"
    :handleCallback="handleCallback"
    >確定刪除嗎?
  </g-dialog>

  <div class="w-full mx-auto mb-6">
    <g-title :level="2" class="mb-3">自定義寬高</g-title>
    <g-button
        pill
        type="second"
        class="mr-4"
        @click="
          () => {
            handleDialog(0);
          }
        "
        >600x400</g-button
      >
    <g-divider />

    <g-title :level="2" class="mb-3">DIALOG-Small</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        :size="dialogInfo.size"
        class="mr-4"
        @click="
          () => {
            handleDialog(1, 'sm');
          }
        "
        >Small & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'sm');
          }
        "
        >Small & Delete</g-button
      >
    </div>

    <g-divider />

    <g-title :level="2" class="my-4">DIALOG-Middle</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'md');
          }
        "
        >middle & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'md');
          }
        "
        >middle & Delete</g-button
      >
    </div>

    <g-divider />
    
    <g-title :level="2" class="my-4">DIALOG-LARGE</g-title>
    <div class="flex justify-start mb-3">
      <g-button
        pill
        type="second"
        class="mr-4"
        :size="dialogInfo.size"
        @click="
          () => {
            handleDialog(1, 'lg');
          }
        "
        >Large & Comfirm</g-button
      >
      <g-button
        pill
        type="red"
        class="mr-4"
        @click="
          () => {
            handleDialog(2, 'lg');
          }
        "
        >Large & Delete</g-button
      >
    </div>
  </div>
</template>
