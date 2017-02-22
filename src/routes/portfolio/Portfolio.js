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

    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <div className={s.left}>
              <h1>Blockchain Index 2017</h1>
              <p>At the beginning of this year I decided to set aside $1000 and invested it in what I believed at the time to be the most promising digital cryptocurrency assets. Here you can see the investments monthly performance.</p>
              <button onClick={this.handleToggleDisplayed}>{this.state.displayChart ? "Show table" : "Show chart"}</button>
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
