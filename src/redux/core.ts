export interface Beat {
  on: boolean;
  id: string;
}

export type Beats = ReadonlyArray<Beat>;

export interface Instrument {
  title: string;
  file: string;
  beats: Beats;
}

export interface Instruments {
  [title: string]: Instrument;
}

export interface AppState {
  instruments: Instruments;
  isPlaying: boolean;
}

const titles: ReadonlyArray<string> = ["Kick", "Clap", "Hat", "Snare"];

const createdBeats = (): Beats => {
  return Array.from({ length: 16 }, (val, index) => {
    return {
      id: index.toString(),
      on: false,
    };
  });
};

const initialInstruments: Instruments = titles.reduce(
  (acc: Instruments, title: string) => {
    return {
      ...acc,
      [title]: {
        title,
        file: "",
        beats: createdBeats(),
      },
    };
  },
  {}
);

const AppStateRecord = {
  instruments: initialInstruments,
  isPlaying: false,
};

export const INITIAL_STATE: AppState = AppStateRecord;
