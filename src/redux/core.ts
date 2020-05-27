export interface Beat {
  on: boolean;
  id: string;
}

export type Beats = ReadonlyArray<Beat>;

export type DrumPattern = ReadonlyArray<ReadonlyArray<string>>;

export type DrumPatterns = {
  [key: string]: DrumPattern;
};

export type Drumkit = {
  [key: string]: string;
};

export interface Instrument {
  title: string;
  file: string;
  beats: Beats;
}

export interface Instruments {
  [title: string]: Instrument;
}

export interface SelectBeatParams {
  id: string;
  title: string;
  on: boolean;
}

export type IsPlaying = boolean;

export interface AppState {
  instruments: Instruments;
  isPlaying: IsPlaying;
}

const titles: ReadonlyArray<string> = ["Kick", "Clap", "Hihat", "Snare"];

export interface Context {
  resume: () => Promise<never>;
}

export interface Player {
  start: (time: number) => void;
  dispose: () => void;
  context: Context;
}

export type Players = {
  [title: string]: Player;
} & {
  get: (title: string) => Player;
};

export interface Part {
  loop: boolean;
  start: (time: number) => void;
}

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

const AppStateRecord: AppState = {
  instruments: initialInstruments,
  isPlaying: false,
};

export const INITIAL_STATE: AppState = AppStateRecord;
