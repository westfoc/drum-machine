import { INITIAL_STATE, Instruments } from "../core";

export const INSTRUMENTS = "INSTRUMENTS";

interface InstrumentsState {
  instruments: Instruments;
}

interface InstrumentsAction {
  type: typeof INSTRUMENTS;
  payload: InstrumentsState;
}

function instruments(
  state = INITIAL_STATE.instruments,
  action: InstrumentsAction
) {
  switch (action.type) {
    default:
      return state;
  }
}

export default instruments;
