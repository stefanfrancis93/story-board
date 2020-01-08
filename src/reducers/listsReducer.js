export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_LISTS":
      return action.payload;
    default:
      return state;
  }
};
