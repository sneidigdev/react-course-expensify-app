import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startLogoutAction } from '../actions/auth';

class Header extends Component {
  handleLogout = () => {
    this.props.startLogoutAction();
  }

  render = () => {
    return (
      <header className='header'>
        <div className='content-container'>
          <div className='header__content'>
            <Link className='header__title' to='/dashboard'>
              <h1>Expensify</h1>
            </Link>
            <button className='button button--link' onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      </header>
    )
  }
}

export default connect(null, { startLogoutAction })(Header);