const InitState = {
  usersRecord: [],
};
const usersRecord = (state = InitState, action) => {
  switch (action.type) {
    case "users_record":
      return {
        usersRecord: action.data,
      };

    default:
      return state;
  }
};
export default usersRecord;
