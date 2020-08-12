const InitState = {
  user_details: "",
};
const userDetailsReducer = (state = InitState, action) => {
  switch (action.type) {
    case "user_details":
      return {
        user_details: action.data,
      };
    case "update_bank_details":
      return {
        user_details: action.data,
      };
    default:
      return state;
  }
};
export default userDetailsReducer;
