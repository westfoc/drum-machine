import { IsPlaying, SelectBeatParams } from "./core";

export const SET_SELECT_BEAT = "SET_SELECT_BEAT";
export const SET_TOGGLE_IS_PLAYING = "SET_TOGGLE_IS_PLAYING";
export const HANDLE_START_PLAYBACK = "HANDLE_START_PLAYBACK";
export const PLAY_SOUND = "PLAY_SOUND";

interface SelectBeatAction {
  type: typeof SET_SELECT_BEAT;
  params: SelectBeatParams;
}

interface HandleStartPlaybackAction {
  type: typeof HANDLE_START_PLAYBACK;
}

interface PlaySoundAction {
  type: typeof PLAY_SOUND;
}

export interface SetToggleIsPlaying {
  type: typeof SET_TOGGLE_IS_PLAYING;
  isPlaying: IsPlaying;
}

export const selectBeatAction = (
  params: SelectBeatParams
): SelectBeatAction => {
  return {
    type: SET_SELECT_BEAT,
    params,
  };
};

export const setToggleIsPlaying = (
  isPlaying: IsPlaying
): SetToggleIsPlaying => {
  return { type: SET_TOGGLE_IS_PLAYING, isPlaying };
};

export const handleStartPlayback = () => {
  return {
    type: HANDLE_START_PLAYBACK,
  };
};

export const playSound = (): PlaySoundAction => {
  return {
    type: PLAY_SOUND,
  };
};

export type DrumMachineActionTypes =
  | SelectBeatAction
  | SetToggleIsPlaying
  | HandleStartPlaybackAction
  | PlaySoundAction;
