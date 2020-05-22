import { Beat, Beats } from "../redux/core";
import * as Tone from "tone";

export interface Player {
  start: () => void;
  dispose: () => void;
}

export const setupSound = (url: string): Player => {
  const player = new Tone.Player(url).toMaster();
  return player;
};

export const playSound = (player: Player | null) => {
  if (player) {
    player.start();
  }
};

export const nextNote = (
  tempo: number,
  currentNote: number,
  nextNoteTime: number
): void => {
  const secondsPerBeat: number = 60.0 / tempo;
  nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  // Advance the beat number and wrap beat to zero
  currentNote++;
  if (currentNote === 16) {
    currentNote = 0;
  }
};

export const scheduleNote = (
  beatNumber: number,
  time: number,
  beats: Beats,
  playFunction: () => void
): void => {
  const notesInQueue = [];

  notesInQueue.push({ note: beatNumber, time });

  beats.forEach((beat: Beat) => {
    if (beat.on) {
      playFunction();
    }
  });
};
