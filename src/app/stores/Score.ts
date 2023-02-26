import {defineStore} from 'pinia';
import type IPastGame from "@/app/stores/IPastGame";
import type IScore from "@/app/stores/IScore";

export const scoreStore = defineStore('score', {
    state: (): IScore => {
        return {
            pastGames: [],
            totalScore: []
        };
    },
    persist: true,
    getters: {
        getLastGameStats(state): IPastGame {
            return state.pastGames[state.pastGames.length -1];
        },
        getPastGameStats(state): IPastGame[] {
            return state.pastGames;
        },
    },
    actions: {
        addGameScore(pastGame: IPastGame): void {
            this.pastGames.push(pastGame);
        },
    }
});

