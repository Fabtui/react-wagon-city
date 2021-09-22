const activeCityReducer = (state, action) => {
  if (state === undefined) {
    console.log("reducer null")
    return null;
  }

  if (action.type === 'CITY_SELECTED') {
    return action.payload;
  } else {
    return state;
  }
};

export default activeCityReducer;
