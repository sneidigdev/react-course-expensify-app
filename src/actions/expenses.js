import actionTypes from './actionTypes';
import database from '../firebase/firebase';

const addExpenseAction = (expense) => ({
  type: actionTypes.ADD_EXPENSE,
  payload: expense
});

export const startAddExpenseAction = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;

    const expense = { description, note, amount, createdAt };
    database.ref('expenses').push(expense)
      .then(({key}) => {
        dispatch(addExpenseAction(
          {
            id: key,
            ...expense
          }
        ));
      });
  };
};

export const removeExpenseAction = (id) => ( 
  { 
    type: actionTypes.REMOVE_EXPENSE, 
    payload: { id } 
  }
);

export const startRemoveExpenseAction = (id) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove()
      .then( () => {
        dispatch(removeExpenseAction(id));
      });
  };
};

export const editExpenseAction = (id, edit) => ( 
  { 
    type: actionTypes.EDIT_EXPENSE, 
    payload: { ...edit, id } 
  }
);

export const startEditExpenseAction = (id, edit) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(edit)
      .then( () => {
        dispatch(editExpenseAction(id, edit));
      });
  };
};

// SET_EXPENSES
export const setExpensesAction = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startSetExpensesAction = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];

      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });

      dispatch(setExpensesAction(expenses));
    });
  };
};
