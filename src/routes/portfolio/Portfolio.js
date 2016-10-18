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
    let user = {};
    console.log("[Portfolio.componentDidMount]");
    dispatch(fetchCurrenciesIfNeeded(user));
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <div className={s.root}>
          <div className={s.container}>
            <h1>Overview</h1>
            <PortfolioChart></PortfolioChart>
            <PortfolioSummary></PortfolioSummary>
            <PortfolioTable></PortfolioTable>
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
