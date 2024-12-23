/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { IsPlaying } from "../redux/core";

interface PlayProps {
  handleStartPlayback: () => void;
  isPlaying: IsPlaying;
}

const button: SerializedStyles = css`
  width: 87.5px;
  height: 60px;
  border-right: 1px solid grey;
  display: flex;
  background-color: #473d3d;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

const playIcon: SerializedStyles = css`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-left: 20px solid white;
  border-bottom: 10px solid transparent;
`;

const pauseIcon: SerializedStyles = css`
  width: 12px;
  height: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const pauseIconBar: SerializedStyles = css`
  width: 4px;
  height: 15px;
  background-color: white;
`;

const handleSetToggleIsPlaying = (handleStartPlayback: () => void): void => {
  handleStartPlayback();
};

const renderPlayPauseButton = (isPlaying: boolean): JSX.Element => {
  return !isPlaying ? (
    <div css={playIcon} />
  ) : (
    <div css={pauseIcon}>
      <div css={pauseIconBar} />
      <div css={pauseIconBar} />
    </div>
  );
};

const Play = (props: PlayProps) => {
  const { handleStartPlayback, isPlaying } = props;
  return (
    <button
      css={button}
      onClick={() => {
        handleSetToggleIsPlaying(handleStartPlayback);
      }}
    >
      {renderPlayPauseButton(isPlaying)}
    </button>
  );
};

export default Play;
