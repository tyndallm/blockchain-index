import React, { Component, PropTypes } from 'react';
import {connect} from "react-redux";
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import PortfolioTable from '../../components/PortfolioTable';
import PortfolioSummary from '../../components/PortfolioSummary';
import PortfolioChart from '../../components/PortfolioChart';
import { fetchCurrenciesIfNeeded } from '../../actions/portfolio';
import {
  Table
} from 'react-bootstrap';
import s from './Portfolio.css';

class Portfolio extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    let user = {
      holdings: [
        {
          "symbol": "ETH",
          "units": 250,
          "purchase_total_usd": 216.867,
          "purchase_total_btc": 0.35
        },
        {
          "symbol": "XMR",
          "units": 800,
          "purchase_total_usd": 5833.92,
          "purchase_total_btc": 9.104
        },
        {
          "symbol": "DGD",
          "units": 25,
          "purchase_total_usd": 283.56,
          "purchase_total_btc": 0.48087
        },
        {
          "symbol": "SNGLS",
          "units": 53920,
          "purchase_total_usd": 819.58,
          "purchase_total_btc": 1.2806
        },
        {
          "symbol": "REP",
          "units": 97.62,
          "purchase_total_usd": 545.82,
          "purchase_total_btc": 0.8521
        },
        {
          "symbol": "AMP",
          "units": 3968,
          "purchase_total_usd": 742.41,
          "purchase_total_btc": 1.15929088
        },
        {
          "symbol": "PLU",
          "units": 90.38,
          "purchase_total_usd": 141.90,
          "purchase_total_btc": 0.22170214
        }
      ]
    };

    dispatch(fetchCurrenciesIfNeeded(user));
  }

  render() {
    console.log("props: ", this.props);
    let portfolioData = this.props.portfolio.items ? this.props.portfolio.items : [];

    //console.log("[portfolio container]", portfolioData);

    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <h1>Overview</h1>
            <PortfolioChart></PortfolioChart>
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
