export const SET_SELECT_BEAT = "SET_SELECT_BEAT";

interface SelectBeatAction {
  type: typeof SET_SELECT_BEAT;
  params: SelectBeatParams;
}

export interface SelectBeatParams {
  id: string;
  title: string;
  on: boolean;
}

export const selectBeatAction = (
  params: SelectBeatParams
): SelectBeatAction => {
  return {
    type: SET_SELECT_BEAT,
    params,
  };
};

export type InstrumentActionTypes = SelectBeatAction;
