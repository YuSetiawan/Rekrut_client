import experienceReducer from './experienceReducer';
import {combineReducers} from 'redux';
import portofolioReducer from './portofolioReducer';
import skillReducer from './skillReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  experience: experienceReducer,
  portofolio: portofolioReducer,
  skill: skillReducer,
  user: userReducer,
});

export default rootReducer;
