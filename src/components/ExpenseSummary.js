import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import selectExpenses from '../selectors/expenses';
import totalExpenses from '../selectors/expenses-total';

const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const total = numeral(expenseTotal).format('$0,0.00');

  return (
    <div>
      <p>Viewing {expenseCount} expense(s) totalling {total}</p>
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