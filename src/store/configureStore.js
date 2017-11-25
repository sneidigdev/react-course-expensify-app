import { createStore, combineReducers } from 'redux';

import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import actionsLogReducer from '../reducers/actionsLog';

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  actionsLog: actionsLogReducer
});

export default () => {
  return createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
