<script setup></script>
<template>
    <g-title :level="2" class="mb-4">position:right</g-title>
    <div class="tip-demo">
        <g-tooltip position="right">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
        <g-tooltip position="right">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />

    <g-title :level="2" class="mb-4">position:left</g-title>
    <div class="tip-demo">
        <g-tooltip position="left">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="left">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
    <g-title :level="2" class="mb-4">position:top</g-title>

    <div class="tip-demo">
        <g-tooltip position="top">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="top">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
    <g-title :level="2" class="mb-4">position:bottom</g-title>
    <div class="tip-demo">
        <g-tooltip position="bottom">
            <g-button pill iconClasses="fas fa-user iconWidth">按鈕</g-button>
            <template #content> 123 </template>
        </g-tooltip>

        <g-tooltip position="bottom">
            <g-title :level="1">hello</g-title>
            <template #content>
                <div class="tipbox">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam, ipsum?</div>
            </template>
        </g-tooltip>
    </div>

    <g-divider />
</template>

<style lang="scss">
.tip-demo {
    @apply w-full flex justify-around;
}

.tipbox {
    width: 200px;
}
</style>
