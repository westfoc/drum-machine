import { put, select, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { Instruments, DrumPatterns, IsPlaying } from "../../redux/core";
import * as actions from "../action-creators";
import { getIsPlaying, getInstruments } from "../selectors";
import { createDrumPatterns } from "../../utils/audio-utils";

export function* handleStartPlayback(): SagaIterator {
  // Resume audio contenxt for Tone JS
  yield put(actions.unlockTone());

  const isPlayingState: IsPlaying = yield select(getIsPlaying);
  yield put(actions.setToggleIsPlaying(!isPlayingState));

  const instruments: Instruments = yield select(getInstruments);
  const drumPatterns: DrumPatterns = yield call(
    createDrumPatterns,
    instruments
  );
  const isCurrentPlayState: IsPlaying = yield select(getIsPlaying);

  if (isCurrentPlayState) {
    yield put(actions.setupLoop(drumPatterns));
    yield put(actions.playSound());
  } else {
    yield put(actions.stopSound());
  }
}

export function* handleStopPlayback(): SagaIterator {
  yield put(actions.setToggleIsPlaying(false));
  yield put(actions.stopSound());
}
