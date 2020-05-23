import { Beat, Beats, DrumPattern } from "../redux/core";
import * as Tone from "tone";

interface Context {
  resume: () => Promise<never>;
}

export interface Player {
  start: (time: number) => void;
  dispose: () => void;
  context: Context;
}

export const unlockTone = () => Tone.start();

export const createDrumPattern = (beats: Beats): DrumPattern => {
  return beats.reduce((acc: DrumPattern, beat: Beat): DrumPattern => {
    if (beat.on) {
      const test = [...acc, [`0:0:${beat.id}`]];
      console.log(test); // tslint:disable-line
      return test;
    }
    return acc;
  }, []);
};

export const setupSound = (url: string): Player => {
  Tone.immediate();
  const player = new Tone.Player(url).toMaster();
  return player;
};

export const playSound = (player: Player | null, time: number = 0) => {
  if (player) {
    player.start(time);
  }
};

export const setTransportBPM = (bpm: number) => {
  Tone.Transport.timeSignature = 4;
  Tone.Transport.bpm.value = bpm;
};

export const setupLoop = (player: Player | null, drumPattern: DrumPattern) => {
  const part = new Tone.Part((time: number) => {
    playSound(player, time);
  }, drumPattern);

  part.loop = true;
  part.start(0);

  setTransportBPM(120);
};

export const transportStart = () => {
  Tone.Transport.start("+0.1");
};

export const transportStop = () => {
  Tone.Transport.stop();
};
