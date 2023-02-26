<template>
    <main-layout>
        <h-section full-height>
            <div class="c-pageTitle">
                <div class="c-pageTitle__line" />
                <h1 class="c-pageTitle__title">
                    {{ $t('l.pg-settings-title') }}
                </h1>
                <div class="c-pageTitle__line" />
            </div>
            <h-select
                :label="'Language'"
                :options="languagesOptions"
                :model-value="currentLanguage"
                @input="updateLanguage"
            />
            <h-select
                :label="'Theme'"
                :options="themeOptions"
                :model-value="currentTheme"
                @input="updateTheme"
            />
            <h-button @click="routeBack">
                {{ $t('l.common-back') }}
            </h-button>
        </h-section>
    </main-layout>
</template>
<script setup lang="ts">
import MainLayout from "@/app/layout/mainLayout.vue";
import HButton from '@/components/Button';
import HSelect from '@/components/Select';
import HSection from '@/components/Section';
import { useI18n } from "vue-i18n";
import { useRouter } from 'vue-router';
import Themes from "@/app/Common/Themes";
import Languages from "@/translations/Languages";
import UserStore from "@/services/UserStore";
import {onMounted, ref} from "vue";

const Router = useRouter();
const t = useI18n();
const languagesOptions = Languages;
const themeOptions = Themes;
const currentLanguage = ref("en");
const currentTheme = ref("sky");
function routeBack() {
    Router.go(-1);
}

function updateLanguage(lang: string): void {
    currentLanguage.value = lang;
    t.locale.value = lang;
    UserStore.setLanguage(lang);
}

function updateTheme(theme: string): void {
    currentTheme.value = theme;
    UserStore.setTheme(theme);
}

onMounted(() => {
    currentLanguage.value = UserStore.getLanguage();
    currentTheme.value = UserStore.getTheme();
});

</script>
