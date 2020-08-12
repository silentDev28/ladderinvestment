const InitState = {
  user: null,
};
const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "auth_user":
      return {
        user: action.data,
      };

    default:
      return state;
  }
};
export default userReducer;
