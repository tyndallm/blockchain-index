import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar
} from 'react-bootstrap';
import {
  Table
} from 'react-bootstrap';

import s from './Portfolio.css';

class PortfolioTable extends Component {

  static propTypes = {
    investments : React.PropTypes.array
  }

  getTableRows = (investmentObjs) => {
    let rows = [];
    investmentObjs.forEach(function(investment) {
      rows.push(
          <tr>
            <td>{investment.symbol}</td>
            <td>{investment.currency}</td>
            <td>{investment.units}</td>
            <td>{investment.value_btc}</td>
            <td>${investment.value_usd}</td>
            <td>{investment.total_btc}</td>
            <td>${investment.total_usd}</td>
          </tr>
      );
    });
    return rows;
  }

  render() {
    let investments = [
      {
        "symbol": "ETH",
        "currency": "Ethereum",
        "units": 250,
        "value_btc": 0.01865566,
        "value_usd": 11.8762,
        "total_btc": 4.5724575,
        "total_usd": 2928.48
      },
      {
        "symbol": "XMR",
        "currency": "Monero",
        "units": 800,
        "value_btc": 0.01138037,
        "value_usd": 7.29,
        "total_btc": 9.104296,
        "total_usd": 5833.92
      },
      {
        "symbol": "DGD",
        "currency": "Digix DAO",
        "units": 25,
        "value_btc": 0.01770158,
        "value_usd": 11.34,
        "total_btc": 0.4425395,
        "total_usd": 283.56
      }
    ];

    return (
      <Table class="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Currency</th>
            <th>Units</th>
            <th>Value(BTC)</th>
            <th>Value(USD)</th>
            <th>Total(BTC)</th>
            <th>Total(USD)</th>
          </tr>
        </thead>
        <tbody>
        {this.getTableRows(investments)}
        </tbody>
      </Table>
    );
  }

}

export default withStyles(s)(PortfolioTable);
