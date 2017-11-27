import React, { Component } from 'react';
import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

const now = moment();

class ExpenseForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = { 
      description: props.expense ? props.expense.description : '', 
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false
    }
  }
  

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value });
  }

  handleAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState({ [e.target.name]: e.target.value });
    }
  }

  handleNoteChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleDateChange = (createdAt) => {
    if (createdAt) {
      this.setState({ 'createdAt': createdAt });
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      description: this.state.description,
      amount: parseFloat(this.state.amount, 10),
      note: this.state.note,
      createdAt: this.state.createdAt
    };

    if (!data.description || !this.state.amount) {
      this.setState({ error: 'Please provide description and amount.' });
    } else {
      this.setState({ error: '' });
      this.props.handleSubmit(data);
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input 
            type='text' 
            placeholder='Description'
            autoFocus
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
          <input 
            name='amount'
            type='text' 
            placeholder='Amount'
            value={this.state.amount}
            onChange={this.handleAmountChange}
          />
          <textarea 
            name='note' 
            placeholder='Add a note (optional)'
            value={this.state.note}
            onChange={this.handleNoteChange}
          >
          </textarea>
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.handleDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={({focused}) => this.setState({calendarFocused: focused})}
            numberOfMonths={1}
            isOutsideRange={() => {return false;}}
          />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;