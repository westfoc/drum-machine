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
  const response = await fetch(filepath);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
  return audioBuffer;
};

export const setupSample = async (
  audioContext: AudioContext,
  filepath: string
): Promise<AudioBuffer> => {
  const sample = await getFile(audioContext, filepath);
  return sample;
};

export const playSample = (
  audioContext: AudioContext,
  audioBuffer: AudioBuffer
): AudioBufferSourceNode => {
  const sampleSource = audioContext.createBufferSource();
  sampleSource.buffer = audioBuffer;
  sampleSource.connect(audioContext.destination);
  sampleSource.start();
  return sampleSource;
};
