import openweathermap from "../apis/openweathermap";

import { FETCH_WEATHER } from './types'

export const fetchWeather = () => async dispatch => {
    const params = { //TODO: pass params
        q: 'Brussels,BE',
        units: 'metric',
        appid: '5ab21a7d11964ffa58b9f5966a91f6c6'
    }
    const response = await openweathermap.get('/weather', { params });
    dispatch({ type: FETCH_WEATHER, payload: response.data })
};
