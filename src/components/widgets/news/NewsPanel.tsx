import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import NewsDetails from './NewsDetails'

import { fetchTopHeadlines as fetchNews } from '../../../actions'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

const NewsPanel = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchNews()) }, []);

    return (
        <Grid item xs={7}>
            <Paper className={classes.paper}>
                <NewsDetails />
            </Paper>
        </Grid>
    )
}

export default NewsPanel;