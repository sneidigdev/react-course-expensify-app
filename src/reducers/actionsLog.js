export default (state = [], action) => {
  console.log(`Current action: ${action.type}`);
  return state.concat([action.type]);
};