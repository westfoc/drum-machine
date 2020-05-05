import { combineReducers } from "redux";
import instruments from "./instruments-reducer";
import isPlaying from "./playback-reducer";

const reducerMap = { instruments, isPlaying };
const rootReducer = combineReducers(reducerMap);

export default rootReducer;
