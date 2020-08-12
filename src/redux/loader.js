const InitState = {
  loader: false,
};
const sendLoader = (state = InitState, action) => {
  switch (action.type) {
    case "loader":
      return {
        loader: action.data,
      };
    default:
      return state;
  }
};
export default sendLoader;
