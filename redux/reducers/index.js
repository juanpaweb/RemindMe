import calendar from "./calendar";
import tabNavigation from "./tabNavigation";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  calendar,
  tabNavigation
});

export default rootReducer;
