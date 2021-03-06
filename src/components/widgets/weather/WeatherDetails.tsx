import React, { useState } from 'react';
import { useSelector } from 'react-redux'

import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit'
import Clear from '@material-ui/icons/Clear'

import LocationInput from './LocationInput'

const url = "https://wroclawianka.github.io/dashboard";

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: '380px',
            margin: '0 auto',
            color: '#02005c',
        },
        title: {
            textAlign: 'left',
            paddingBottom: '12px'
        },
        editIcon: {
            paddingLeft: '5px',
            color: '#a2a2a2',
            paddingTop: '7px',
            "&:hover, &:focus": {
                color: 'inherit',
            },
        },
        locationInput: {
            paddingBottom: '5px',
            display: 'flex',
        },
        mainInfo: {
            textAlign: 'left',
        },
        detailInfo: {
            textAlign: 'center',
            margin: 'auto',
        },
        verticallyCentered: {
            margin: 'auto 0',
            textAlign: 'center',
        },
        bold: {
            fontWeight: 600,
        },
    }),
);

const WeatherDetails = () => {
    const classes = useStyles();
    const weather = useSelector(state => state.weather);
    const [editMode, setEditMode] = useState(false);

    const renderTitle = () => {
        return (
            <Grid className={classes.title}>
                <Typography variant="h5">
                    {weather.main.location}
                </Typography>
            </Grid>
        )
    }

    const renderLocationSelector = () => {
        return (
            <Grid>
                {(editMode) ?
                    <div className={classes.locationInput}>
                        <LocationInput setEditMode={setEditMode} />
                        <Clear
                            className={classes.editIcon}
                            fontSize='small'
                            onClick={() => { setEditMode(false) }}
                        />
                    </div> :
                    <Edit
                        className={classes.editIcon}
                        fontSize='small'
                        onClick={() => { setEditMode(true) }}
                    />}
            </Grid>
        )
    }

    const renderMainInfo = () => {
        return (
            <Grid className={classes.mainInfo} item xs={7}>
                <Grid>
                    <Typography variant="subtitle1">
                        {weather.main.description}
                    </Typography>
                </Grid>
                <Grid container justify="center" direction="row">
                    {renderIcon()}
                    {renderTemperature()}
                </Grid>
            </Grid>
        )
    }

    const renderIcon = () => {
        return (
            <Grid>
                <div>
                    <img
                        src={`${url}/assets/weather_icons/${weather.main.icon}.svg`}
                        width='100px'
                        alt="Weather"
                    />
                </div>
            </Grid>
        )
    }

    const renderTemperature = () => {
        return (
            <Grid className={classes.verticallyCentered}>
                <Typography variant="h4">
                    {`${weather.main.temp} °C`}
                </Typography>
                <Typography variant="subtitle2" display="block" gutterBottom>
                    <div>Feels like:</div>
                    <div>{`${weather.temperature.feelsLike} °C`}</div>
                </Typography>
            </Grid>
        )
    }

    const renderDetails = () => {
        return (
            <Grid className={classes.detailInfo} item xs={5}>
                <Typography variant="subtitle2">
                    <div>Humidity:</div>
                    <div className={classes.bold}>
                        {`${weather.details.humidity}%`}
                    </div>
                    <div>Cloudiness:</div>
                    <div className={classes.bold}>
                        {`${weather.details.cloudiness}%`}
                    </div>
                    <div>Wind:</div>
                    <div className={classes.bold}>
                        {`${weather.details.wind} m/sec`}
                    </div>
                </Typography>
            </Grid>
        )
    }

    if (weather) {
        return (
            <div>
                <Box className={classes.root}>
                    <Grid container spacing={0} direction="column">
                        <Grid container justify="space-between" direction="row">
                            {renderTitle()}
                            {renderLocationSelector()}
                        </Grid>
                        <Grid container justify="space-evenly" direction="row" item xs={12}>
                            {renderMainInfo()}
                            {renderDetails()}
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