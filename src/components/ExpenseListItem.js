import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class ExpenseListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <Link to={`/edit/${item.id}`}>
          <h3>{item.description}</h3>
        </Link>
        <p>{`${item.amount} - ${item.note} - ${moment(item.createdAt).format('MMM Do, YYYY')}`}</p>
      </div>
    );
  }
};

export default ExpenseListItem;