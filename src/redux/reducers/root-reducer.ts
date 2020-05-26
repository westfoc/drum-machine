import { combineReducers, Reducer, ReducersMapObject } from "redux";
import instruments from "./instruments-reducer";
import isPlaying from "./playback-reducer";

const reducerMap: ReducersMapObject = { instruments, isPlaying };
const rootReducer: Reducer = combineReducers(reducerMap);

export default rootReducer;
