const initialState = {
  experience: [],
  experienceUser: [],
};

const experienceReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_EXPERIENCE") {
    return {
      ...state,
      experience: action.payload,
    };
  } else if (action.type === "GET_ALL_EXPERIENCE_USER") {
    return {
      ...state,
      experienceUser: action.payload,
    };
  } else if (action.type === "CREATE_EXPERIENCE") {
    return state;
  } else if (action.type === "EDIT_EXPERIENCE") {
    return state;
  } else if (action.type === "DELETE_EXPERIENCE") {
    return state;
  } else {
    return state;
  }
};

export default experienceReducer;
