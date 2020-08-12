const InitState = {
  last_pledge_data: [],
};
const lastPledgeReducer = (state = InitState, action) => {
  switch (action.type) {
    case "last_pledge_data":
      return {
        last_pledge_data: action.data,
      };

    default:
      return state;
  }
};
export default lastPledgeReducer;
