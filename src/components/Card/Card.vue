<template>
    <section class="c-card">
        <div
            v-if="props.bracket"
            class="c-card__bracket"
            data-augmented-ui="tl-clip-x bl-clip  r-clip-y border"
        />
        <div
            class="c-card__content"
            data-augmented-ui="br-clip border"
        >
            <h1
                v-if="props.title"
                class="c-card__title"
            >
                {{ props.title }}
            </h1>
            <hr
                v-if="props.title"
                class="c-card__line"
            >
            <slot name="content" />
            <hr
                v-if="props.title"
                class="c-card__line"
            >
            <div
                v-if="$slots.footer"
                class="c-card__footer"
            >
                <slot name="footer" />
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">

const props = defineProps({
    title: String,
    bracket: {
        type: Boolean,
        default: true,
    },
});

</script>