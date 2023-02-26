import type GameState from "@/app/Enums/GameState";
import type IStage from "@/app/stores/IStage";

export default interface IGameState {
    gameState: GameState,
    currentWord: string,
    score: number,
    wordCount: number,
    timeElapsed: number,
    time: number,
    totalScore: number,
    stage: IStage[]
}