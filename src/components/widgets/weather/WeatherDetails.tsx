import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LocationInput from './LocationInput'
import Edit from '@material-ui/icons/Edit'

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            maxWidth: '380px',
            margin: '0 auto',
            color: '#02005c',
        },
        title: {
            textAlign: 'left',
        },
        editIcon: {
            paddingLeft: '5px',
            color: '#a2a2a2',
            "&:hover, &:focus": {
                color: 'inherit',
            },
        },
        locationInput: {
            paddingBottom: '5px'
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

    if (weather) {
        return (
            <div>
                <Box className={classes.root}>
                    <Grid container spacing={0} direction="column">
                        <Grid container justify="space-between" direction="row">
                            <Grid className={classes.title}>
                                <Typography variant="h5">
                                    {weather.main.location}
                                </Typography>
                            </Grid>
                            <Grid className={classes.locationInput}>
                                {(editMode) ?
                                    <LocationInput setEditMode={setEditMode} /> :
                                    <Edit
                                        className={classes.editIcon}
                                        fontSize='small'
                                        onClick={() => { setEditMode(true) }}
                                    />}
                            </Grid>
                        </Grid>
                        <Grid container justify="space-evenly" direction="row" item xs={12}>
                            <Grid className={classes.mainInfo} item xs={7}>
                                <Grid>
                                    <Typography variant="subtitle1">
                                        {weather.main.description}
                                    </Typography>
                                </Grid>
                                <Grid container justify="center" direction="row">
                                    <Grid>
                                        <div>
                                            <img src={`./dashboard/assets/weather_icons/${weather.main.icon}.svg`} width='100px' alt="Sun" />
                                        </div>
                                    </Grid>
                                    <Grid className={classes.verticallyCentered}>
                                        <Typography variant="h4">
                                            {`${weather.main.temp} °C`}
                                        </Typography>
                                        <Typography variant="subtitle2" display="block" gutterBottom>
                                            <div>Feels like:</div>
                                            <div>{`${weather.temperature.feelsLike} °C`}</div>
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid className={classes.detailInfo} item xs={5}>
                                <Typography variant="subtitle2">
                                    <div>Humidity:</div>
                                    <div className={classes.bold}>{`${weather.details.humidity}%`}</div>
                                    <div>Cloudiness:</div>
                                    <div className={classes.bold}>{`${weather.details.cloudiness}%`}</div>
                                    <div>Wind:</div>
                                    <div className={classes.bold}>{`${weather.details.wind} m/sec`}</div>
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