import { takeEvery } from "redux-saga/effects";
import { handleStartPlayback } from "./playback-sagas";

export function* sagas() {
  return [
    // playback
    yield takeEvery("HANDLE_START_PLAYBACK", handleStartPlayback),
  ];
}
