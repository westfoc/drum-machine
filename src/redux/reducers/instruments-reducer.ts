import { INITIAL_STATE, Instruments, SelectBeatParams } from "../core";
import { SET_SELECT_BEAT, DrumMachineActionTypes } from "../action-creators";

function setBeats(state: Instruments, params: SelectBeatParams) {
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
}

function instruments(
  state: Instruments = INITIAL_STATE.instruments,
  action: DrumMachineActionTypes
) {
  switch (action.type) {
    case SET_SELECT_BEAT:
      return setBeats(state, action.params);
    default:
      return state;
  }
}

export default instruments;
