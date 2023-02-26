<template>
    <div :class="formRowClasses" @click="state.hasValue = true">
        <div data-augmented-ui="tr-clip bl-clip border">
            <input
                class="c-input"
                :type="type"
                :value="modelValue"
                :name="name"
                @input="onInput"
                @blur="onBlur"
                :readonly="readonly"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive, toRef} from 'vue';
import input from "@/components/Input/index";

const props = defineProps({
    readonly: Boolean,
    modelValue: String,
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
});
const emits = defineEmits(['update:modelValue', 'input']);
const name = toRef(props, 'name');


const formRowClasses = computed(() => ({
    'c-formRow': true,
    'is-active': state.hasValue,
}));

const state = reactive({
    hasValue: false,
    value: ''
});

const onInput = (event: any) => {
    const value = event.target.value;
    if (value.length > 0) {
        state.hasValue = true;
    } else {
        state.hasValue = false;
    }
    state.value = value;
    emits('update:modelValue', value);
    emits('input', value);
};

const onBlur = () => {
    if (state.value.length > 0) {
        state.hasValue = true;
    } else {
        state.hasValue = false;
    }
};


</script>
