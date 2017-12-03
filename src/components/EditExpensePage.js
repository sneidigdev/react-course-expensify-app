import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { startEditExpenseAction, startRemoveExpenseAction } from '../actions/expenses';

class EditExpensePage extends Component {
  handleSubmit = (expense) => {
    this.props.startEditExpenseAction(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  handleRemove = () => {
    this.props.startRemoveExpenseAction(this.props.expense.id);
    this.props.history.push('/');
  }

  render = () => {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Expense</h1>
          </div>
        </div>
        <div className='content-container'>
          <ExpenseForm
            expense={this.props.expense}
            handleSubmit={this.handleSubmit}
          />
          <button className='button button--secondary' onClick={this.handleRemove}>Remove</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    expense: state.expenses.find( (item) => item.id === props.match.params.id)
  }
}

export default connect(mapStateToProps, { startEditExpenseAction, startRemoveExpenseAction })(EditExpensePage);