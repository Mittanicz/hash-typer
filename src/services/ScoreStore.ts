import {scoreStore} from "@/app/stores/Score";
import type IPastGame from "@/app/stores/IPastGame";

class GameStore {
    public addGameStats(score: IPastGame): void {
        const store = scoreStore();
        store.addGameScore(score);
    }

    public getLastGameStats(): IPastGame {
        const store = scoreStore();
        return store.getLastGameStats;
    }

    public getPastGameStats(): IPastGame[] {
        const store = scoreStore();
        return store.getPastGameStats;
    }
}

export default new GameStore();