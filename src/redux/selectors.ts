import { AppState, IsPlaying, Beats, Instruments } from "./core";

export function getIsPlaying(state: AppState): IsPlaying {
  return state.isPlaying;
}

export function getBeats(state: AppState, instrument: string): Beats {
  return state.instruments[instrument].beats;
}

export function getInstruments(state: AppState): Instruments {
  return state.instruments;
}

export function getIsMuted(state: AppState, instrument: string): boolean {
  return state.instruments[instrument].isMuted;
}
