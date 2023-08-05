const initialState = {
  skill: [],
  skillUser: [],
};

const skillReducer = (state = initialState, action) => {
  if (action.type === "GET_ALL_SKILL") {
    return {
      ...state,
      skill: action.payload,
    };
  } else if (action.type === "GET_ALL_SKILL_USER") {
    return {
      ...state,
      skillUser: action.payload,
    };
  } else if (action.type === "CREATE_SKILL") {
    return state;
  } else if (action.type === "EDIT_SKILL") {
    return state;
  } else if (action.type === "DELETE_SKILL") {
    return state;
  } else {
    return state;
  }
};

export default skillReducer;
