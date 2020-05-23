/** @jsx jsx */
import { css, jsx, SerializedStyles } from "@emotion/core";
import { Component } from "react";
import RowItem from "./row-item";
import { Beats, Beat, SelectBeatParams } from "../redux/core";

interface InstrumentRowProps {
  title: string;
  beats: Beats;
  selectBeatAction: (params: SelectBeatParams) => void;
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

class InstrumentRow extends Component<InstrumentRowProps> {
  genOnOffColor = (beatOn: boolean): number => {
    return beatOn ? 0.4 : 1;
  };

  renderRow = (): JSX.Element[] => {
    const { beats, title, selectBeatAction } = this.props;

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
      console.log(backgroundColor); // tslint:disable-line
      return (
        <RowItem
          cssProp={[rowItemStyles, backgroundColor]}
          key={`${beat.id}`}
          on={beat.on}
          id={beat.id}
          title={title}
          selectBeatAction={selectBeatAction}
        />
      );
    });
  };

  render(): JSX.Element {
    const { title } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: "10px",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "45px",
          }}
        >
          <div
            style={{
              minWidth: "120px",
              border: "1px solid #5c5c5c",
              height: "40px",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#473d3d",
              marginRight: "5px",
            }}
          >
            <p style={{ fontSize: "14px" }}>{title}</p>
          </div>
          {this.renderRow()}{" "}
        </div>
      </div>
    );
  }
}

export default InstrumentRow;
