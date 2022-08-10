<template>
  <div>
    <g-title :level="1" class="mb-3">按鈕</g-title>

    <div class="mb-3 px-2 w-full md:w-3/4">
      <div class="mb-8">
        <g-title :level="2" class="mb-3">PILL</g-title>
        <div class="flex justify-between mb-3">
          <g-button pill>按鈕</g-button>
          <g-button pill type="yellow">按鈕</g-button>
          <g-button pill type="red">按鈕</g-button>
          <g-button pill type="white">按鈕</g-button>
        </div>
      </div>
      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 1</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat>按鈕</g-button>
          <g-button flat type="yellow">按鈕</g-button>
          <g-button flat type="red">按鈕</g-button>
          <g-button flat type="white">按鈕</g-button>
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">FLAT - 2</g-title>

        <div class="flex justify-between mb-3">
          <g-button flat><g-icon name="chevron-left" />上一頁</g-button>
          <g-button flat type="yellow"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
          <g-button flat type="red"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
          <g-button flat type="white"
            ><g-icon name="chevron-left" />上一頁</g-button
          >
        </div>
        <div class="flex justify-between mb-3">
          <g-button flat><g-icon name="chevron-right" />下一頁</g-button>
          <g-button flat type="yellow"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
          <g-button flat type="red"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
          <g-button flat type="white"
            ><g-icon name="chevron-right" />下一頁</g-button
          >
        </div>
      </div>

      <div class="mb-8">
        <g-title :level="2" class="mb-3">ROUND</g-title>
        <div class="w-full flex justify-between mb-3">
          <g-button round>按鈕</g-button>
          <g-button round type="yellow">按鈕</g-button>
          <g-button round type="red">按鈕</g-button>
          <g-button round type="black">按鈕</g-button>
          <g-button round type="white">按鈕</g-button>
        </div>
        <g-title :level="2" class="mb-3">ROUND-ICON</g-title>
        <div class="w-full flex justify-start mb-3 p-4">
          <g-button round type="black" icon="file" class="mr-4" />
        </div>
      </div>
    </div>
  </div>
</template>
