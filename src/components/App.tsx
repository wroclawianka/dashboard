import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';

import WeatherPanel from './widgets/weather/WeatherPanel'
import NewsPanel from './widgets/news/NewsPanel'

import { getPosition } from '../actions/index'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: '#f5f5f5',
    },
    container: {
      marginTop: '20px',
      flexGrow: 1,
    }
  }),
);

export default function App() {
  const position = useSelector(state => state.position)
  const classes = useStyles();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosition());
  }, []);

  if (position) {
    return (
      <div className={classes.root}>
        <Container className={classes.container}>
          <Grid container spacing={3}>
            <WeatherPanel />
            <NewsPanel />
          </Grid>
        </Container>
      </div>
    );
  } else {
    return null;
  }
}