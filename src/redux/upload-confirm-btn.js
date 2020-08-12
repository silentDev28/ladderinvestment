const InitState = {
  getToggleState: "block",
};
const sendUploadToggle = (state = InitState, action) => {
  switch (action.type) {
    case "toggle_data":
      return {
        getToggleState: action.data,
      };

    default:
      return state;
  }
};
export default sendUploadToggle;
