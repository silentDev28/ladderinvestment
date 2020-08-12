const InitState = {
  getFinalConfirm: "none",
};
const finalConfirmBtn = (state = InitState, action) => {
  switch (action.type) {
    case "final_confirm":
      return {
        getFinalConfirm: action.data,
      };

    default:
      return state;
  }
};
export default finalConfirmBtn;
