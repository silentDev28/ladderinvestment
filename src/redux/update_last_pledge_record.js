const InitState = {
  update_last_pledge_record: "",
};
const updateLastPledgeRecord = (state = InitState, action) => {
  switch (action.type) {
    case "upldate_pledge_data":
      return {
        update_last_pledge_record: action.data,
      };

    default:
      return state;
  }
};
export default updateLastPledgeRecord;
