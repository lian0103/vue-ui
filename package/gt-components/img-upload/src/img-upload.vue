<script setup>
import { ref } from 'vue';
import GUploadIcon from '../../../components/GUploadIcon.vue';
import GButtonFile from '../../../components/GButtonFile.vue';
import DropZone from '../../../components/DropZone.vue';

const fileInputForm = ref();
const img = ref(null);
const isLoading = ref(false);
const imgLoaded = ref(false);

const emit = defineEmits(['file']);

const handleClick = () => {
  if (!imgLoaded.value && !img.value) {
    fileInputForm.value['imgInput'].click();
  }
};

const handleFile = (file) => {
  isLoading.value = true;
  let reader = new FileReader();

  reader.onload = (e) => {
    img.value = e.target.result;
    imgLoaded.value = true;
    isLoading.value = false;
    emit('file', file);
  };
  reader.readAsDataURL(file);
};

const handleDropFile = (files) => {
  if (!files.length || !files[0]) return false;
  handleFile(files[0]);
};

const onFileChange = (evt) => {
  let files = evt.target.files || evt.dataTransfer.files;
  if (!files.length || !files[0]) return false;

  handleFile(files[0]);
};

const handleRemove = () => {
  imgLoaded.value = false;
  img.value = null;
  fileInputForm.value.reset();
};
</script>
<script>
export default {
  name: 'GImgUpload',
};
</script>
<template>
  <drop-zone
    class="gt-img-upload-wrapper"
    @files-dropped="handleDropFile"
    #default="{ dropZoneActive }"
  >
    <div
      class="gt-img-upload"
      :class="dropZoneActive ? 'zone-active' : ''"
      @dragover.prevent="() => {}"
      @click="handleClick"
    >
      <div v-show="!isLoading && !imgLoaded" class="text">拖曳上傳選擇圖片</div>
      <g-upload-icon v-if="isLoading" class="mr-2" :percent="0" auto />
      <g-button-file
        v-if="imgLoaded"
        class="deleteIcon"
        name="trash"
        @click.stop="handleRemove"
      />
      <div class="imgLoaded">
        <img v-show="imgLoaded" :src="img" alt="img" />
      </div>
      <form action="" ref="fileInputForm" class="none">
        <input name="imgInput" type="file" hidden @change="onFileChange" />
      </form>
    </div>
  </drop-zone>
</template>
