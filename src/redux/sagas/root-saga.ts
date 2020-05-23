import { takeEvery } from "redux-saga/effects";
import { handleStartPlayback, handleStopPlayback } from "./playback-sagas";

export function* sagas() {
  return [
    // playback
    yield takeEvery("HANDLE_START_PLAYBACK", handleStartPlayback),
    yield takeEvery("HANDLE_STOP_PLAYBACK", handleStopPlayback),
  ];
}
