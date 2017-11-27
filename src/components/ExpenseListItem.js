import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class ExpenseListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <div>
        <Link to={`/edit/${item.id}`}>
          <h3>{item.description}</h3>
        </Link>
        <p>
          {numeral(item.amount).format('$0,0.00')}
          -- 
          {moment(item.createdAt).format('MMM Do, YYYY')}
        </p>
        <p>
          {item.note}
        </p>
      </div>
    );
  }
};

export default ExpenseListItem;