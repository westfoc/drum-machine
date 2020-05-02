export const initAudio = (): AudioContext => {
  try {
    const context = new AudioContext();

    return context;
  } catch (e) {
    console.log(`Web Audio API is not supported in this browser: ${e}`); // tslint:disable-line
  }
};
