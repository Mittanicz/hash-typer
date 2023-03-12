<template>
    <main-layout>
        <h-section full-height>
            <div class="c-pageTitle">
                <div class="c-pageTitle__line" />
                <h1 class="c-pageTitle__title">
                    {{ $t('l.pg-highscores-title') }}
                </h1>
                <div class="c-pageTitle__line" />
            </div>
            <table
                v-if="hasScores"
                class="c-table"
            >
                <thead>
                    <tr>
                        <td class="c-table__head">
                            <h-icon
                                class="c-icon-primary"
                                :name="Icons.SCORE"
                            />
                            {{ $t('l.pg-highscores-table-score') }}
                        </td>
                        <td class="c-table__head">
                            <h-icon
                                class="c-icon-primary"
                                :name="Icons.CHART"
                            />
                            {{ $t('l.pg-highscores-table-wordCount') }}
                        </td>
                        <td class="c-table__head">
                            <h-icon
                                class="c-icon-primary"
                                :name="Icons.CLOCK"
                            />
                            {{ $t('l.pg-highscores-table-timeElapsed') }}
                        </td>
                        <td class="c-table__head">
                            <h-icon
                                class="c-icon-primary"
                                :name="Icons.STOPWATCH"
                            />
                            {{ $t('l.pg-highscores-table-wordsPerSeconds') }}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(score, index) in state.scores"
                        :key="index"
                    >
                        <td>
                            {{ score.score }}
                        </td>
                        <td>
                            {{ score.wordCount }}
                        </td>
                        <td>
                            {{ score.timeElapsed }}
                        </td>
                        <td>
                            {{ score.wordPerSecond }}
                        </td>
                    </tr>
                </tbody>
            </table>
            <h-card
                v-else
                :title="$t('l.pg-highscores-noData-title')"
            >
                <template #content>
                    {{ $t('l.pg-highscores-noData-paragraph') }}
                </template>
                <template #footer>
                    <div class="c-buttonGroup">
                        <h-button @click="routeToHome">
                            {{ $t('l.common-back') }}
                        </h-button>
                        <h-button @click="routeToGame">
                            {{ $t('l.common-play') }}
                        </h-button>
                    </div>
                </template>
            </h-card>
            <h-button
                v-if="hasScores"
                @click="routeToHome"
            >
                {{ $t('l.common-back') }}
            </h-button>
        </h-section>
    </main-layout>
</template>
<script setup lang="ts">
import MainLayout from "@/app/layout/mainLayout.vue";
import HButton from '@/components/Button';
import HSection from '@/components/Section';
import HCard from '@/components/Card';
import HIcon from '@/components/Icon';
import { useRouter } from 'vue-router';
import {computed, onMounted, reactive} from "vue";
import ScoreStoreService from "@/services/ScoreStore";
import Icons from "@/app/Enums/Icons";
import type HighScoresState from "@/module/game/model/IHighScoreState";
import NameEnum from "@/app/router/NameEnum";
import GameStoreService from "@/services/GameStore";
import GameState from "@/app/Enums/GameState";

const Router = useRouter();
const state: HighScoresState = reactive({scores:[]});
const hasScores = computed(() => {
    return state.scores.length > 0;
});
function routeToHome(): void {
    Router.push(NameEnum.HOMEPAGE);
}

function routeToGame(): void {
    GameStoreService.setGameState(GameState.GAME_START);
    Router.push(NameEnum.BRIEFING);
}

onMounted(() => {
    state.scores = ScoreStoreService.getPastGameStats();
});

</script>
