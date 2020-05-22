import { setupSound, playSound, Player } from "../utils/audio-utils";
import { Dispatch, Middleware, MiddlewareAPI } from "redux";
import { DrumMachineActionTypes } from "./action-creators";

export const audioMiddleware = (): Middleware => {
  const kickPlayer: Player = setupSound("./kick.wav");

  const audioMiddlewareInner: Middleware = (api: MiddlewareAPI<Dispatch>) => (
    next: Dispatch<DrumMachineActionTypes>
  ) => (action: DrumMachineActionTypes) => {
    switch (action.type) {
      case "PLAY_SOUND":
        playSound(kickPlayer);
        break;
      default:
        break;
    }
    return next(action);
  };
  return audioMiddlewareInner;
};
