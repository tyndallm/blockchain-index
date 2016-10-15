import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar
} from 'react-bootstrap';



import s from './PortfolioChart.css';

class PortfolioChart extends Component {

  static propTypes = {
    investments : React.PropTypes.array
  }

  // getTableRows = (investmentObjs) => {
  //   let rows = [];
  //   investmentObjs.forEach(function(investment) {
  //     rows.push(
  //         <tr>
  //           <td>{investment.symbol}</td>
  //           <td>{investment.currency}</td>
  //           <td>{investment.units}</td>
  //           <td>{((investment.units * investment.current_btc) - investment.purchase_total_btc).toFixed(2)}</td>
  //           <td>${((investment.units * investment.current_usd) - investment.purchase_total_usd).toFixed(2)}</td>
  //           <td>{(investment.units * investment.current_btc).toFixed(2)}</td>
  //           <td>${(investment.units * investment.current_usd).toFixed(2)}</td>
  //         </tr>
  //     );
  //   });
  //   return rows;
  // }

  render() {
    let portfolioData = [
      {
        "symbol": "ETH",
        "currency": "Ethereum",
        "units": 250,
        "purchase_total_usd": 216.867, // (0.35 * 619.62) / 700 = 0.309
        "purchase_total_btc": 0.35, // 0.35 / 700 = 0.0005
        "current_usd": 11.8862,
        "current_btc": 0.01860000
      },
      {
        "symbol": "XMR",
        "currency": "Monero",
        "units": 800,
        "purchase_total_usd": 5833.92, // If purchase price unknown set at current value when investment is added to the site ex. 800 * 6.87
        "purchase_total_btc": 9.104, // ex. 800 * 0.01075000
        "current_usd": 6.87,
        "current_btc": 0.01075000
      },
      {
        "symbol": "DGD",
        "currency": "Digix DAO",
        "units": 25,
        "purchase_total_usd": 283.56,
        "purchase_total_btc": 0.48087,
        "current_usd": 11.2463,
        "current_btc": 0.0176005
      },
      {
        "symbol": "REP",
        "currency": "Augur",
        "units": 97.62,
        "purchase_total_usd": 545.82,
        "purchase_total_btc": 0.8521,
        "current_usd": 5.8101,
        "current_btc": 0.00909196
      },
      {
        "symbol": "SNGLS",
        "currency": "SingularDTV",
        "units": 53920,
        "purchase_total_usd": 819.58,
        "purchase_total_btc": 1.2806,
        "current_usd": 0.0145,
        "current_btc": 0.00002269
      },
      {
        "symbol": "AMP",
        "currency": "Synereo",
        "units": 3968,
        "purchase_total_usd": 742.41,
        "purchase_total_btc": 1.15929088,
        "current_usd": 0.1747,
        "current_btc": 0.00027346
      },
      {
        "symbol": "PLU",
        "currency": "Plutons",
        "units": 90.38,
        "purchase_total_usd": 141.90,
        "purchase_total_btc": 0.22170214,
        "current_usd": 1.72,
        "current_btc": 0.00269163
      }
    ]

    let chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
          {
              label: "My First dataset",
              fill: false,
              lineTension: 0.1,
              backgroundColor: "rgba(75,192,192,0.4)",
              borderColor: "rgba(75,192,192,1)",
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: "rgba(75,192,192,1)",
              pointBackgroundColor: "#fff",
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: "rgba(75,192,192,1)",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40],
              spanGaps: false,
          }
      ]
    };

    let chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    // let chart;

    // if(window === undefined) {
    //   chart = (<div></div>);
    // } else {
    //   const Line = require('react-chartjs-2');
    //   chart = (<Line data={chartData} />)
    //   console.log("chart: ", chart);
    // }

    return (
      <p>...</p>
    );
  }

}

export default PortfolioChart;
