import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
  expenses: [
    {
      id: 'asdfasf',
      description: 'rent',
      note: 'Rent for Jan',
      amount: 1200,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
};

// Action Types
const actionTypes = {
  ADD_EXPENSE: 'ADD_EXPENSE',
  REMOVE_EXPENSE: 'REMOVE_EXPENSE',
  EDIT_EXPENSE: 'EDIT_EXPENSE',
  SET_FILTERS_TEXT: 'SET_FILTERS_TEXT',
  SET_FILTERS_SORT: 'SET_FILTERS_SORT',
  SET_FILTERS_DATE: 'SET_FILTERS_DATE'
};

// Actions
const addExpenseAction = (
  {
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type: actionTypes.ADD_EXPENSE,
  payload: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const removeExpenseAction = (id) => ( { type: actionTypes.REMOVE_EXPENSE, payload: { id } });
const editExpenseAction = (id, edit) => ( { type: actionTypes.EDIT_EXPENSE, payload: { ...edit, id } });

const setFiltersAction = (fiterText = '') => ( { type: actionTypes.SET_FILTERS_TEXT, payload: { text: fiterText} } );
const sortByDateAction = () => ({ type: actionTypes.SET_FILTERS_SORT, payload: { sort: 'date' } });
const sortByAmountAction = () => ({ type: actionTypes.SET_FILTERS_SORT, payload: { sort: 'amount' } });
const setStartDateAction = (date = undefined) => ({ type: actionTypes.SET_FILTERS_DATE, payload: { startDate: date } });
const setEndDateAction = (date = undefined) => ({ type: actionTypes.SET_FILTERS_DATE, payload: { endDate: date } });

// Reducers
const actionsLogReducer = (state = [], action) => {
  console.log(`Current action: ${action.type}`);
  return state.concat([action.type]);
};

const expensesReducer = (state = [], { type, payload: expense }) => {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [ ...state, expense ];
    case actionTypes.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== expense.id);
    case actionTypes.EDIT_EXPENSE:
      return state.map((item) => {
        if (item.id === expense.id) {
          return { ...item, ...expense };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case actionTypes.SET_FILTERS_TEXT:
      return { ...state, text: payload.text };
    case actionTypes.SET_FILTERS_SORT:
      return { ...state, sortBy: payload.sort };
    case actionTypes.SET_FILTERS_DATE:
      return { ...state, ...payload };
    default:
      return state;
  }
};

const getVisibleExpense = (expenses, filters) => {
  return expenses.filter((item) => {
    const textMatch = filters.text ? item.description.toLowerCase().includes(filters.text) : true;
    const startDateMatch = typeof filters.startDate !== 'number' || item.createdAt >= filters.startDate;
    const endDateMatch =  typeof filters.endDate !== 'number' || item.createdAt <= filters.endDate;

    return textMatch && startDateMatch && endDateMatch;
  })
  .sort((item1, item2) => {
    if (filters.sortBy === 'amount') {
      return item2.amount - item1.amount;
    } else { // date 
      return item1.createdAt < item2.createdAt ? 1 : -1;
    }
  });
};

const reducers = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  actionsLog: actionsLogReducer
});

const store = createStore(reducers);
store.subscribe(() => {
  const state = store.getState();
  console.log(state);
  console.log(getVisibleExpense(state.expenses, state.filters));
});

console.log('Inital state:');
console.log(store.getState());

const { payload: expense2 } = store.dispatch(addExpenseAction({ description: 'coffee', amount: 3.75, createdAt: -1000 }));
const { payload: expense1 } = store.dispatch(addExpenseAction({ description: 'rent', amount: 1200, createdAt: 1000 }));

// store.dispatch(removeExpenseAction(expense1.id));
// store.dispatch(editExpenseAction(expense2.id, { amount: 4.25 }));

store.dispatch(setFiltersAction('rent'));
store.dispatch(setFiltersAction());
store.dispatch(sortByAmountAction());
store.dispatch(sortByDateAction());
store.dispatch(setStartDateAction(0));
store.dispatch(setStartDateAction());
store.dispatch(setEndDateAction(3000));

