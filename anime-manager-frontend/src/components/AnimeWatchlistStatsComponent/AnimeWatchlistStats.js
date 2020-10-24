import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import NoDataCard from '../NoDataCard/NoDataCard';

const useStyles = makeStyles(() => ({
  statsContainer: {
    padding: '1rem',
    width: '100%',
  },
}));

const AnimeWatchlistStats = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      //   direction="row"
      spacing={1}
      className={classes.statsContainer}
    >
      <Grid item xs={12}>
        <NoDataCard />
      </Grid>
      <Grid item xs={12}>
        <NoDataCard />
      </Grid>
    </Grid>
  );
};

export default AnimeWatchlistStats;
