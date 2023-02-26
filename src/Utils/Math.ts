class MathUtil {
    public randomNumber(topNumber: number): number {
        return Math.floor(Math.random() * topNumber);
    }

    public randomNumberFromInterval(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

export default new MathUtil();