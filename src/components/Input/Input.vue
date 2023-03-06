<template>
    <div class="c-formRow">
        <div data-augmented-ui="tr-clip bl-clip border">
            <input
                class="c-input"
                :type="type"
                :value="modelValue"
                :name="name"
                @input="onInput"
            >
        </div>
    </div>
</template>

<script setup lang="ts">
import {computed, reactive, toRef} from 'vue';
import input from "@/components/Input/index";

const props = defineProps({
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
const state = reactive({
    value: ''
});

const onInput = (event: any) => {
    const value = event.target.value;
    state.value = value;
    emits('update:modelValue', value);
    emits('input', value);
};

</script>
