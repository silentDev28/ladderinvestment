const InitState = {
  getNewToggleState: "none",
};
const toggleConfirmNotSure = (state = InitState, action) => {
  switch (action.type) {
    case "toggle_confirm":
      return {
        getNewToggleState: action.data,
      };
    default:
      return state;
  }
};
export default toggleConfirmNotSure;
