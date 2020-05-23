import { put, select, call } from "redux-saga/effects";
import * as actions from "../action-creators";
import { getIsPlaying, getBeats } from "../selectors";
import { createDrumPattern } from "../../utils/audio-utils";

export function* handleStartPlayback() {
  yield put(actions.unlockTone());

  const isPlayingState = yield select(getIsPlaying);
  yield put(actions.setToggleIsPlaying(!isPlayingState));

  const isCurrentPlayState = yield select(getIsPlaying);
  if (isCurrentPlayState) {
    const kickBeats = yield select(getBeats, "Kick");
    const kickDrumPattern = yield call(createDrumPattern, kickBeats);
    yield put(actions.setupLoop(kickDrumPattern));
    yield put(actions.playSound());
  } else {
    yield put(actions.stopSound());
  }
}
