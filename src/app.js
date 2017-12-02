import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';
import { firebase } from './firebase/firebase';
import { startSetExpensesAction } from './actions/expenses';
import { loginAction, logoutAction } from './actions/auth';

import 'normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  console.log(getVisibleExpense(state.expenses, state.filters));
});

const App = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(<App />, document.getElementById('app'));
    hasRendered = true;
  }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user){
    store.dispatch(loginAction(user.uid));
    store.dispatch(startSetExpensesAction())
      .then( () => {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
  } else {
    store.dispatch(logoutAction());
    renderApp();
    history.push('/');
  }
});