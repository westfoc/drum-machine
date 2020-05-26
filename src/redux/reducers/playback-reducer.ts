import { INITIAL_STATE, IsPlaying } from "../core";
import {
  SET_TOGGLE_IS_PLAYING,
  DrumMachineActionTypes,
} from "../action-creators";

const setToggleIsPlaying = (isPlaying: IsPlaying): IsPlaying => {
  return isPlaying;
};

const playback = (
  state: IsPlaying = INITIAL_STATE.isPlaying,
  action: DrumMachineActionTypes
): IsPlaying => {
  switch (action.type) {
    case SET_TOGGLE_IS_PLAYING:
      return setToggleIsPlaying(action.isPlaying);
    default:
      return state;
  }
};

export default playback;
