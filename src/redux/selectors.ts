import { AppState, IsPlaying, Beats } from "./core";

export function getIsPlaying(state: AppState): IsPlaying {
  return state.isPlaying;
}

export function getBeats(state: AppState, instrument: string): Beats {
  return state.instruments[instrument].beats;
}
