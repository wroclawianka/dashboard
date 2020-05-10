import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { fetchWeather } from '../../../actions'
import WeatherDetails from './WeatherDetails'

const WeatherPanel = () => {
    const dispatch = useDispatch();
    const position = useSelector(state => state.position);
    useEffect(() => dispatch(fetchWeather({...position})));

    if (position) {
       return <WeatherDetails/>
    } else {
        return (
            <div>Waiting for geolocation permission...</div>
        )
    }
};

export default WeatherPanel;