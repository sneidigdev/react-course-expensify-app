import uuid from 'uuid';

import actionTypes from './actionTypes';

export const addExpenseAction = (
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

export const removeExpenseAction = (id) => ( { type: actionTypes.REMOVE_EXPENSE, payload: { id } });
export const editExpenseAction = (id, edit) => ( { type: actionTypes.EDIT_EXPENSE, payload: { ...edit, id } });
