import { combineReducers } from "redux";
import instruments from "./instruments_reducer";
import isPlaying from "./playback_reducer";

const reducerMap = { instruments, isPlaying };
const rootReducer = combineReducers(reducerMap);

export default rootReducer;
