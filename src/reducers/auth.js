import actionTypes from '../actions/actionTypes';

export default (state = {}, action) => {
  switch(action.type) {
    case actionTypes.LOGIN:
      return {
        uid: action.payload.uid
      };
    case actionTypes.LOGOUT:
      return {};
    default:
      return state;
  }
}