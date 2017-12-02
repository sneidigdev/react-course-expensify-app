import actionTypes from '../actions/actionTypes';

export default (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_EXPENSE:
      return [ ...state, payload ];
    case actionTypes.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== payload.id);
    case actionTypes.EDIT_EXPENSE:
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...item, ...payload };
        } else {
          return item;
        }
      });
    case actionTypes.SET_EXPENSES:
      return payload;
    default:
      return state;
  }
}