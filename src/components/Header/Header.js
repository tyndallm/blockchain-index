/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {
  Navbar
} from 'react-bootstrap';
import Link from '../Link';
import Navigation from '../Navigation';
import s from './Header.css';

function Header() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link className={s.brand} to="/">Cryptowealth</Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Navigation></Navigation>

    </Navbar>
  );
}

export default withStyles(s)(Header);
