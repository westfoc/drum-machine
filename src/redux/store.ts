import { createStore, applyMiddleware, Middleware, Store } from "redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import { call } from "redux-saga/effects";
import rootReducer from "./reducers/root-reducer";
import { sagas } from "./sagas/root-saga";
import { audioMiddleware } from "./audio-middleware";

function* sagaRoot() {
  yield call(sagas);
}

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();
const audioMiddlewareForStore: Middleware = audioMiddleware();
const store: Store<{}> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, audioMiddlewareForStore)
);
sagaMiddleware.run(sagaRoot);

export default store;
