import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import Sun from './../../assets/weather_icons/sun.svg'

import { fetchWeather } from '../../actions/index'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: '#02005c'
        },
        title: {
            textAlign: 'left',
        },
        mainInfo: {
            textAlign: 'left',
        },
        detailInfo: {
            textAlign: 'left',
            margin: 'auto',
        },
        tempDetails: {
            borderTop: '1px solid #d0d0d0',
            marginTop: '10px',
            paddingTop: '10px',
        },
        verticallyCentered: {
            margin: 'auto 0',
        }
    }),
);

const Weather = () => {
    const classes = useStyles();
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchWeather())
    }, [])

    if (weather) {
        return (
            <Box className={classes.root}>
                <Grid container spacing={0} justify="space-evenly">
                    <Grid item container justify="space-evenly" xs={12}>
                        <Grid item xs={7}>
                            <Grid item className={classes.title}>
                                <Typography variant="h5">
                                    {weather.main.location}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {weather.main.description}
                                </Typography>
                            </Grid>
                            <Grid item className={classes.mainInfo} container direction="row">
                                <div>
                                    <img src={Sun} width='100px' alt="Sun" />
                                </div>
                                <div className={classes.verticallyCentered}>
                                    <Typography variant="h4">
                                        {`${weather.main.temp} °C`}
                                    </Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Grid item xs={5} className={classes.detailInfo}>
                            <Typography variant="subtitle1">
                                <p>{`Humidity: ${weather.details.humidity}%`}</p>
                                <p>{`Cloudness: ${weather.details.cloudiness}%`}</p>
                                <p>{`Wind: ${weather.details.wind} m/sec`}</p>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item container direction="row" justify="space-evenly" className={classes.tempDetails}>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Min ${weather.temperature.min} °C`}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Max ${weather.temperature.max} °C`}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Feels like ${weather.temperature.feelsLike} °C`}
                            </Typography>
                        </Grid>
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