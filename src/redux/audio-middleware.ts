import {
  setupSound,
  setupLoop,
  Player,
  transportStart,
  transportStop,
  unlockTone,
} from "../utils/audio-utils";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { DrumMachineActionTypes } from "./action-creators";

export const audioMiddleware = (): Middleware => {
  const kickPlayer: Player = setupSound("./kick.wav");

  const audioMiddlewareInner: Middleware = (api: MiddlewareAPI<Dispatch>) => (
    next: Dispatch<DrumMachineActionTypes>
  ) => (action: DrumMachineActionTypes) => {
    switch (action.type) {
      case "UNLOCK_TONE":
        unlockTone();
        break;
      case "SETUP_LOOP":
        setupLoop(kickPlayer, action.drumPattern);
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
