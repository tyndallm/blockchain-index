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
    holdings : React.PropTypes.array
  }

  calculateTotalByKey = (objects, selectedKey) => {
    let total = 0;
    objects.forEach(function(object) {
      total += object[selectedKey] * object["units"];
    });
    return total;
  }

  calculateTotalPurchase = (objects, selectedKey) => {
    let total = 0;
    objects.forEach(function(object) {
      if (!!object[selectedKey]) {
        total += object[selectedKey];
      }
    });
    return total;
  }

  render() {
    let holdings = this.props.holdings ? this.props.holdings : [];

    let totalPurchaseBTC = this.calculateTotalPurchase(holdings, "purchase_total_btc").toFixed(4);
    let totalPurchaseUSD = this.calculateTotalPurchase(holdings, "purchase_total_usd").toFixed(2);

    let totalValueBTC = this.calculateTotalByKey(holdings, "unit_price_btc").toFixed(4);
    let totalValueUSD = this.calculateTotalByKey(holdings, "unit_price_usd").toFixed(2);

    let profitValueBTC = (totalValueBTC - totalPurchaseBTC).toFixed(4);
    let profitValueUSD = (totalValueUSD - totalPurchaseUSD).toFixed(2);

    return (
      <div className={s.root}>
      <Panel>
      <ul>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Value Change</span>
            <span className={s.summaryValue}>+{profitValueBTC}<span className={s.smallCurrency}>BTC</span></span>
          </h4>
        </li>
        <li className={s.summaryListItem}>
          <h4>
            <span className={s.summaryName}>Value Change</span>
            <span className={s.summaryValue}>+${profitValueUSD}<span className={s.smallCurrency}>USD</span></span>
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
