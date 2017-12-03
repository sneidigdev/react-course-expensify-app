import moment from 'moment';

export default (expenses, filters) => {
  return expenses.filter((item) => {
    const createdAtMoment = moment(item.createdAt);
    const startDateMatch = filters.startDate ? filters.startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = filters.endDate ? filters.endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = filters.text ? item.description.toLowerCase().includes(filters.text.toLowerCase()) : true;

    return textMatch && startDateMatch && endDateMatch;
  })
  .sort((item1, item2) => {
    if (filters.sortBy === 'amount') {
      return item2.amount - item1.amount;
    } else { // date 
      return item1.createdAt < item2.createdAt ? 1 : -1;
    }
  });
};