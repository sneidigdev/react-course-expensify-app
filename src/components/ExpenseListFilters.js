import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';

import { setFiltersAction, sortByDateAction, sortByAmountAction, setStartDateAction, setEndDateAction } from '../actions/filters';

class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null
  }

  handleTextChange = (event) => {
    this.props.setFiltersAction(event.target.value);
  }

  handleSelectChange = (event) => {
    if (event.target.value === 'date') {
      this.props.sortByDateAction();
    }
    else {
      this.props.sortByAmountAction();
    }
  }

  handleDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDateAction(startDate);
    this.props.setEndDateAction(endDate);
  }

  handleFocusChange = (calendarFocused) => {
    this.setState({calendarFocused});
  }

  render() {
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={this.handleTextChange} />
        <select 
          value={this.props.filters.sortBy} 
          onChange={this.handleSelectChange}>
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.handleDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.handleFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    filters: state.filters
  }
}

export default connect(
  mapStateToProps, 
  { setFiltersAction, sortByDateAction, sortByAmountAction, setStartDateAction, setEndDateAction }
)(ExpenseListFilters);