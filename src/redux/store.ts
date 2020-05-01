import { createStore } from "redux";
import rootReducer from "./reducers/root_reducer";
import { INITIAL_STATE } from "./core";

const store = createStore(rootReducer, INITIAL_STATE);

export default store;
