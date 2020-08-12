const InitState = {
  mergeUsers: "",
};
const MergeUsers = (state = InitState, action) => {
  switch (action.type) {
    case "merge_users":
      return {
        mergeUsers: action.data,
      };

    default:
      return state;
  }
};
export default MergeUsers;
