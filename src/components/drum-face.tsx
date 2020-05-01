import React, { Component } from "react";
import InstrumentRow from "./instrument-row";
import { Instrument, Instruments } from "../redux/core";

interface DrumFaceProps {
  instruments: Instruments;
}

class DrumFace extends Component<DrumFaceProps> {
  renderRows = (): JSX.Element[] => {
    const { instruments } = this.props;
    return instruments.map((instrument: Instrument, i: number) => (
      <InstrumentRow
        title={instrument.title}
        beats={instrument.beats}
        key={`${instrument.title}row${i}`}
      />
    ));
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
