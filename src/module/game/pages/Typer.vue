
<template>
    <game-layout>
        <section v-if="gameState === GameState.GAME_END_FAIL" class="l-grid-center">
            <h-card :title="$t(`l.pg-typer-game-over-title-${gameOverTitleIndex}`)">
                <template #content>
                    {{ $t(`l.pg-typer-game-over-${gameOverTextIndex}`) }}
                </template>
                <template #footer>
                    <h-button @click="routeToScore(GameState.GAME_END_FAIL)">
                        {{ $t('l.common-continue') }}
                    </h-button>
                </template>
            </h-card>
        </section>
        <section v-else-if="gameState === GameState.GAME_END_WIN" class="l-grid-center">
            <h-card :title="$t(`l.pg-typer-game-over-title-${gameWinTitleIndex}`)">
                <template #content>
                    {{ $t(`l.pg-typer-game-over-${gameWinTextIndex}`) }}
                </template>
                <template #footer>
                    <h-button @click="routeToScore(GameState.GAME_END_WIN)">
                        {{ $t('l.common-continue') }}
                    </h-button>
                </template>
            </h-card>
        </section>
        <section v-else>
            <h2 class="u-text-center">
                {{ currentWord }}
            </h2>
            <div class="u-text-center" v-if="gameState !== GameState.GAME_IN_PROGRESS">
                {{ $t('l.pg-typer-type-start') }}
            </div>
            <h-input
                v-model="hashValue"
                @input="onWordGuess()"
                name="hash"
            />
        </section>
    </game-layout>
</template>
<script setup lang="ts">
import GameLayout from "@/app/layout/gameLayout.vue";
import HInput from '@/components/Input';
import GameState from '@/app/Enums/GameState';
import HCard from '@/components/Card';
import HButton from '@/components/Button';
import Engine from '@/services/Engine';
import GameStoreService from '@/services/GameStore';
import {computed, ref} from "vue";
import NameEnum from "@/app/router/NameEnum";
import {useRouter} from "vue-router";
import MessageService from "@/services/Message";

const Router = useRouter();
const hashValue = ref("");

const currentWord = computed<string>(() => {
    return GameStoreService.getCurrentWord();
});

const gameState = computed<GameState>(() => {
    return GameStoreService.getGameState();
});

const gameWinTitleIndex = computed<number>(() => {
    return MessageService.getTyperWinTitleIndex();
});

const gameOverTitleIndex = computed<number>(() => {
    return MessageService.getTyperGameOverTitleIndex();
});

const gameOverTextIndex = computed<number>(() => {
    return MessageService.getTyperGameOverTextIndex();
});

const gameWinTextIndex = computed<number>(() => {
    return MessageService.getTyperGameWinTextIndex();
});

function onWordGuess(): void {
    if(hashValue.value === GameStoreService.getCurrentWord()){
        Engine.checkWord(hashValue.value);
        hashValue.value = '';
    }
}

function routeToScore(state: GameState): void {
    GameStoreService.setGameState(state);
    Router.push(NameEnum.SCORE);
}

</script>
