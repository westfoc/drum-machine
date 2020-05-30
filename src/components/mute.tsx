/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";

interface MuteProps {
  title: string;
  handleMuteSound: (title: string) => void;
  isMuted: boolean;
}

const muteButton: SerializedStyles = css`
  border: 1px solid black;
  outline: none;
  width: 10px;
  display: block;
  height: 10px;
  border-radius: 50%;
  cursor: pointer;
  margin-right: 10px;
`;

const generateButtonColor = (isMuted: boolean): SerializedStyles => {
  return isMuted
    ? css`
        background-color: grey;
      `
    : css`
        background-color: #a2eb34;
      `;
};

const Mute = (props: MuteProps) => {
  const { title, handleMuteSound, isMuted } = props;
  return (
    <div
      onClick={() => handleMuteSound(title)}
      css={[muteButton, generateButtonColor(isMuted)]}
    ></div>
  );
};

export default Mute;
