import {defineStore} from 'pinia';
import GameState from '@/app/Enums/GameState';
import type IGameState from "@/app/stores/IGameState";
import type IStage from "@/app/stores/IStage";

export const gameStore = defineStore('game', {
    state: (): IGameState => {
        return {
            currentWord: 'start',
            gameState: GameState.GAME_INIT,
            score: 0,
            wordCount: 0,
            timeElapsed: 0,
            time: 10_000, // 10 seconds
            totalScore: 0,
            stage: []
        };
    },
    getters: {
        getTotalScore(state): number {
            return state.totalScore;
        },
        getCurrentWorld(state): string {
            return state.currentWord;
        },
        getCurrentScore(state): number {
            return state.score;
        },
        getCurrentTime(state): number {
            return state.time;
        },
        getGameState(state): GameState {
            return state.gameState;
        },
        getWordCount(state): number {
            return state.wordCount;
        },
        getTimeElapsed(state): number {
            return state.timeElapsed;
        },
        getGameStages(state): IStage[] {
            return state.stage;
        },
        getCurrentGameStage(state): number {
            const stage = state.stage.find((stage) => stage.scoreLevel >= state.score);
            if(stage){
                return stage.stageNumber;
            }
            return 1;
        },
    },
    actions: {
        emptyGameStages(): void {
            this.stage = [];
        },
        addGameStage(stage: IStage): void {
            this.stage.push(stage);
        },
        addScore(number: number): void {
            this.score += number;
        },
        addTime(number: number): void {
            this.time += number;
        },
        addWordCount(number: number): void {
            this.wordCount += number;
        },
        addTimeElapsed(number: number): void {
            this.timeElapsed += number;
        },
        setTime(number: number): void {
            this.time = number;
        },
        setScore(number: number): void {
            this.score = number;
        },
        setTimeElapsed(number: number): void {
            this.timeElapsed = number;
        },
        setTotalScore(score: number): void {
            this.totalScore = score;
        },
        setNewCurrentWord(word: string): void {
            this.currentWord = word;
        },
        setGameState(state: GameState): void {
            this.gameState = state;
        },
        setWordCount(number: number): void {
            this.wordCount = number;
        },
    }
});

