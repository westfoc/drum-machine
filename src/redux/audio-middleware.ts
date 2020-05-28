import {
  setupDrumKit,
  transportStart,
  transportStop,
  unlockTone,
  playSounds,
  muteSound,
  getPlayer,
} from "../utils/audio-utils";
import { Drumkit, Players } from "./core";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { DrumMachineActionTypes } from "./action-creators";

export const audioMiddleware = (): Middleware => {
  const drumKit: Drumkit = {
    Kick: "./kick.wav",
    Snare: "./snare.wav",
    Hihat: "./hihat.wav",
    Clap: "./clap.wav",
  };
  const drumKitPlayers: Players = setupDrumKit(drumKit);

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
      case "MUTE_SOUND":
        muteSound(drumKitPlayers, action.title);
        break;
      case "GET_PLAYER":
        return getPlayer(drumKitPlayers, action.title);
      default:
        break;
    }
    return next(action);
  };
  return audioMiddlewareInner;
};
