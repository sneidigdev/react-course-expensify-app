import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { startLogoutAction } from '../actions/auth';

class Header extends Component {
  handleLogout = () => {
    this.props.startLogoutAction();
  }

  render = () => {
    return (
      <header>
        <h1>Expensify</h1>
        <NavLink exact to='/dashboard' activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink>
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
        <button onClick={this.handleLogout}>Logout</button>
      </header>
    )
  }
}

export default connect(null, { startLogoutAction })(Header);