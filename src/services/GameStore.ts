import {gameStore} from "@/app/stores/Game";
import type GameState from "@/app/Enums/GameState";
import type IStage from "@/app/stores/IStage";

class GameStore {
    public getGameState(): GameState {
        const store = gameStore();
        return store.getGameState;
    }

    public getCurrentWord(): string {
        const store = gameStore();
        return store.getCurrentWorld;
    }

    public getCurrentScore(): number {
        const store = gameStore();
        return store.getCurrentScore;
    }

    public getCurrentTime(): number {
        const store = gameStore();
        return store.getCurrentTime;
    }

    public getTimeElapsed(): number {
        const store = gameStore();
        return store.getTimeElapsed;
    }

    public getWordCount(): number {
        const store = gameStore();
        return store.getWordCount;
    }

    public setNewCurrentWord(word: string): void {
        const store = gameStore();
        store.setNewCurrentWord(word);
    }

    public setTime(number: number): void {
        const store = gameStore();
        store.setTime(number);
    }

    public setScore(number: number): void {
        const store = gameStore();
        store.setScore(number);
    }

    public setWordCount(number: number): void {
        const store = gameStore();
        store.setWordCount(number);
    }

    public setTimeElapsed(number: number): void {
        const store = gameStore();
        store.setTimeElapsed(number);
    }

    public setGameState(state: GameState): void {
        const store = gameStore();
        store.setGameState(state);
    }

    public addScore(number: number): void {
        const store = gameStore();
        store.addScore(number);
    }

    public addTime(number: number): void {
        const store = gameStore();
        store.addTime(number);
    }

    public addTimeElapsed(number: number): void {
        const store = gameStore();
        store.addTimeElapsed(number);
    }

    public addWordCount(number: number): void {
        const store = gameStore();
        store.addWordCount(number);
    }

    public setGameTotalScore(number: number): void {
        const store = gameStore();
        store.setTotalScore(number);
    }

    public addGameStage(stage: IStage): void {
        const store = gameStore();
        store.addGameStage(stage);
    }

    public emptyGameStages(): void {
        const store = gameStore();
        store.emptyGameStages();
    }

    public getTotalScore(): number {
        const store = gameStore();
        return store.getTotalScore;
    }

    public getProgress(): number {
        const store = gameStore();
        const totalScore: number = store.getTotalScore;
        return Math.round((store.getCurrentScore / totalScore * 100)) * 100 / 100;
    }

    public getCurrentGameStage(): number {
        const store = gameStore();
        return store.getCurrentGameStage;
    }
}

export default new GameStore();