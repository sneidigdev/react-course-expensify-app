import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLoginAction } from '../actions/auth';

class LoginPage extends Component {
  handleLogin = () => {
    this.props.startLoginAction();
  }

  render = () => {
    return (
      <div className='box-layout'>
        <div className='box-layout__box'>
          <h1 className='layout__title'>Expensify App</h1>
          <p>Get your expenses organized</p>
          <button className='button' onClick={this.handleLogin}>Login with Google</button>
        </div>
      </div>
    )
  }
}

export default connect(null, { startLoginAction })(LoginPage);