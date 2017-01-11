import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import {Line} from 'react-chartjs-2';

import s from './PortfolioChart.css';

class PortfolioChart extends Component {

  static propTypes = {
    chartData : React.PropTypes.array
  }

  getDailyChartLabels = () => {
    return ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
  }

  getYearlyChartLabels = () => {
    return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September','October','November','December'];
  }

  render() {

    const { chartData } = this.props;
    console.log(chartData);

    const data = {
      labels: this.getYearlyChartLabels(),
      datasets: [
        {
          label: 'Total Value (USD)',
          fill: true,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          spanGaps: true,
          data: chartData
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        position: 'bottom'
      }
    }

    return (
      <div className={s.root}>
        <Line data={data} width={100} height={300} options={options}/>
      </div>
    );
  }

}

export default withStyles(s)(PortfolioChart);
