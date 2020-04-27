export default class TemperatureDetails {
    min: number;
    max: number;
    feelsLike: number;
    constructor(min: string, max: string, feelsLike: string) {
        this.min = parseInt(min);
        this.max = parseInt(max);
        this.feelsLike = parseInt(feelsLike);
    }
}