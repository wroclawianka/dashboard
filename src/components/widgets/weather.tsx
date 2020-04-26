import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { fetchWeather } from '../../actions/index'

const useStyles = makeStyles(() =>
    createStyles({
        title: {
            textAlign: 'left',
        },
        mainInfo: {
            textAlign: 'left',
        },
        detailInfo: {
            textAlign: 'left',
        },
        tempDetails: {
            borderTop: '1px solid #d0d0d0',
            marginTop: '10px',
            paddingTop: '10px',
        },
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
        console.log(weather)
        return (
            <Box>
                <Grid container spacing={0} justify="space-evenly">
                    <Grid item container justify="space-evenly" xs={12}>
                        <Grid item xs={8}>
                            <Grid item className={classes.title}>
                                <Typography variant="h5">
                                    {weather.name}
                                </Typography>
                                <Typography variant="subtitle1">
                                    {weather.weather[0].main}
                                </Typography>
                            </Grid>
                            <Grid item className={classes.mainInfo}>
                                <Typography variant="h4">
                                    {/* {weather.main.temp} */}
                                    {`16 °C`}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} className={classes.detailInfo}>
                            <Typography variant="subtitle1">
                                <p>{`Humidity: 36 %`}</p>
                                <p>{`Cloudness: 0%`}</p>
                                <p>{`Wind: 2.1 m/sec`}</p>
                            </Typography>
                            {/* <p>{`Humidity: ${weather.main.humidity}`}</p>
                            <p>{`Cloudness: ${weather.clouds.all}`}</p>
                            <p>{`Wind: ${weather.wind.speed}`}</p> */}
                            {/* <p>{`Humidity: 36 %`}</p>
                            <p>{`Cloudness: 0%`}</p>
                            <p>{`Wind: 2.1 m/sec`}</p> */}
                        </Grid>
                    </Grid>


                    <Grid item container direction="row" justify="space-evenly" className={classes.tempDetails}>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Min: 15 °C`}
                                {/* {`Min ${weather.main.temp_min}`} */}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Max: 19 °C`}
                                {/* {`Max ${weather.main.temp_max}`} */}
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="overline" display="block" gutterBottom>
                                {`Feels like: 15 °C`}
                                {/* {`Feels like ${weather.main.feels_like}`} */}
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