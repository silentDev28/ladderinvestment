const InitState = {
  testimonies: [],
};
const testimonies = (state = InitState, action) => {
  switch (action.type) {
    case "testimonies":
      return {
        testimonies: action.data,
      };
    default:
      return state;
  }
};
export default testimonies;
