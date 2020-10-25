import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import PieChart from 'components/HighCharts/PieChart';

const useStyles = makeStyles((theme) => ({
  card: {
    background: theme.card.background,
    width: '100%',
    height: '100%',
    borderRadius: '5px',
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));

const AnimePieChartStats = (props) => {
  const { total, watching, unwatched, completed, hold, dropped } = props;
  const [data, setData] = useState([]);

  const prepareData = () => {
    setData([
      {
        name: 'Total',
        y: total,
        sliced: true,
        selected: true,
      },
      {
        name: 'Watching',
        y: watching,
        color: '#2ecc71',
      },
      {
        name: 'Unwatched',
        y: unwatched,
        color: '#7f8c8d',
      },
      {
        name: 'Completed',
        y: completed,
        color: '#2980b9',
      },
      {
        name: 'On hold',
        y: hold,
        color: '#f1c40f',
      },
      {
        name: 'Dropped',
        y: dropped,
        color: '#e74c3c',
      },
    ]);
  };

  useEffect(() => {
    prepareData();
  }, [total, watching, unwatched, completed, hold, dropped]);

  const classes = useStyles();
  return (
    <div className={classes.card}>
      <PieChart data={data} />
    </div>
  );
};

AnimePieChartStats.propTypes = {
  total: PropTypes.number,
  watching: PropTypes.number,
  unwatched: PropTypes.number,
  completed: PropTypes.number,
  hold: PropTypes.number,
  dropped: PropTypes.number,
};

AnimePieChartStats.defaultProps = {
  total: 0,
  watching: 0,
  unwatched: 0,
  completed: 0,
  hold: 0,
  dropped: 0,
};

export default AnimePieChartStats;
