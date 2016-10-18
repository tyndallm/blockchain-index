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
    data: React.PropTypes.array
  }

  getTableRows = (investmentObjs, fetchedData) => {
    if (!fetchedData) {
      return "";
    } else {
      let rows = [];
      console.log("getTableRow: ", fetchedData);
      investmentObjs.forEach(function(investment) {
        let match = {};
        fetchedData.forEach( function(retrievedInvestment) {
          if (retrievedInvestment.symbol === investment.symbol) {
            match = retrievedInvestment;
          }
        })
        rows.push(
            <tr>
              <td>{investment.symbol}</td>
              <td>{investment.currency}</td>
              <td>{investment.units}</td>
              <td>{((investment.units * match.price_btc) - investment.purchase_total_btc).toFixed(2)}</td>
              <td>${((investment.units * match.price_usd) - investment.purchase_total_usd).toFixed(2)}</td>
              <td>{(investment.units * match.price_btc).toFixed(2)}</td>
              <td>${(investment.units * match.price_usd).toFixed(2)}</td>
            </tr>
        );
      });
      return rows;
    }

  }

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

    //console.log("Portfolio table props: ", this.props);

    let fetchedData = this.props.data;

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
        {this.getTableRows(portfolioData, fetchedData)}
        </tbody>
      </Table>
    );
  }

}

export default withStyles(s)(PortfolioTable);
