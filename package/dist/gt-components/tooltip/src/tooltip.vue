<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    position: {
        type: String,
        default: 'right',
    },
});

const popStyleComputed = computed(() => {
    // console.log('in~?');

    let posi = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    };

    switch (props.position) {
        case 'right': {
            posi = {
                top: '0%',
                left: `calc(100% + 13px)`,
            };
            break;
        }
        case 'left': {
            posi = {
                top: '0%',
                right: `calc(100% + 13px)`,
            };
            break;
        }

        case 'top': {
            posi = {
                bottom: `calc(100% + 10px)`,
                left: '50%',
                transform: 'translateX(-50%)',
            };
            break;
        }
        case 'bottom': {
            posi = {
                top: `calc(100% + 10px)`,
                left: '50%',
                transform: 'translateX(-50%)',
            };
            break;
        }
    }

    return posi;
});

const isShow = ref(false);

const handleMouseover = (evt) => {
    // console.log(evt)
    isShow.value = true;
};

const handleMouseleave = (evt) => {
    isShow.value = false;
};
</script>
<script>
export default {
    name: 'GTooltip',
};
</script>
<template>
    <div class="gt-tooltip" @mouseover="handleMouseover" @mouseleave="handleMouseleave">
        <slot />
        <div class="tooltip-popup" :class="isShow ? [position] : [position, 'none']" :style="popStyleComputed">
            <slot name="content" />
        </div>
    </div>
</template>

<style lang="scss">
.gt-tooltip {
    width: fit-content;
    height: fit-content;
    @apply relative;
    .tooltip-popup {
        @apply absolute;
        width: fit-content;
        height: fit-content;
        background: #666666;
        color: #fbfbf9;
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0.65px;
        border-radius: 4px;
        padding: 7px 9px;
        opacity: 1;
        z-index: 10;
        transition: all 0.3s ease-in-out;

        &.none {
            opacity: 0;
            z-index: -1;
        }

        &::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            border-style: solid;
            border-width: 0 7px 12.1px 7px;
            border-color: transparent transparent #666666 transparent;
        }

        &.right {
            &::before {
                left: -13px;
                top: 5px;
                transform: rotate(-90deg) translateX(-50%);
            }
        }

        &.left {
            &::before {
                right: -13px;
                top: 11px;
                transform: rotate(90deg);
            }
        }

        &.top {
            &::before {
                bottom: -12px;
                left: 50%;
                transform: rotate(180deg) translateX(50%);
            }
        }

        &.bottom {
            &::before {
                top: -12px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    }
}
</style>
