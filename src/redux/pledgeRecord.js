const InitState = {
  pledge_details: [],
};
const pledgeRecordReducer = (state = InitState, action) => {
  switch (action.type) {
    case "pledge_record":
      console.log(action.data);
      return {
        pledge_details: action.data,
      };
    case "pledge_data":
      return {
        pledge_details: [...state.pledge_details, action.data],
      };
    default:
      return state;
  }
};
export default pledgeRecordReducer;
