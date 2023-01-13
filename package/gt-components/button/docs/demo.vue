<template>
    <div>
        <g-title :level="1" class="mb-3">按鈕</g-title>

        <div class="mb-3 px-2 w-full">
            <g-title :level="2" class="mb-3">自定義icon按鈕 ex: font-awesome v5.15.4 (fas fa-user)</g-title>
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <g-divider />
            <g-title :level="2" class="mb-3">loading</g-title>
            <div class="flex justify-between mb-3">
                <g-button pill iconClasses="fas fa-search" :isLoading="true">按鈕</g-button>
                <g-button pill iconClasses="fas fa-search" :isLoading="true" type="yellow">按鈕</g-button>
                <g-button pill iconClasses="fas fa-search" :isLoading="true" type="red">按鈕</g-button>
            </div>
            <g-divider />
            <g-title :level="2" class="mb-3">icon left</g-title>
            <div class="flex justify-between mb-3">
                <g-button pill iconClasses="fas fa-search">按鈕</g-button>
                <g-button flat iconClasses="fas fa-search">按鈕</g-button>
            </div>
            <g-divider />
            <g-title :level="2" class="mb-3">icon right</g-title>
            <div class="flex justify-between mb-3">
                <g-button pill iconClasses="fas fa-search" iconPosition="right">按鈕</g-button>
                <g-button flat iconClasses="fas fa-search" iconPosition="right">按鈕</g-button>
            </div>

            <g-divider />
            <g-title :level="2" class="mb-3">width 200</g-title>
            <g-button pill :width="200">按鈕</g-button>
            <g-divider />

            <g-title :level="2" class="mb-3">PILL</g-title>
            <div class="flex justify-between mb-3">
                <g-button pill>按鈕</g-button>
                <g-button pill type="green">按鈕</g-button>
                <g-button pill type="yellow">按鈕</g-button>
                <g-button pill type="red">按鈕</g-button>
                <g-button pill type="white">按鈕</g-button>
            </div>
            <g-divider />
            <g-title :level="2" class="mb-3">FLAT</g-title>

            <div class="flex justify-between mb-3">
                <g-button flat>按鈕</g-button>
                <g-button flat type="green">按鈕</g-button>
                <g-button flat type="yellow">按鈕</g-button>
                <g-button flat type="red">按鈕</g-button>
                <g-button flat type="white">按鈕</g-button>
            </div>
            <g-divider />
            <g-title :level="2" class="mb-3">FLAT - no hover</g-title>

            <div class="flex justify-between mb-3">
                <g-button flat :flatHover="false">按鈕</g-button>
                <g-button flat type="green" :flatHover="false">按鈕</g-button>
                <g-button flat type="yellow" :flatHover="false">按鈕</g-button>
                <g-button flat type="red" :flatHover="false">按鈕</g-button>
                <g-button flat type="white" :flatHover="false">按鈕</g-button>
            </div>
            <g-divider />
            <g-title :level="2" class="mb-3">FLAT with icon</g-title>

            <div class="flex justify-between mb-3">
                <g-button flat><g-icon name="chevron-left" />上一頁</g-button>
                <g-button flat type="green"><g-icon name="chevron-left" />上一頁</g-button>
                <g-button flat type="yellow"><g-icon name="chevron-left" />上一頁</g-button>
                <g-button flat type="red"><g-icon name="chevron-left" />上一頁</g-button>
                <g-button flat type="white"><g-icon name="chevron-left" />上一頁</g-button>
            </div>
            <div class="flex justify-between mb-3">
                <g-button flat><g-icon name="chevron-right" />下一頁</g-button>
                <g-button flat type="green"><g-icon name="chevron-right" />下一頁</g-button>
                <g-button flat type="yellow"><g-icon name="chevron-right" />下一頁</g-button>
                <g-button flat type="red"><g-icon name="chevron-right" />下一頁</g-button>
                <g-button flat type="white"><g-icon name="chevron-right" />下一頁</g-button>
            </div>
        </div>

        <g-divider />
        <g-title :level="2" class="mb-3">ROUND</g-title>
        <div class="flex justify-between">
            <g-button round>按鈕</g-button>
            <g-button round type="green">按鈕</g-button>
            <g-button round type="yellow">按鈕</g-button>
            <g-button round type="red">按鈕</g-button>
            <g-button round type="black">按鈕</g-button>
            <g-button round type="white">按鈕</g-button>
        </div>
        <g-divider />
        <g-title :level="2" class="mb-3">ROUND-ICON</g-title>
        <div class="w-full flex justify-start mb-3 p-4">
            <g-button round type="black" icon="file" class="mr-4" iconNarrowPadding />
        </div>
    </div>
</template>

<style lang="scss">
.iconWidth {
    width: 12px !important;
    margin-right: 4px;
}
</style>
>
