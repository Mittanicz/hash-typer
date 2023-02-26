<template>
    <header class="l-gameHeader" data-augmented-ui="border">
        <section class="l-gameHeader__content">
            <div>
                {{ $t('l.common-score-with-placeholder', [currentScore]) }}
            </div>
            <div>
                {{ currentTime }}s
            </div>
        </section>
        <section class="c-progressBar">
            <div class="c-progressBar__column">
                <div
                    class="c-progressBar__progress"
                    :style="`background: linear-gradient(90deg, var(--primaryColor) ${gameProgress}%,
                      var(--progressBarColor) ${gameProgress}%, var(--progressBarColor) 100%)` "
                />
                <div class="c-progressBar__text">
                    {{ $t('l.common-seed-completion', [gameProgress]) }}
                </div>
            </div>
        </section>
    </header>
    <main class="l-game">
        <slot />
    </main>
</template>
<script setup lang="ts">
import GameStoreService from '@/services/GameStore';
import moment from "moment";
import {computed} from "vue";

const currentScore = computed(() => {
    return GameStoreService.getCurrentScore();
});

const gameProgress = computed(() => {
    return GameStoreService.getProgress();
});

const currentTime = computed(() => {
    return moment(GameStoreService.getCurrentTime()).format("ss:S");
});


</script>
