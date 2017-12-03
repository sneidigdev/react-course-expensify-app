import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

class ExpenseListItem extends Component {
  render() {
    const item = this.props.item;
    return (
      <Link className='list-item' to={`/edit/${item.id}`}>
        <div>
          <h3 className='list-item__title'>{item.description}</h3>
          <span className='list-item__sub-title'>{moment(item.createdAt).format('MMM Do, YYYY')}</span>
          <p>{item.note}</p>
        </div>
        <h3 className='list-item__data'>{numeral(item.amount).format('$0,0.00')}</h3>
      </Link>
    );
  }
};

export default ExpenseListItem;