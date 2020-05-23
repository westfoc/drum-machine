import { put, select, call } from "redux-saga/effects";
import { Instruments } from "../../redux/core";
import * as actions from "../action-creators";
import { getIsPlaying, getInstruments } from "../selectors";
import { createDrumPatterns } from "../../utils/audio-utils";

export function* handleStartPlayback() {
  yield put(actions.unlockTone());

  const isPlayingState = yield select(getIsPlaying);
  yield put(actions.setToggleIsPlaying(!isPlayingState));

  const instruments: Instruments = yield select(getInstruments);
  const drumPatterns = yield call(createDrumPatterns, instruments);
  const isCurrentPlayState = yield select(getIsPlaying);

  if (isCurrentPlayState) {
    yield put(actions.setupLoop(drumPatterns));
    yield put(actions.playSound());
  } else {
    yield put(actions.stopSound());
  }
}
