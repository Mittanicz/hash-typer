
<template>
    <game-layout>
        <h-card
            :bracket="false"
            :title="gameState === GameState.GAME_END_WIN
                ? $t('l.pg-score-title-win')
                : $t('l.pg-score-title-lost')"
        >
            <template #content>
                <span>
                    {{ $t('l.pg-score-paragraph') }}
                </span>
                <hr class="c-card__line">
                <ul class="ul-featuresList">
                    <li class="ul-featuresList__item">
                        <div
                            class="ul-featuresList__icon"
                            data-augmented-ui="all-hex border"
                        >
                            <h-icon :name="Icons.SCORE" />
                        </div>
                        {{ $t('l.pg-score-score', [finalScore.score]) }}
                    </li>
                    <li class="ul-featuresList__item">
                        <div
                            class="ul-featuresList__icon"
                            data-augmented-ui="all-hex border"
                        >
                            <h-icon :name="Icons.CHART" />
                        </div>
                        {{ $t('l.pg-score-word-count', [finalScore.wordCount]) }}
                    </li>
                    <li class="ul-featuresList__item">
                        <div
                            class="ul-featuresList__icon"
                            data-augmented-ui="all-hex border"
                        >
                            <h-icon :name="Icons.CLOCK" />
                        </div>
                        {{ $t('l.pg-score-time-elapsed', [elapsedTime]) }}
                    </li>
                    <li class="ul-featuresList__item">
                        <div
                            class="ul-featuresList__icon"
                            data-augmented-ui="all-hex border"
                        >
                            <h-icon :name="Icons.STOPWATCH" />
                        </div>
                        {{ $t('l.pg-score-word-per-second', [calculateWPS]) }}
                    </li>
                </ul>
            </template>
            <template #footer>
                <h-button @click="handleEndGame">
                    {{ $t('l.common-continue') }}
                </h-button>
            </template>
        </h-card>
    </game-layout>
</template>
<script setup lang="ts">
import GameLayout from "@/app/layout/gameLayout.vue";
import {computed, onMounted, reactive} from "vue";
import ScoreStoreService from "@/services/ScoreStore";
import moment from "moment/moment";
import HButton from '@/components/Button';
import HCard from '@/components/Card';
import HIcon from '@/components/Icon';
import NameEnum from "@/app/router/NameEnum";
import {useRouter} from "vue-router";
import Engine from "@/services/Engine";
import GameStoreService from "@/services/GameStore";
import Icons from "@/app/Enums/Icons";
import GameState from '@/app/Enums/GameState';

const Router = useRouter();
const finalScore = reactive({
    score: 0,
    wordCount: 0,
    timeElapsed: 0
});

const gameState = computed<GameState>(() => {
    return GameStoreService.getGameState();
});

const calculateWPS = computed<number>(() => {
    return Math.round(((finalScore.wordCount / finalScore.timeElapsed) * 1000) * 100) / 100;
});

const elapsedTime = computed<string>(() => {
    return moment(finalScore.timeElapsed).format("ss:SS");
});

function handleEndGame(): void {
    Engine.resetGameState();
    Router.push(NameEnum.HOMEPAGE);
}
onMounted(() => {
    Object.assign(finalScore, ScoreStoreService.getLastGameStats());
});

</script>
