import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import { fetchWeather } from '../../../actions'
import WeatherDetails from './WeatherDetails'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const WeatherPanel = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const position = useSelector(state => state.position);
    useEffect(() => dispatch(fetchWeather({ ...position })));

    const renderContent = () => {
        if (position) {
            return <WeatherDetails />
        } else {
            return (
                <div>Waiting for geolocation permission...</div>
            )
        }
    }

    return (
        <Grid item xs={5}>
            <Paper className={classes.paper}>
                {renderContent()}
            </Paper>
        </Grid>
    )
};

export default WeatherPanel;