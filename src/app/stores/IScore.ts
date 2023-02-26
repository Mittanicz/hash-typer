import type IPastGame from "@/app/stores/IPastGame";
import type ITotalScore from "@/app/stores/ITotalScore";

export default interface IScore {
    pastGames: Array<IPastGame>,
    totalScore: Array<ITotalScore>,
}