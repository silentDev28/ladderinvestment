const InitState = {
  pledgeRecord: [],
};
const totPledgeRecords = (state = InitState, action) => {
  switch (action.type) {
    case "tot_pledge_record":
      return {
        pledgeRecord: action.data,
      };

    default:
      return state;
  }
};
export default totPledgeRecords;
