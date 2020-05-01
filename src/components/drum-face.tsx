import React, { Component } from "react";
import InstrumentRow from "./instrument-row";
import { Instruments } from "../redux/core";
import { SelectBeatParams } from "../redux/action_creators";

interface DrumFaceProps {
  instruments: Instruments;
  selectBeatAction: (params: SelectBeatParams) => void;
}

class DrumFace extends Component<DrumFaceProps> {
  renderRows = (): JSX.Element[] => {
    const { instruments, selectBeatAction } = this.props;
    return Object.keys(instruments).map((instrument: string, i: number) => {
      const instrumentRow = instruments[instrument];
      return (
        <InstrumentRow
          title={instrumentRow.title}
          beats={instrumentRow.beats}
          key={`${instrumentRow.title}row${i}`}
          selectBeatAction={selectBeatAction}
        />
      );
    });
  };

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "770px",
            height: "300px",
            border: "1px solid darkgrey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingTop: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
            backgroundColor: "#6e6e6e",
          }}
        >
          {this.renderRows()}
        </div>
      </div>
    );
  }
}

export default DrumFace;
