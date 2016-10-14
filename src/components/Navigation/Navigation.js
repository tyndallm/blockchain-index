/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Navigation.css';
import Link from '../Link';
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
} from 'react-bootstrap';

function Navigation({ className }) {
  return (
    <Nav>
        <NavItem eventKey={1} href="/about">About</NavItem>
        <NavItem eventKey={2} href="/portfolio">Portfolio</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
};

export default withStyles(s)(Navigation);
