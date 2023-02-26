<template>
    <div class="c-formRow">
        <label :for="name" class="c-label">
            {{ label }}
        </label>
        <select
            class="c-select"
            :name="name"
            :value="props.modelValue"
            @input="selectedOptionNative($event.target.value)"
        >
            <option
                v-for="(option) of props.options"
                :value="option.value"
                :key="option.value"
                :selected="option.value === selected"
            >
                {{ option.label }}
            </option>
        </select>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    modelValue: [String, Object],
    selected: [String, Number],
    options: Array,
    label: String,
    name: String,
});
const emits = defineEmits(['update:modelValue', 'input']);

function selectedOptionNative(value: any): void {
    emits('input', value);
    emits('update:modelValue', value);
}
</script>
