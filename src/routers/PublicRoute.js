import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import Header from '../components/Header';

class PublicRoute extends Component {
  renderBasedOnAuth = (isAuthenticated, WrappedComponent) => {
    return (props) => {
      return isAuthenticated ?
        (
          <Redirect to='/dashboard' />
        ) :
        (
          <WrappedComponent {...props} />
        );
    }
  }

  render = () => {
    const { isAuthenticated, component: WrappedComponent, ...rest } = this.props;

    return (
      <Route {...rest} component={this.renderBasedOnAuth(isAuthenticated, WrappedComponent)} />
    );
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.uid
  }
}

export default connect(mapStateToProps)(PublicRoute);