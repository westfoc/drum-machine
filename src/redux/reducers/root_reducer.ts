import { combineReducers } from "redux";
import instruments from "./instruments_reducer";

const reducerMap = { instruments };
const rootReducer = combineReducers(reducerMap);

export default rootReducer;
