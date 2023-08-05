const initialState = {
  portofolio: [],
  portofolioUser: [],
};

const portofolioReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_PORTOFOLIO") {
    return {
      ...state,
      portofolio: action.payload,
    };
  } else if (action.type === "GET_ALL_PORTOFOLIO_USER") {
    return {
      ...state,
      portofolioUser: action.payload,
    };
  } else if (action.type === "CREATE_PORTOFOLIO") {
    return state;
  } else if (action.type === "EDIT_PORTOFOLIO") {
    return state;
  } else if (action.type === "DELETE_PORTOFOLIO") {
    return state;
  } else {
    return state;
  }
};

export default portofolioReducer;
