export default class WeatherDetails {
    humidity: string;
    cloudiness: string;
    wind: string;
    constructor(humidity: string, cloudiness: string, wind: string) {
        this.humidity = humidity;
        this.cloudiness = cloudiness;
        this.wind = wind;
    }
}