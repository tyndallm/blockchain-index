import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import PortfolioTable from '../../components/PortfolioTable';
import PortfolioSummary from '../../components/PortfolioSummary';
import {
  Table
} from 'react-bootstrap';
import s from './Portfolio.css';

function Portfolio({ title }) {
  return (
    <Layout>
      <div className={s.root}>
        <div className={s.container}>
          <h1>Overview</h1>
          <PortfolioSummary>
          </PortfolioSummary>
          <PortfolioTable>
          </PortfolioTable>
        </div>
      </div>
    </Layout>
  );
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(s)(Portfolio);
