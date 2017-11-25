import actionTypes from '../actions/actionTypes';
import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

export default (state = filtersReducerDefaultState, action) => {
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