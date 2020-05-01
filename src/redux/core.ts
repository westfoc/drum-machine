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

export type Instruments = ReadonlyArray<Instrument>;

export interface AppState {
  instruments: ReadonlyArray<Instrument>;
}

const titles: ReadonlyArray<string> = ["Kick", "Clap", "Hat", "Snare"];

const createdBeats = (): Beats => {
  return Array.from(new Array(15), (val, index) => ({
    id: `${index}${val}`,
    on: false,
  }));
};

const initialInstruments: Instruments = titles.map((title: string) => {
  return {
    title,
    file: "",
    beats: createdBeats(),
  };
});

const AppStateRecord = {
  instruments: initialInstruments,
};

export const INITIAL_STATE: AppState = AppStateRecord;
