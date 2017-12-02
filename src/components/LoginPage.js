import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startLoginAction } from '../actions/auth';

class LoginPage extends Component {
  handleLogin = () => {
    this.props.startLoginAction();
  }

  render = () => {
    return (
      <button onClick={this.handleLogin}>Login</button>
    )
  }
}

export default connect(null, { startLoginAction })(LoginPage);