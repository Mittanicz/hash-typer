import words from "@/app/data/words";
import MathUtil from "@/Utils/Math";
class Word {
    private wordList = words;
    public getRandomWordInRange(min: number, max: number): string {
        const randomNumber = MathUtil.randomNumberFromInterval(min,max);
        const wordsArray: string[] = this.wordList.filter((word: string) => word.length == randomNumber);
        const pickedWord: string = wordsArray[Math.floor(Math.random() * wordsArray.length)];
        this.removeWordFromList(pickedWord);
        return pickedWord;
    }

    public addRandomNumber(word: string): string {
        const numbers = [1,2,3,4,5,6,7,8,9,0];
        const index: number = MathUtil.randomNumberFromInterval(0, numbers.length);
        const wordIndex: number = MathUtil.randomNumberFromInterval(0, word.length);
        return this.setCharAt(word,wordIndex,numbers[index]);
    }

    public addRandomChar(word: string): string {
        const numbers = ['/','@','(',')','!','#','$','%','&','*','-','=','_'];
        const index: number = MathUtil.randomNumberFromInterval(0, numbers.length);
        const wordIndex: number = MathUtil.randomNumberFromInterval(0, word.length);
        return this.setCharAt(word,wordIndex,numbers[index]);
    }

    private setCharAt(word: string, index: number, char: number | string): string {
        return word.substring(0,index) + char + word.substring(index+1);
    }

    private removeWordFromList(pickedWord: string): void {
        this.wordList = this.wordList.filter((item: string) => {
            return item !== pickedWord;
        });
    }
}


export default new Word();