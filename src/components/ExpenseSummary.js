import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const total = numeral(expenseTotal).format('$0,0.00');

  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{expenseCount}</span> expense(s) totalling <span>{total}</span>
        </h1>
        <div className='page-header__actions'>
          <Link className='button' to='/create'>Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: totalExpenses(visibleExpenses)
  };
}

export default connect(mapStateToProps)(ExpenseSummary);