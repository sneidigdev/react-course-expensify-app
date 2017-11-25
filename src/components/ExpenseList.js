import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

import selectExpenses from '../selectors/expenses';

const createListItems = (expenses) => {
  return expenses.map((item) => {
    return <ExpenseListItem key={item.id} item={item} />;
  });
};

const ExpenseList = (props) => (
  <div>
    <h1>List of expenses</h1>
    {createListItems(props.expenses, props.filters)}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);