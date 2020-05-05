export const createAudioContext = (): AudioContext | undefined => {
  try {
    const AudioContext = window.AudioContext;
    const audioContext = new AudioContext();
    return audioContext;
  } catch (e) {
    console.log(`Web Audio API is not supported in this browser: ${e}`); // tslint:disable-line
  }
};

export const getFile = async (
  audioContext: AudioContext,
  filepath: string
): Promise<AudioBuffer> => {
  const response: Response = await fetch(filepath);
  const arrayBuffer: ArrayBuffer = await response.arrayBuffer();
  const audioBuffer: AudioBuffer = await audioContext.decodeAudioData(
    arrayBuffer
  );
  return audioBuffer;
};

export const setupSample = async (
  audioContext: AudioContext,
  filepath: string
): Promise<AudioBuffer> => {
  const sample: AudioBuffer = await getFile(audioContext, filepath);
  return sample;
};

export const playSample = (
  audioContext: AudioContext,
  audioBuffer: AudioBuffer
): AudioBufferSourceNode => {
  const sampleSource: AudioBufferSourceNode = audioContext.createBufferSource();
  sampleSource.buffer = audioBuffer;
  sampleSource.connect(audioContext.destination);
  sampleSource.start();
  return sampleSource;
};

export const nextNote = (
  tempo: number,
  currentNote: number,
  nextNoteTime: number
) => {
  const secondsPerBeat: number = 60.0 / tempo;
  nextNoteTime += secondsPerBeat; // Add beat length to last beat time

  // Advance the beat number and wrap beat to zero
  currentNote++;
  if (currentNote === 16) {
    currentNote = 0;
  }
};
