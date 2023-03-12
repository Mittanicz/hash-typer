<template>
    <button
        :data-cy="id"
        :class="buttonClasses"
        data-augmented-ui="tr-clip-x br-clip border border"
        :type="type"
        @click="onClick"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import {computed} from 'vue';

const props = defineProps({
    outline: Boolean,
    block: Boolean,
    large: Boolean,
    id: String,
    type: {
        type: String,
        default: ''
    },
});
const emits = defineEmits(['click']);

const buttonClasses = computed(() => ({
    'c-button': true,
    'c-button--outline': props.outline,
    'c-button--block': props.block,
    'c-button--large': props.large
}));

function onClick(): void {
    emits('click');
}
</script>