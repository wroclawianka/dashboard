import openweathermap from "../apis/openweathermap";

import { FETCH_WEATHER, GET_POSITION } from './types'

export const fetchWeather = (position) => async dispatch => {
    const params = {
        lat: position.lat,
        lon: position.lon,
        units: 'metric',
        appid: '5ab21a7d11964ffa58b9f5966a91f6c6'
    }
    const response = await openweathermap.get('/weather', { params });
    dispatch({ type: FETCH_WEATHER, payload: response.data })
};


export const getPosition = () => async dispatch => {
    window.navigator.geolocation.getCurrentPosition((payload) => {
        dispatch({ type: GET_POSITION, payload: payload })
    }, (err) => {
        console.log(err);
        return;
    })
};