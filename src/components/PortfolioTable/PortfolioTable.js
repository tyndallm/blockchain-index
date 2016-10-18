import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar
} from 'react-bootstrap';
import {
  Table,
} from 'react-bootstrap';

import s from './Portfolio.css';

class PortfolioTable extends Component {

  static propTypes = {
    investments : React.PropTypes.array,
    holdings: React.PropTypes.array
  }

  getTableRows = (portfolioData) => {
    let rows = [];
    portfolioData.forEach(function(holding) {
      rows.push(
          <tr>
            <td>{holding.symbol}</td>
            <td>{holding.name}</td>
            <td>{holding.units}</td>
            <td>{((holding.units * holding.unit_price_btc) - holding.purchase_total_btc).toFixed(2)}</td>
            <td>${((holding.units * holding.unit_price_usd) - holding.purchase_total_usd).toFixed(2)}</td>
            <td>{(holding.current_total_btc).toFixed(2)}</td>
            <td>${(holding.current_total_usd).toFixed(2)}</td>
          </tr>
      );
    });
    return rows;

  }

  render() {
    let { holdings }= this.props;
    let portfolioData = holdings ? holdings : [];

    return (
      <Table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Currency</th>
            <th>Units</th>
            <th>Change (BTC)</th>
            <th>Change (USD)</th>
            <th>Total (BTC)</th>
            <th>Total (USD)</th>
          </tr>
        </thead>
        <tbody>
        {this.getTableRows(portfolioData)}
        </tbody>
      </Table>
    );
  }

}

export default withStyles(s)(PortfolioTable);
