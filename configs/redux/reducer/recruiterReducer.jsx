const initialState = {
  recruiter: [],
  recruiterUser: [],
};

const recruiterReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_RECRUITER") {
    return {
      ...state,
      recruiter: action.payload,
    };
  } else if (action.type === "GET_ALL_RECRUITER_USER") {
    return {
      ...state,
      recruiterUser: action.payload,
    };
  } else if (action.type === "CREATE_RECRUITER") {
    return state;
  } else if (action.type === "EDIT_RECRUITER") {
    return state;
  } else if (action.type === "EDIT_RECRUITER_PHOTO") {
    return state;
  } else if (action.type === "DELETE_RECRUITER") {
    return state;
  } else {
    return state;
  }
};

export default recruiterReducer;
