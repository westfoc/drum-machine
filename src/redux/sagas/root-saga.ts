import { takeEvery } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import {
  handleStartPlayback,
  handleStopPlayback,
  handleMuteSound,
} from "./playback-sagas";

export function* sagas(): SagaIterator {
  return [
    // playback
    yield takeEvery("HANDLE_START_PLAYBACK", handleStartPlayback),
    yield takeEvery("HANDLE_STOP_PLAYBACK", handleStopPlayback),
    yield takeEvery("HANDLE_MUTE_SOUND", handleMuteSound),
  ];
}
