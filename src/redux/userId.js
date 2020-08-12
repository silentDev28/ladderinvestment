const InitState = {
  userId: "",
};
const userIdReducer = (state = InitState, action) => {
  switch (action.type) {
    case "user_id":
      return {
        userId: action.data,
      };

    default:
      return state;
  }
};
export default userIdReducer;
