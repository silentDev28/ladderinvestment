const InitState = {
  pledge_receiver_id: "",
};
const pledgeMergerReceiver = (state = InitState, action) => {
  switch (action.type) {
    case "pledge_receiver_btn":
      console.log(action.data);
      return {
        pledge_receiver_id: action.data,
      };

    default:
      return state;
  }
};
export default pledgeMergerReceiver;
