import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MyLocationIcon from '@material-ui/icons/MyLocation';
import {fetchWeather} from "../../../actions";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            border: '1px solid #d1d1d1',
            borderRadius: '25px',
            paddingLeft: '14px',
        },
        iconButton: {
            padding: 10
        },
    }),
);

const LocationInput = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [location, setLocation] = useState('');


    const handleChange = (event) => {
        setLocation(event.target.value)
    };

    const handleSubmit = (event) => {
        dispatch(fetchWeather({q: location}));
        setLocation('');
        event.preventDefault();
    };

    return <form className={classes.root} onSubmit={handleSubmit}>
        <InputBase
            type="text"
            placeholder="Change location..."
            value={location}
            onChange={handleChange}
        />
    </form>
};

export default LocationInput;