import React, {Component, PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar
} from 'react-bootstrap';
import {
  Table,
  Panel
} from 'react-bootstrap';

import s from './PortfolioSummary.css';

class PortfolioSummary extends Component {

  static propTypes = {
    portfolioData : React.PropTypes.array
  }

  calculateTotalByKey = (investmentObjs, selectedKey) => {
    let total = 0;
    investmentObjs.forEach(function(investment) {
      total += investment[selectedKey] * investment["units"];
    });
    return total;
  }

  calculateTotalPurchase = (investmentObjs, selectedKey) => {
    let total = 0;
    investmentObjs.forEach(function(investment) {
      if (!!investment[selectedKey]) {
        total += investment[selectedKey];
      }
    });
    return total;
  }

  render() {
    // let investments = [
    //   {
    //     "symbol": "ETH",
    //     "currency": "Ethereum",
    //     "units": 250,
    //     "value_btc": 0.01865566,
    //     "value_usd": 11.8762,
    //     "total_btc": 4.5724575,
    //     "total_usd": 2928.48
    //   },
    //   {
    //     "symbol": "XMR",
    //     "currency": "Monero",
    //     "units": 800,
    //     "value_btc": 0.01138037,
    //     "value_usd": 7.29,
    //     "total_btc": 9.104296,
    //     "total_usd": 5833.92
    //   },
    //   {
    //     "symbol": "DGD",
    //     "currency": "Digix DAO",
    //     "units": 25,
    //     "value_btc": 0.01770158,
    //     "value_usd": 11.34,
    //     "total_btc": 0.4425395,
    //     "total_usd": 283.56
    //   }
    // ];

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

    let totalPurchaseBTC = this.calculateTotalPurchase(portfolioData, "purchase_total_btc").toFixed(4);
    let totalPurchaseUSD = this.calculateTotalPurchase(portfolioData, "purchase_total_usd").toFixed(2);

    let totalValueBTC = this.calculateTotalByKey(portfolioData, "current_btc").toFixed(4);
    let totalValueUSD = this.calculateTotalByKey(portfolioData, "current_usd").toFixed(2);

    let profitValueBTC = (totalValueBTC - totalPurchaseBTC).toFixed(4);
    let profitValueUSD = (totalValueUSD - totalPurchaseUSD).toFixed(2);

    return (
      <div className={s.root}>
      <Panel>
      <ul>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Total Profit</span>
            <span className={s.summaryValue}>{profitValueBTC}<span className={s.smallCurrency}>BTC</span></span>
          </h4>
        </li>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Total Profit</span>
            <span className={s.summaryValue}>${profitValueUSD}<span className={s.smallCurrency}>USD</span></span>
          </h4>
        </li>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Current Value</span>
            <span className={s.summaryValue}>{totalValueBTC}<span className={s.smallCurrency}>BTC</span></span>
          </h4>
        </li>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Current Value</span>
            <span className={s.summaryValue}>${totalValueUSD}<span className={s.smallCurrency}>USD</span></span>
          </h4>
        </li>
      </ul>
      </Panel>
      </div>
    );
  }

}

export default withStyles(s)(PortfolioSummary);
