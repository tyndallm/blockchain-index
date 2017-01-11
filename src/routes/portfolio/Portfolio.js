import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import PortfolioTable from '../../components/PortfolioTable';
import PortfolioSummary from '../../components/PortfolioSummary';
import PortfolioChart from '../../components/PortfolioChart';
import { fetchCurrenciesIfNeeded, fetchChartDataIfNeeded } from '../../actions/portfolio';
import {
  Table
} from 'react-bootstrap';
import s from './Portfolio.css';

class Portfolio extends Component {

  calculateWeekTotalWealth = () => {

  }

  calculateDayTotalWealth = () => {

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

  render() {
    let portfolioData = this.props.portfolio.items ? this.props.portfolio.items : [];
    let chartData = [1000, null, null, null, null, null, null, null, null, null, null, null];

    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <h1>2017 Blockchain Index</h1>
            <PortfolioChart chartData={chartData}></PortfolioChart>
            <PortfolioSummary holdings={portfolioData}></PortfolioSummary>
            <PortfolioTable holdings={portfolioData}></PortfolioTable>
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
