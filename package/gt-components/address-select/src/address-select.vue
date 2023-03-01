<script>
export default {
    name: 'GAddressSelect',
};
</script>
<script setup>
import { computed, reactive, ref, watch } from 'vue';
import TWJSON from './tw.json';

const props = defineProps({
    modelValue: {},
    labelText: {
        type: String,
        default: null,
    },
});

// console.log('TWJSON', TWJSON);
const emit = defineEmits(['update:modelValue']);

const valueReative = reactive(
    props.modelValue.split('-').length === 3
        ? {
              city: props.modelValue.split('-')[0] ? '' + props.modelValue.split('-')[0] : TWJSON[0].name,
              district: props.modelValue.split('-')[1]
                  ? '' + props.modelValue.split('-')[1]
                  : TWJSON[0].districts[0].name,
              last: props.modelValue.split('-')[2] ? '' + props.modelValue.split('-')[2] : '',
          }
        : {
              city: '請選擇',
              district: '請選擇',
              last: props.modelValue,
          }
);

const cityOptions = TWJSON.map((item) => ({ label: item.name, value: item.name }));

const districtOptions = computed(() => {
    return valueReative.city && valueReative.district
        ? TWJSON[TWJSON.findIndex((item) => item.name === valueReative.city)]?.districts.map((dItem) => ({
              label: dItem.name,
              value: dItem.name,
          }))
        : '';
});

watch(
    () => valueReative.city,
    () => {
        if (valueReative.city !== '請選擇') {
            let newDistrict = TWJSON[TWJSON.findIndex((item) => item.name === valueReative.city)].districts[0].name;
            valueReative.district = newDistrict;
        }
    }
);

watch(
    valueReative,
    () => {
        // console.log('in 2')
        let address = `${valueReative.city !== '請選擇' ? valueReative.city + '-' : ''}${
            valueReative.district !== '請選擇' ? valueReative.district + '-' : ''
        }${valueReative.last}`;
        // console.log(address);
        emit('update:modelValue', address);
    },
    { deep: true }
);
</script>
<template>
    <div class="gt-form-item-wrapper">
        <div v-if="labelText" class="label">{{ labelText }}</div>
        <div class="address-select-box">
            <div class="row-item">
                <g-dropdown v-model="valueReative.city" :options="cityOptions">
                    <g-dropdown-item
                        v-for="item in cityOptions"
                        :key="'city-' + item.label"
                        :label="item.label"
                        :value="item.value"
                        :handleValChange="handleCity"
                    />
                </g-dropdown>

                <g-dropdown v-model="valueReative.district" :options="districtOptions" :isDistrict="true">
                    <g-dropdown-item
                        v-for="item in districtOptions"
                        :key="'district-' + item.label"
                        :label="item.label"
                        :value="item.value"
                    />
                </g-dropdown>
            </div>
            <div class="row-item">
                <g-input class="road" v-model="valueReative.last" placeholder="地址" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.gt-form-item-wrapper {
    .address-select-box {
        @apply flex flex-col justify-between items-center;
        gap: 10px;
        flex-grow: 2;
        .row-item {
            @apply flex justify-between items-center w-full;
            gap: 10px;
            .road {
                flex-grow: 2;
            }
        }
        .gt-dropdown .gt-dropdown-items {
            max-height: 25vh;
            overflow-y: scroll;
            &::-webkit-scrollbar {
                width: 5px;
                height: 5px;
                background-color: #d9d9d9;
                border-radius: 5px;
            }
            &::-webkit-scrollbar-thumb {
                border-radius: 5px;
                background-color: #aaaaaa;
                &:hover {
                    background-color: #666666;
                }
            }
        }
    }
}
</style>
