import actionTypes from './actionTypes';

export const setFiltersAction = (fiterText = '') => ( { type: actionTypes.SET_FILTERS_TEXT, payload: { text: fiterText} } );
export const sortByDateAction = () => ({ type: actionTypes.SET_FILTERS_SORT, payload: { sort: 'date' } });
export const sortByAmountAction = () => ({ type: actionTypes.SET_FILTERS_SORT, payload: { sort: 'amount' } });
export const setStartDateAction = (date = undefined) => ({ type: actionTypes.SET_FILTERS_DATE, payload: { startDate: date } });
export const setEndDateAction = (date = undefined) => ({ type: actionTypes.SET_FILTERS_DATE, payload: { endDate: date } });
