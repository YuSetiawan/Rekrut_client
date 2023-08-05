import experienceReducer from "./experienceReducer";
import { combineReducers } from "redux";
import portofolioReducer from "./portofolioReducer";
import skillReducer from "./skillReducer";
import workerReducer from "./workerReducer";
import recruiterReducer from "./recruiterReducer";

const rootReducer = combineReducers({
  experience: experienceReducer,
  portofolio: portofolioReducer,
  skill: skillReducer,
  worker: workerReducer,
  recruiter: recruiterReducer,
});

export default rootReducer;
