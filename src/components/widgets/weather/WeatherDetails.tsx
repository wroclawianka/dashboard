import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            color: '#02005c',
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
            textAlign: 'center',
        },
        feelsLike: {
            fontSize: '0.70rem',
            lineHeight: '1.5',
        }
    }),
);

const WeatherDetails = () => {
    const classes = useStyles();
    const weather = useSelector(state => state.weather)

    if (weather) {
        return (
            <div>
                <Box className={classes.root}>
                    <Grid container spacing={0} direction="column">
                        <Grid container justify="space-between" direction="row">
                            <Grid className={classes.title}>
                                <Typography variant="h5">
                                    {weather.main.location}
                                </Typography></Grid>
                            <Grid>------- INPUT ------</Grid>
                        </Grid>
                        <Grid container justify="space-evenly" direction="row">
                            <Grid className={classes.mainInfo}>
                                <Grid>
                                    <Typography variant="subtitle1">
                                        {weather.main.description}
                                    </Typography>
                                </Grid>
                                <Grid container justify="space-evenly" direction="row">
                                    <Grid>
                                        <div>
                                            <img src={`./assets/weather_icons/${weather.main.icon}.svg`} width='100px' alt="Sun" />
                                        </div>
                                    </Grid>
                                    <Grid className={classes.verticallyCentered}>
                                        <Typography variant="h4">
                                            {`${weather.main.temp} °C`}
                                        </Typography>
                                        <Typography variant="overline" display="block" gutterBottom className={classes.feelsLike}>
                                            <div>Feels like</div>
                                            <div>{`${weather.temperature.feelsLike} °C`}</div>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.detailInfo}>
                                <Typography variant="subtitle1">
                                    <p>Humidity:{`${weather.details.humidity}%`}</p>
                                    <p>Cloudness: {`${weather.details.cloudiness}%`}</p>
                                    <p>Wind: {`${weather.details.wind} m/sec`}</p>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    } else {
        return (
            <div>Loading weather...</div>
        )
    }
};

export default WeatherDetails;