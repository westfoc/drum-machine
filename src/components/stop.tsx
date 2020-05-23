/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";

interface StopProps {
  handleStartPlayback: () => void;
}

const handleSetToggleIsPlaying = (handleStartPlayback: () => void): void => {
  handleStartPlayback();
};

const button: SerializedStyles = css`
  width: 87.5px;
  height: 60px;
  background-color: #473d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const stopIcon: SerializedStyles = css`
  width: 15px;
  height: 15px;
  background-color: white;
`;

const Stop = (props: StopProps) => {
  const { handleStartPlayback } = props;
  return (
    <button
      css={button}
      onClick={() => handleSetToggleIsPlaying(handleStartPlayback)}
    >
      <div css={stopIcon} />
    </button>
  );
};

export default Stop;
