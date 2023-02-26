
<template>
    <div :class="appClasses">
        <RouterView />
    </div>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import UserStore from "@/services/UserStore";
import {computed, onMounted, ref} from "vue";

const currentTheme = ref("sky");
const appClasses = computed(() => {
    const theme = UserStore.getTheme();
    return `l-app theme-${theme}`;
});
onMounted(() => {
    currentTheme.value = UserStore.getTheme();
});
</script>
