import { INITIAL_STATE, Instruments, SelectBeatParams } from "../core";
import {
  SET_SELECT_BEAT,
  SET_INSTRUMENT_IS_MUTED,
  DrumMachineActionTypes,
} from "../action-creators";

const setBeats = (
  state: Instruments,
  params: SelectBeatParams
): Instruments => {
  const newState = {
    ...state,
    [params.title]: {
      ...state[params.title],
      beats: [
        ...state[params.title].beats.slice(0, Number(params.id)),
        { on: !params.on, id: params.id },
        ...state[params.title].beats.slice(Number(params.id) + 1),
      ],
    },
  };
  return newState;
};

const setIsMuted = (
  state: Instruments,
  isMuted: boolean,
  title: string
): Instruments => {
  const newState = { ...state, [title]: { ...state[title], isMuted } };
  return newState;
};

const instruments = (
  state: Instruments = INITIAL_STATE.instruments,
  action: DrumMachineActionTypes
): Instruments => {
  switch (action.type) {
    case SET_SELECT_BEAT:
      return setBeats(state, action.params);
    case SET_INSTRUMENT_IS_MUTED:
      return setIsMuted(state, action.isMuted, action.title);
    default:
      return state;
  }
};

export default instruments;
