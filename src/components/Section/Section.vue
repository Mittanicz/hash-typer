<template>
    <section :class="sectionClasses">
        <slot />
    </section>
</template>
<script setup lang="ts">
import {computed} from "vue";

const props = defineProps({
    fullHeight: Boolean,
});

const sectionClasses = computed(() => ({
    'l-section': true,
    'l-section--fullHeight': props.fullHeight,
}));

</script>