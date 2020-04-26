import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import { fetchWeather } from '../../actions/index'


const Weather = () => {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    }, [])

    if (weather) {
        return (
            <Box>ł
                <Grid container spacing={0} justify="space-evenly">
                    <Grid item container justify="space-evenly" xs={12}>
                        <Grid item xs={8}>
                            <Grid item>Brussels</Grid>
                            <Grid item>18 C</Grid>
                        </Grid>
                        <Grid item xs={4}>
                        <p>{`Humidity ${weather.main.humidity}`}</p>
                        <p>{`Cloudness ${weather.clouds.all}`}</p>
                        <p>{`Wind ${weather.wind.speed}`}</p>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-evenly">
                    <Grid item>{`Min ${weather.main.temp_min}`}</Grid>
                    <Grid item>{`Max ${weather.main.temp_max}`}</Grid>
                    <Grid item>{`Feels like ${weather.main.feels_like}`}</Grid>
                    </Grid>
                </Grid>
            </Box>
        );
    } else {
        return (
            <div>Loading...</div>
        )
    }
};

export default Weather;