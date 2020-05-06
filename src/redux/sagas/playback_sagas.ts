import { call, put, select } from "redux-saga/effects";
import * as actions from "./../action-creators";
import { getIsPlaying } from "./../selectors";
import { setupSample, createAudioContext } from "../../utils/audio-utils";

export function* handleStartPlayback() {
  const isPlayingState = yield select(getIsPlaying);
  yield put(actions.setToggleIsPlaying(!isPlayingState));

  // Set up audio context and load sample
  const audioContext = yield call(createAudioContext);
  const loadedSample = yield call(
    setupSample,
    audioContext,
    "../../src/assets/clap.wav"
  );

  if (isPlayingState) {
    const currentNote: number = 0;
    const nextNoteTime = audioContext.currentTime;
  }
  console.log(loadedSample); // tslint:disable-line
  console.log(currentNote, nextNoteTime); // tslint:disable-line
}
