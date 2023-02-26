import type GameState from "@/app/Enums/GameState";

export default interface IStage {
    scoreLevel: number
    currentScore: number,
    isCompleted: boolean,
    stageNumber: number,
}