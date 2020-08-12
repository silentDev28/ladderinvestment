const InitState = {
  transactions: [],
};
const transactionReducer = (state = InitState, action) => {
  switch (action.type) {
    case "transaction_data":
      return {
        transactions: action.data,
      };

    default:
      return state;
  }
};
export default transactionReducer;
