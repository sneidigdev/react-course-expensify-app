import actionTypes from '../actions/actionTypes';

export default (state = [], { type, payload: expense }) => {
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