const InitState = {
  ref_users: [],
};
const refUsers = (state = InitState, action) => {
  switch (action.type) {
    case "ref_users":
      return {
        ref_users: action.data,
      };

    default:
      return state;
  }
};
export default refUsers;
