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
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm 
            handleSubmit={this.handleSubmit}/>
        </div>
      </div>
    );
  }
}

export default connect(null, { startAddExpenseAction })(CreateExpensePage);