
<template>
    <main-layout>
        <h-section full-height>
            <h-card :title="$t('l.pg-briefing-title')">
                <template #content>
                    {{ $t(`l.pg-briefing-paragraph-${messageIndex}`) }}
                </template>
                <template #footer>
                    <h-button @click="routeToGame">
                        {{ $t('l.common-continue') }}
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
import {computed, onMounted, ref} from "vue";
import Engine from "@/services/Engine";
import GameStoreService from "@/services/GameStore";
import MessageService from "@/services/Message";
import GameState from "@/app/Enums/GameState";

const totalScore = ref(0);
const Router = useRouter();
function routeToGame(): void {
    GameStoreService.setGameState(GameState.GAME_IN_PROGRESS);
    Router.push(NameEnum.TYPER);
}

const messageIndex = computed<number>(() => {
    return MessageService.getBriefingMessageIndex();
});
function getGameRoundData(): void {
    totalScore.value = GameStoreService.getTotalScore();
}

onMounted(() => {
    Engine.createGameRound();
    getGameRoundData();
});

</script>
