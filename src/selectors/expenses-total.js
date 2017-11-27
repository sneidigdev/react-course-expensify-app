export default (expenses) => {
  return expenses.reduce((total, item) => {
    return total += item.amount;
  }, 0);
};