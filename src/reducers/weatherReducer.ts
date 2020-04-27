import _ from 'lodash';
import {
    FETCH_WEATHER
} from "../actions/types";
import MainInfo from '../models/weather/mainInfo';
import TemperatureDetails from '../models/weather/temperature';
import WeatherDetails from '../models/weather/details'
import WeatherData from '../models/weather/weatherInfo'


export default (state = null, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            const data = parseWeatherPayload(action.payload);
            console.log(data);
            return { ...data };
        default:
            return state;
    }
};

// helpers
function parseWeatherPayload(payload: any) {
    const main = payload.main;
    const location: string = payload.name
    const description: string = (payload.weather && payload.weather[0]) ? payload.weather[0].main : "";
    const mainInfo = new MainInfo(location, description, main.temp)
    const temperature = new TemperatureDetails(main.temp_min, main.temp_min, main.feels_like);
    const details = new WeatherDetails(main.humidity, payload.clouds.all, payload.wind.speed)
    return new WeatherData(mainInfo, temperature, details)
}