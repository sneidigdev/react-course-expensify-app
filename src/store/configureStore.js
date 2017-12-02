import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import actionsLogReducer from '../reducers/actionsLog';
import authReducer from '../reducers/auth';

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  actionsLog: actionsLogReducer,
  auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
  );
};
