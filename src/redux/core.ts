interface Beat {
  on: boolean;
}

export type Beats = ReadonlyArray<Beat>;

export interface Instrument {
  title: string;
  file: string;
  beats: Beats;
}

const beat: Beat = {
  on: false,
};

const beats: Beats = [
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
  beat,
];

export type Instruments = ReadonlyArray<Instrument>;

export interface AppState {
  instruments: ReadonlyArray<Instrument>;
}

const titles: ReadonlyArray<string> = ["Kick", "Clap", "Hat", "Snare"];

const initialInstruments: Instruments = titles.map((title: string) => {
  return {
    title,
    file: "",
    beats,
  };
});

const AppStateRecord = {
  instruments: initialInstruments,
};

export const INITIAL_STATE: AppState = AppStateRecord;
