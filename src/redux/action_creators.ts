import { IsPlaying, SelectBeatParams } from "./core";

export const SET_SELECT_BEAT = "SET_SELECT_BEAT";
export const SET_TOGGLE_IS_PLAYING = "SET_TOGGLE_IS_PLAYING";

interface SelectBeatAction {
  type: typeof SET_SELECT_BEAT;
  params: SelectBeatParams;
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

export type DrumMachineActionTypes = SelectBeatAction | SetToggleIsPlaying;
