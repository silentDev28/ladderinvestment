const InitState = {
  pledge_available: [],
};
const pledgeAvailability = (state = InitState, action) => {
  switch (action.type) {
    case "pledge_available":
      return {
        pledge_available: action.data,
      };

    default:
      return state;
  }
};
export default pledgeAvailability;
