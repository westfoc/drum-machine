/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { IsPlaying } from "../redux/core";
import Play from "./play";
import Stop from "./stop";
import Tempo from "./tempo";

interface TransportControlsProps {
  isPlaying: IsPlaying;
  handleStartPlayback: () => void;
  handleStopPlayback: () => void;
  setTempo: (bpm: number) => void;
}

const TransportControlsContainer: SerializedStyles = css`
  display: flex;
  width: 300px;
  height: 75px;
  background-color: #6e6e6e;
  justify-content: center;
  align-items: center;
`;

const TransportControlsContainerInner: SerializedStyles = css`
  width: 175px;
  height: 60px;
  border: 1px solid #473d3d;
  flex-direction: row;
  display: flex;
  border-radius: 5px;
  margin-right: 5px;
`;

const TransportControls = (props: TransportControlsProps): JSX.Element => {
  const {
    isPlaying,
    handleStartPlayback,
    handleStopPlayback,
    setTempo,
  } = props;
  return (
    <div css={TransportControlsContainer}>
      <div css={TransportControlsContainerInner}>
        <Play isPlaying={isPlaying} handleStartPlayback={handleStartPlayback} />
        <Stop handleStopPlayback={handleStopPlayback} />
      </div>
      <Tempo setTempo={setTempo} />
    </div>
  );
};

export default TransportControls;
