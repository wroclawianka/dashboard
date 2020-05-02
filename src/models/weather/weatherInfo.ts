import MainInfo from './mainInfo';
import WeatherDetails from './details';
import TemperatureDetails from './temperature';

export default class WeatherData {
    main: MainInfo;
    temperature: TemperatureDetails;
    details: WeatherDetails;
    constructor(main: MainInfo, temperature: TemperatureDetails, details: WeatherDetails) {
        this.main = main;
        this.temperature = temperature;
        this.details = details;
    }
}