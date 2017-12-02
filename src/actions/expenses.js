import actionTypes from './actionTypes';
import database from '../firebase/firebase';

const addExpenseAction = (expense) => ({
  type: actionTypes.ADD_EXPENSE,
  payload: expense
});

export const startAddExpenseAction = (expenseData = {}) => {
  return (dispatch, getState) => {
    const {
      description = '', 
      note = '', 
      amount = 0, 
      createdAt = 0
    } = expenseData;
    
    const uid = getState().auth.uid;

    const expense = { description, note, amount, createdAt };
    database.ref(`users/${uid}/expenses`).push(expense)
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).remove()
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
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses/${id}`).update(edit)
      .then( () => {
        dispatch(editExpenseAction(id, edit));
      });
  };
};

// SET_EXPENSES
export const setExpensesAction = (expenses) => ({
  type: actionTypes.SET_EXPENSES,
  payload: expenses
});

export const startSetExpensesAction = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
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
