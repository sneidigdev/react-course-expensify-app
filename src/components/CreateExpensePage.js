import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startAddExpenseAction } from '../actions/expenses';

class CreateExpensePage extends Component {
  handleSubmit = (expense) => {
    this.props.startAddExpenseAction(expense);
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
          handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default connect(null, { startAddExpenseAction })(CreateExpensePage);