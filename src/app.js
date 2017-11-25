import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpense from './selectors/expenses';

import { addExpenseAction } from './actions/expenses';

import testData from './testData.js';

import 'normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  console.log(getVisibleExpense(state.expenses, state.filters));
});

testData.forEach((item) => {
  store.dispatch(addExpenseAction(item));
});

const App = () => (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
