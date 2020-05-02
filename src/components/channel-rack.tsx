import React, { Component } from "react";
import InstrumentRow from "./instrument-row";
import { Instruments, SelectBeatParams } from "../redux/core";

interface ChannelRackProps {
  instruments: Instruments;
  selectBeatAction: (params: SelectBeatParams) => void;
}

class ChannelRack extends Component<ChannelRackProps> {
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

export default ChannelRack;
