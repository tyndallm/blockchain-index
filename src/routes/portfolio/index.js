import React from 'react';
import Portfolio from './Portfolio';

const title = '2017 Blockchain Index';

export default {

  path: '/',

  action() {
    return {
      title,
      component: <Portfolio title={title} />,
    };
  },

};
