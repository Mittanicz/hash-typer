import GameStoreService from '@/services/GameStore';
import GameState from "@/app/Enums/GameState";
import type IPastGame from "@/app/stores/IPastGame";
import ScoreStoreService from "@/services/ScoreStore";
import WordService from "@/services/Word";
import MathUtil from "@/Utils/Math";

class Engine {
    public checkWord(word: string): void {
        if(word === GameStoreService.getCurrentWord()){
            this.processNewWord();
        }
        if(word === 'start') {
            this.startInterval();
            GameStoreService.setGameState(GameState.GAME_IN_PROGRESS);
        }
    }

    public createGameRound(): void {
        const randomTotalScore = Math.round(MathUtil.randomNumberFromInterval(100,400));
        GameStoreService.setGameTotalScore(randomTotalScore);
        this.setGameStages(randomTotalScore);
    }

    private setGameStages(randomTotalScore: number): void {
        const scoreLevel = Math.round(randomTotalScore / 4);
        for (let i: number = 1; i < 5; i++) {
            GameStoreService.addGameStage({
                scoreLevel: scoreLevel * i,
                stageNumber: i,
                isCompleted: false,
                currentScore: 0
            });
        }
    }

    private startInterval(): void {
        const gameTick = setInterval(() => {
            this.processGameInterval(gameTick);
        }, 100);

    }

    private clearInterval(gameTick: number) {
        clearInterval(gameTick);
    }

    private processGameInterval(gameTick: number): void {
        GameStoreService.addTime(-100);
        GameStoreService.addTimeElapsed(100);
        if (this.ifTimerIsZero()) {
            this.clearInterval(gameTick);
            const gameStats: IPastGame = {
                score: GameStoreService.getCurrentScore(),
                timeElapsed: GameStoreService.getTimeElapsed(),
                wordCount: GameStoreService.getWordCount(),
                wordPerSecond: Math.round(((GameStoreService.getWordCount()
                    / GameStoreService.getWordCount()) * 1000) * 100) / 100
            };
            ScoreStoreService.addGameStats(gameStats);
            GameStoreService.setGameState(GameState.GAME_END_FAIL);
        }
        if(GameStoreService.getCurrentScore() >= GameStoreService.getTotalScore()) {
            GameStoreService.setGameState(GameState.GAME_END_WIN);
        }
    }

    public resetGameState(): void {
        GameStoreService.emptyGameStages();
        GameStoreService.setTime(10_000);
        GameStoreService.setGameTotalScore(0);
        GameStoreService.setScore(0);
        GameStoreService.setTimeElapsed(0);
        GameStoreService.setNewCurrentWord('start');
        GameStoreService.setGameState(GameState.GAME_START);
        GameStoreService.setWordCount(0);
    }

    private ifTimerIsZero(): boolean {
        return GameStoreService.getCurrentTime() <= 0;
    }

    private processNewWord(): void {
        GameStoreService.addScore(this.calculateScore());
        GameStoreService.addWordCount(1);
        GameStoreService.setNewCurrentWord(this.getRandomWord());
        this.calculateTime();
    }

    private calculateTime(): void {
        const word: string = GameStoreService.getCurrentWord();
        let totalTime: number = 1000;
        if (MathUtil.randomNumber(10) === 0) {
            GameStoreService.addTime(2000);
        }
        if (this.containsNumbers(word)) {
            totalTime += 1400;
        }
        if (this.containsSpecialCharacter(word)) {
            totalTime += 1800;
        }
 
        totalTime += word.length * 200;
        GameStoreService.addTime(totalTime);
    }

    private containsNumbers(word: string): boolean {
        return /[0-9]/.test(word);
    }

    private containsSpecialCharacter(word: string): boolean {
        return /[0-9]/.test(word);
    }

    private calculateScore(): number {
        return GameStoreService.getCurrentWord().length;
    }

    private getRandomWord(): string {
        let word: string = '';
        switch (GameStoreService.getCurrentGameStage()) {
        case 1:
            return WordService.getRandomWordInRange(4,4);
        case 2:
            return WordService.getRandomWordInRange(4,6);
        case 3:
            word = WordService.getRandomWordInRange(5,7);
            word = WordService.addRandomNumber(word);
            return word;
        case 4:
            word = WordService.getRandomWordInRange(6,8);
            word = WordService.addRandomChar(word);
            return word;
        default:
            return WordService.getRandomWordInRange(4,4);
        }
    }
}

export default new Engine();