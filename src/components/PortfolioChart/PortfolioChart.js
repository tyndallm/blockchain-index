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
    return ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'];
  }

  render() {

    const { chartData } = this.props;
    console.log(chartData);

    const data = {
      labels: this.getYearlyChartLabels(),
      datasets: [
        {
          label: 'Total Value (USD)',
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          borderColor: '#53E0F6',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#53E0F6',
          pointBackgroundColor: '#53E0F6',
          pointBorderWidth: 5,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#53E0F6',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          spanGaps: true,
          data: chartData
        }
      ]
    };

    const options = {
      maintainAspectRatio: false,
      legend: {
        display: false,
        position: 'bottom'
      },
      scales: {
            yAxes: [{
                ticks: {
                    max: 1200,
                    min: 800,
                    fontColor: 'rgba(255, 255, 255, 0.35)',
                    padding: 30,
                    fontSize: 14,
                    callback: function(value, index, values) {
                        return "$" + value;
                    }
                },
                scaleLabel: {
                  fontColor: 'rgba(255, 255, 255, 0.35)'
                },
                gridLines: {
                  drawBorder: false,
                  color: 'rgba(255, 255, 255, 0.15)',
                  display: true
                }
            }],
            xAxes: [{
              ticks: {
                fontColor: 'rgba(255, 255, 255, 0.35)',
                fontSize: 14
              },
              scaleLabel: {
                fontColor: 'rgba(255, 255, 255, 0.35)'
              },
              gridLines: {
                display: false,
                drawBorder: false
              }
            }]
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
