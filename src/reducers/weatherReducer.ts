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
    const icon: string = findWatherIcon(payload.weather[0].id);
    const mainInfo = new MainInfo(location, description, main.temp, icon)
    const temperature = new TemperatureDetails(main.temp_min, main.temp_min, main.feels_like);
    const details = new WeatherDetails(main.humidity, payload.clouds.all, payload.wind.speed)
    return new WeatherData(mainInfo, temperature, details)
}

function findWatherIcon(id: number) {
    if (id >= 200 && id < 300) return "200" // tunderstorm
    if (id >= 300 && id < 400) return "300" // drizzle
    if (id >= 500 && id < 600) return "500"; // rain
    if (id >= 600 && id < 700) return "600"; // snow
    if (id >= 700 && id < 800) return "700"; // atmosphere
    if (id === 800) return "800"; // clear
    if (id > 800) return "801" // clouds
    return "100"
}
