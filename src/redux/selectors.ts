import { AppState, IsPlaying } from "./core";

export function getIsPlaying(state: AppState): IsPlaying {
  return state.isPlaying;
}
