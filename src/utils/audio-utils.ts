import {
  Beat,
  Beats,
  DrumPattern,
  DrumPatterns,
  Instruments,
} from "../redux/core";
import * as Tone from "tone";

interface Context {
  resume: () => Promise<never>;
}

export interface Player {
  start: (time: number) => void;
  dispose: () => void;
  context: Context;
}

type Players = {
  [title: string]: Player;
} & {
  get: (title: string) => Player;
};

export const unlockTone = () => Tone.start();

export const createDrumPattern = (beats: Beats): DrumPattern => {
  return beats.reduce((acc: DrumPattern, beat: Beat): DrumPattern => {
    if (beat.on) {
      const test = [...acc, [`0:0:${beat.id}`]];
      return test;
    }
    return acc;
  }, []);
};

export const createDrumPatterns = (instruments: Instruments): DrumPatterns => {
  return Object.keys(instruments).reduce(
    (acc: DrumPatterns, instrument: string) => {
      const drumPattern: DrumPattern = createDrumPattern(
        instruments[instrument].beats
      );
      return {
        ...acc,
        [instrument]: drumPattern,
      };
    },
    {}
  );
};

export const setupSound = (url: string): Player => {
  Tone.immediate();
  const player = new Tone.Player(url).toMaster();
  return player;
};

export const setupDrumKit = (kit: object) => {
  const players = new Tone.Players(kit).toMaster();
  return players;
};

export const playSound = (player: Player | null, time: number = 0) => {
  if (player) {
    player.start(time);
  }
};

export const playSounds = (
  players: Players,
  drumPatterns: DrumPatterns
): void => {
  if (players) {
    Object.keys(drumPatterns).forEach((player: string): void => {
      setupLoop(players.get(player), drumPatterns[player]);
    });
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
  Tone.Transport.cancel();
};
