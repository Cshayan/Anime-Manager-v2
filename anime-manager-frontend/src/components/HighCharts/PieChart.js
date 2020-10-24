import React from 'react';
import PropTypes from 'prop-types';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PieChart = (props) => {
  const { data } = props;

  const options = {
    chart: {
      backgroundColor: 'transparent',
      plotBackgroundColor: 'transparent',
      plotBorderWidth: 0,
      plotShadow: false,
      type: 'pie',
    },
    title: {
      text: 'View stats of your Watchlist',
      style: {
        color: '#fff',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    credits: {
      enabled: false,
    },
    colors: Highcharts.map(Highcharts.getOptions().colors, function (color) {
      return {
        radialGradient: {
          cx: 0.5,
          cy: 0.3,
          r: 0.7,
        },
        stops: [
          [0, color],
          [1, Highcharts.color(color).brighten(-0.6).get('rgb')], // darken
        ],
      };
    }),
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
        borderWidth: 0,
      },
    },
    legend: {
      itemStyle: {
        color: '#fff',
      },
    },
    series: [
      {
        name: 'Count',
        colorByPoint: true,
        data,
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

PieChart.propTypes = {
  data: PropTypes.array,
};

PieChart.defaultProps = {
  data: [],
};

export default PieChart;
