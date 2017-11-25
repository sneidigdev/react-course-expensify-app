import { createStore, combineReducers } from 'redux';

const logReducer = (state = [], action) => {
  console.log(`Current action: ${action.type}`);
  return state.concat([action.type]);
};

const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.incrementBy;
    default:
      return state;
  }
}

const reducers = combineReducers({
  count: countReducer,
  log: logReducer
});

const store = createStore(reducers);
store.subscribe(() => {
  console.log(store.getState());
});

const incrementAction = (incrementBy = 1) => {
  store.dispatch({
    type: 'INCREMENT',
    incrementBy : (typeof incrementBy === 'number' ? incrementBy : 1)
  });
};

incrementAction(5);
incrementAction();
incrementAction('abc');