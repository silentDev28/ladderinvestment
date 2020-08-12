const InitState = {
  loginAndReg: "",
};
const loginAndRegReducer = (state = InitState, action) => {
  switch (action.type) {
    case "send_route":
      return {
        loginAndReg: action.data,
      };

    default:
      return state;
  }
};
export default loginAndRegReducer;
