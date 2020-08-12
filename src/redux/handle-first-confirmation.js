const InitState = {
  first_confirmation: "block",
};
const firstConfirmationBtn = (state = InitState, action) => {
  switch (action.type) {
    case "send_ask_confirmation":
      return {
        first_confirmation: action.data,
      };

    default:
      return state;
  }
};
export default firstConfirmationBtn;
