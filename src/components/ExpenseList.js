import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

import selectExpenses from '../selectors/expenses';

const createListItems = (expenses) => {
  if (expenses.length === 0) {
    return (
      <div className='list-item list-item--message'>
        <span>No expenses</span>
      </div>
    );
  } else {
    return expenses.map((item) => {
      return <ExpenseListItem key={item.id} item={item} />;
    });
  }
};

const ExpenseList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Expenses</div>
      <div className='show-for-desktop'>Expense</div>
      <div className='show-for-desktop'>Amount</div>
    </div>
    <div className='list-body'>
      {createListItems(props.expenses, props.filters)}
    </div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);