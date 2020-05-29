import { put, select, call } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { Instruments, DrumPatterns, IsPlaying } from "../../redux/core";
import * as actions from "../action-creators";
import { getIsPlaying, getInstruments, getIsMuted } from "../selectors";
import { createDrumPatterns } from "../../utils/audio-utils";

export function* handleStartPlayback(): SagaIterator {
  // Resume audio context for Tone JS
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

export function* handleMuteSound(
  action: actions.HandleMuteSoundAction
): SagaIterator {
  const { title } = action;
  const isMuted: boolean = yield select(getIsMuted, title);

  yield put(actions.setInstrumentIsMuted(!isMuted, title));
  yield put(actions.muteSound(title));
}

export function* handleSelectBeat(
  action: actions.HandleSelectBeatAction
): SagaIterator {
  yield put(actions.setTransportCancel());
  yield put(actions.selectBeat(action.params));

  const instruments: Instruments = yield select(getInstruments);
  const drumPatterns: DrumPatterns = yield call(
    createDrumPatterns,
    instruments
  );

  yield put(actions.setupLoop(drumPatterns));
}
