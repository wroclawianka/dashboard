export default class TemperatureDetails {
    min: string;
    max: string;
    feelsLike: string;
    constructor(min: string, max: string, feelsLike: string) {
        this.min = min;
        this.max = max;
        this.feelsLike = feelsLike;
    }
}