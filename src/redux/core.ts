interface Beat {
  on: boolean;
}

type Beats = ReadonlyArray<Beat>;

interface Instrument {
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

type Instruments = ReadonlyArray<Instrument>;

export interface AppState {
  Instruments: ReadonlyArray<Instrument>;
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
  Instruments: initialInstruments,
};

export const INITIAL_STATE: AppState = AppStateRecord;
