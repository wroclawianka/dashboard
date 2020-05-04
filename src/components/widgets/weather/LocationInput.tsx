import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import MyLocationIcon from '@material-ui/icons/MyLocation';

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
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        //TODO: set location and fetch data
    };

    return <form className={classes.root}>
        <InputBase
            placeholder="Location"
        />
        <IconButton
            className={classes.iconButton}
            aria-label="search"
        >
            <MyLocationIcon />
        </IconButton>
    </form>
};

export default LocationInput;