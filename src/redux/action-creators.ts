import { IsPlaying, SelectBeatParams, DrumPatterns } from "./core";

export const SET_SELECT_BEAT = "SET_SELECT_BEAT";
export const SET_TOGGLE_IS_PLAYING = "SET_TOGGLE_IS_PLAYING";
export const SET_INSTRUMENT_IS_MUTED = "SET_INSTRUMENT_IS_MUTED";
export const HANDLE_START_PLAYBACK = "HANDLE_START_PLAYBACK";
export const HANDLE_STOP_PLAYBACK = "HANDLE_STOP_PLAYBACK";
export const HANDLE_MUTE_SOUND = "HANDLE_MUTE_SOUND";
export const HANDLE_SELECT_BEAT = "HANDLE_SELECT_BEAT";
export const PLAY_SOUND = "PLAY_SOUND";
export const UNLOCK_TONE = "UNLOCK_TONE";
export const SETUP_LOOP = "SETUP_LOOP";
export const STOP_SOUND = "STOP_SOUND";
export const MUTE_SOUND = "MUTE_SOUND";
export const GET_PLAYER = "GET_PLAYER";
export const SET_CANCEL_TRANSPORT = "SET_CANCEL_TRANSPORT";

// TYPES AND INTERFACES
interface SelectBeatAction {
  type: typeof SET_SELECT_BEAT;
  params: SelectBeatParams;
}

interface PlaySoundAction {
  type: typeof PLAY_SOUND;
}

interface UnlockToneAction {
  type: typeof UNLOCK_TONE;
}

interface SetupLoopAction {
  type: typeof SETUP_LOOP;
  drumPatterns: DrumPatterns;
}

interface StopSoundAction {
  type: typeof STOP_SOUND;
}

export interface SetToggleIsPlaying {
  type: typeof SET_TOGGLE_IS_PLAYING;
  isPlaying: IsPlaying;
}

export interface HandleMuteSoundAction {
  type: typeof HANDLE_MUTE_SOUND;
  title: string;
}

interface HandleStartPlaybackAction {
  type: typeof HANDLE_START_PLAYBACK;
}

interface HandleStopPlaybackAction {
  type: typeof HANDLE_STOP_PLAYBACK;
}

export interface HandleSelectBeatAction {
  type: typeof HANDLE_SELECT_BEAT;
  params: SelectBeatParams;
}

interface MuteSoundAction {
  type: typeof MUTE_SOUND;
  title: string;
}

interface GetPlayerAction {
  type: typeof GET_PLAYER;
  title: string;
}

export interface SetInstrumentIsMutedAction {
  type: typeof SET_INSTRUMENT_IS_MUTED;
  isMuted: boolean;
  title: string;
}

interface SetCancelTransportAction {
  type: typeof SET_CANCEL_TRANSPORT;
}

// ACTION CREATORS

export const selectBeat = (params: SelectBeatParams): SelectBeatAction => {
  return {
    type: SET_SELECT_BEAT,
    params,
  };
};

export const setToggleIsPlaying = (
  isPlaying: IsPlaying
): SetToggleIsPlaying => {
  return { type: SET_TOGGLE_IS_PLAYING, isPlaying };
};

export const handleStartPlayback = (): HandleStartPlaybackAction => {
  return {
    type: HANDLE_START_PLAYBACK,
  };
};

export const handleStopPlayback = (): HandleStopPlaybackAction => {
  return {
    type: HANDLE_STOP_PLAYBACK,
  };
};

export const handleMuteSound = (title: string): HandleMuteSoundAction => {
  return {
    type: HANDLE_MUTE_SOUND,
    title,
  };
};

export const handleSelectBeat = (
  params: SelectBeatParams
): HandleSelectBeatAction => {
  return {
    type: HANDLE_SELECT_BEAT,
    params,
  };
};

export const playSound = (): PlaySoundAction => {
  return {
    type: PLAY_SOUND,
  };
};

export const unlockTone = (): UnlockToneAction => {
  return {
    type: UNLOCK_TONE,
  };
};

export const setupLoop = (drumPatterns: DrumPatterns): SetupLoopAction => {
  return {
    type: SETUP_LOOP,
    drumPatterns,
  };
};

export const stopSound = (): StopSoundAction => {
  return {
    type: STOP_SOUND,
  };
};

export const muteSound = (title: string): MuteSoundAction => {
  return {
    type: MUTE_SOUND,
    title,
  };
};

export const getPlayer = (title: string): GetPlayerAction => {
  return {
    type: GET_PLAYER,
    title,
  };
};

export const setInstrumentIsMuted = (
  isMuted: boolean,
  title: string
): SetInstrumentIsMutedAction => {
  return {
    type: SET_INSTRUMENT_IS_MUTED,
    isMuted,
    title,
  };
};

export const setTransportCancel = (): SetCancelTransportAction => {
  return {
    type: SET_CANCEL_TRANSPORT,
  };
};

export type DrumMachineActionTypes =
  | SelectBeatAction
  | SetToggleIsPlaying
  | SetInstrumentIsMutedAction
  | HandleStartPlaybackAction
  | HandleStopPlaybackAction
  | HandleMuteSoundAction
  | HandleSelectBeatAction
  | PlaySoundAction
  | UnlockToneAction
  | SetupLoopAction
  | StopSoundAction
  | MuteSoundAction
  | GetPlayerAction
  | SetCancelTransportAction;
