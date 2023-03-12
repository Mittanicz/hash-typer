<template>
    <main-layout>
        <h-section full-height>
            <div class="c-pageTitle">
                <div class="c-pageTitle__line" />
                <h1 class="c-pageTitle__title">
                    {{ $t('l.common-gameName') }}
                </h1>
                <div class="c-pageTitle__line" />
            </div>
            <h-card>
                <template #content>
                    <h-button
                        class="u-mb-20"
                        @click="routeToGame"
                    >
                        {{ $t('l.common-play') }}
                    </h-button>
                    <h-button
                        class="u-mb-20"
                        @click="routeToSettings"
                    >
                        {{ $t('l.common-settings') }}
                    </h-button>
                    <h-button
                        class="u-mb-20"
                        @click="routeToHighScores"
                    >
                        {{ $t('l.common-highscores') }}
                    </h-button>
                </template>
            </h-card>
        </h-section>
    </main-layout>
</template>
<script setup lang="ts">
import MainLayout from "@/app/layout/mainLayout.vue";
import HButton from '@/components/Button';
import HCard from '@/components/Card';
import HSection from '@/components/Section';
import NameEnum from "@/app/router/NameEnum";
import {useRouter} from 'vue-router';
import GameStoreService from "@/services/GameStore";
import GameState from "@/app/Enums/GameState";

const Router = useRouter();
function routeToGame(): void {
    GameStoreService.setGameState(GameState.GAME_START);
    Router.push(NameEnum.BRIEFING);
}

function routeToSettings(): void {
    Router.push(NameEnum.SETTINGS);
}

function routeToHighScores(): void {
    Router.push(NameEnum.HIGHSCORES);
}
</script>
