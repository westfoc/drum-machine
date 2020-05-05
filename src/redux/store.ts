import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { call } from "redux-saga/effects";
import rootReducer from "./reducers/root-reducer";
import { sagas } from "./sagas/root-saga";

function* sagaRoot() {
  yield call(sagas);
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagaRoot);

export default store;
