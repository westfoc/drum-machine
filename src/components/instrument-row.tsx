/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { Beats, Beat, SelectBeatParams } from "../redux/core";
import { Component } from "react";
import RowItem from "./row-item";
import Mute from "./mute";

interface InstrumentRowProps {
  title: string;
  beats: Beats;
  isMuted: boolean;
  selectBeatAction: (params: SelectBeatParams) => void;
  handleMuteSound: (title: string) => void;
  handleSelectBeat: (params: SelectBeatParams) => void;
}

const rowItemStyles: SerializedStyles = css`
  width: 30px;
  height: 40px;
  margin-right: 5px;
  margin-left: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  margin-top: 5px;
  cursor: pointer;
`;

const instrumentRowContainer: SerializedStyles = css`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  justify-content: center;
`;

const instrumentRowContainerInner: SerializedStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 45px;
`;

const instrumentTitleContainer: SerializedStyles = css`
  min-width: 120px;
  border: 1px solid #5c5c5c;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #473d3d;
  margin-right: 5px;
`;

const instrumentTitleText: SerializedStyles = css`
  font-size: 14px;
`;

class InstrumentRow extends Component<InstrumentRowProps> {
  genOnOffColor = (beatOn: boolean): number => {
    return beatOn ? 0.4 : 1;
  };

  renderRow = (): JSX.Element[] => {
    const { beats, title, selectBeatAction, handleSelectBeat } = this.props;

    return beats.map((beat: Beat, i: number) => {
      const opacity = this.genOnOffColor(beat.on);
      const backgroundColor: SerializedStyles =
        i < 4 || (i > 7 && i < 12)
          ? css`
              background-color: #473d3d;
              opacity: ${opacity};
            `
          : css`
              background-color: #6b2b2b;
              opacity: ${opacity};
            `;
      return (
        <RowItem
          cssProp={[rowItemStyles, backgroundColor]}
          key={`${beat.id}`}
          on={beat.on}
          id={beat.id}
          title={title}
          selectBeatAction={selectBeatAction}
          handleSelectBeat={handleSelectBeat}
        />
      );
    });
  };

  render(): JSX.Element {
    const { title, handleMuteSound, isMuted } = this.props;
    return (
      <div css={instrumentRowContainer}>
        <div css={instrumentRowContainerInner}>
          <Mute
            title={title}
            handleMuteSound={handleMuteSound}
            isMuted={isMuted}
          />
          <div css={instrumentTitleContainer}>
            <p css={instrumentTitleText}>{title}</p>
          </div>
          {this.renderRow()}
        </div>
      </div>
    );
  }
}

export default InstrumentRow;
