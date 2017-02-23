import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import PortfolioTable from '../../components/PortfolioTable';
import PortfolioSummary from '../../components/PortfolioSummary';
import PortfolioChart from '../../components/PortfolioChart';
import { fetchCurrenciesIfNeeded, fetchChartDataIfNeeded } from '../../actions/portfolio';
import {
  Table,
  Button
} from 'react-bootstrap';
import s from './Portfolio.css';

class Portfolio extends Component {

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

  constructor(props) {
    super(props);
    this.state = {
      displayChart: true
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    let user = {
      holdings: [
      {
          "symbol": "BTC",
          "units": 0.3295,
          "purchase_total_usd": 300,
          "purchase_total_btc": 0.3295
        },
        {
          "symbol": "ETH",
          "units": 29.49,
          "purchase_total_usd": 300,
          "purchase_total_btc": 0.3295
        },
        {
          "symbol": "XMR",
          "units": 21.15,
          "purchase_total_usd": 300,
          "purchase_total_btc": 0.3295
        },
        {
          "symbol": "REP",
          "units": 11.03,
          "purchase_total_usd": 50,
          "purchase_total_btc": 0.0549
        },
        {
          "symbol": "DGD",
          "units": 5.66,
          "purchase_total_usd": 50,
          "purchase_total_btc": 0.0549
        }
      ]
    };

    dispatch(fetchCurrenciesIfNeeded(user));
  }

  handleToggleDisplayed = () => {
    console.log("Clicked button");
    this.setState({
      displayChart: !this.state.displayChart
    });
  }

  getDisplayedComponent = () => {
    let portfolioData = this.props.portfolio.items ? this.props.portfolio.items : [];
    let chartData = [1000, 1017.03, null, null, null, null, null, null, null, null, null, null];

    if (this.state.displayChart) {
      return (
        <PortfolioChart chartData={chartData}></PortfolioChart>
      );
    } else {
      return (
        <PortfolioTable holdings={portfolioData}></PortfolioTable>
      );
    }
  }

  render() {
    let holdings = this.props.portfolio.items ? this.props.portfolio.items : [];

    //let totalPurchaseBTC = this.calculateTotalPurchase(holdings, "purchase_total_btc").toFixed(4);
    let totalPurchaseUSD = this.calculateTotalPurchase(holdings, "purchase_total_usd").toFixed(2);

    //let totalValueBTC = this.calculateTotalByKey(holdings, "unit_price_btc").toFixed(4);
    let totalValueUSD = this.calculateTotalByKey(holdings, "unit_price_usd").toFixed(2);

    //let profitValueBTC = (totalValueBTC - totalPurchaseBTC).toFixed(4);
    let profitValueUSD = (totalValueUSD - totalPurchaseUSD).toFixed(2);

    let percentageChange = (100 * (profitValueUSD / 1000)).toFixed(2);


    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <div className={s.left}>
              <h1>Blockchain Index 2017</h1>
              <div className={s.summaryContainer}>
                <ul>
                  <li className={s.summaryListItem}>
                    ${totalValueUSD}
                  </li>
                  <li className={s.summaryListItem}>
                    {profitValueUSD >= 0 ? `+\$${profitValueUSD}` : `-\$${profitValueUSD}`}
                  </li>
                  <li className={s.summaryListItem}>
                    {percentageChange >= 0 ? `+${percentageChange}%` : `-${percentageChange}%`}
                  </li>
                </ul>
              </div>
              <p>At the beginning of this year I decided to set aside $1000 and invested it in what I believed at the time to be the most promising digital cryptocurrency assets. Here you can see the investments monthly performance.</p>
              <Button onClick={this.handleToggleDisplayed}>{this.state.displayChart ? "Show table" : "Show chart"}</Button>
            </div>
            <div className={s.right}>
              {this.getDisplayedComponent()}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  portfolio: PropTypes.Object,
};

function mapStateToProps(state) {
  return { portfolio: state.portfolio }
}

export default connect(mapStateToProps)(withStyles(s)(Portfolio));
