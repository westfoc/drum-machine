import { put, select } from "redux-saga/effects";
import * as actions from "../action-creators";
import { getIsPlaying } from "../selectors";

export function* handleStartPlayback() {
  const isPlayingState = yield select(getIsPlaying);
  yield put(actions.setToggleIsPlaying(!isPlayingState));

  const isCurrentPlayState = yield select(getIsPlaying);
  if (isCurrentPlayState) {
    yield put(actions.playSound());
  }
}
