import {
  setupDrumKit,
  transportStart,
  transportStop,
  unlockTone,
  playSounds,
} from "../utils/audio-utils";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { DrumMachineActionTypes } from "./action-creators";

export const audioMiddleware = (): Middleware => {
  const drumKit: object = {
    Kick: "./kick.wav",
    Snare: "./snare.wav",
    Hihat: "./hihat.wav",
    Clap: "./clap.wav",
  };
  const drumKitPlayers = setupDrumKit(drumKit);

  const audioMiddlewareInner: Middleware = (api: MiddlewareAPI<Dispatch>) => (
    next: Dispatch<DrumMachineActionTypes>
  ) => (action: DrumMachineActionTypes) => {
    switch (action.type) {
      case "UNLOCK_TONE":
        unlockTone();
        break;
      case "SETUP_LOOP":
        playSounds(drumKitPlayers, action.drumPatterns);
        break;
      case "PLAY_SOUND":
        transportStart();
        break;
      case "STOP_SOUND":
        transportStop();
        break;
      default:
        break;
    }
    return next(action);
  };
  return audioMiddlewareInner;
};
