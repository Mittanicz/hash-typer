import Math from "@/Utils/Math";

class Message {
    public getBriefingMessageIndex(): number {
        return Math.randomNumberFromInterval(1, 3);
    }

    public getTyperWinTitleIndex(): number {
        return Math.randomNumberFromInterval(1, 3);
    }

    public getTyperGameOverTitleIndex(): number {
        return Math.randomNumberFromInterval(1, 3);
    }

    public getTyperGameOverTextIndex(): number {
        return Math.randomNumberFromInterval(1, 4);
    }

    public getTyperGameWinTextIndex(): number {
        return Math.randomNumberFromInterval(1, 4);
    }
}

export default new Message();