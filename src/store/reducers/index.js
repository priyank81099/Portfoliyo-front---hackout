import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";

const rootReducer = combineReducers({
  err: errorReducer,
  auth: authReducer,
  project: projectReducer
});

export default rootReducer;
