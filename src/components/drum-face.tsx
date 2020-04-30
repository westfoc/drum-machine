import React, { Component } from "react";
import InstrumentRow from "./instrument-row";

interface DrumFaceProps {}

interface InstrumentMeta {
  title: string;
}

interface DrumFaceState {
  numOfRows: ReadonlyArray<InstrumentMeta>;
}

class DrumFace extends Component<DrumFaceProps, DrumFaceState> {
  constructor(props: DrumFaceProps) {
    super(props);
    this.state = {
      numOfRows: [
        { title: "Kick" },
        { title: "Clap" },
        { title: "Hat" },
        { title: "Snare" },
      ],
    };
  }

  renderRows = (): JSX.Element[] => {
    const { numOfRows }: DrumFaceState = this.state;
    return numOfRows.map((item: InstrumentMeta, i: number) => (
      <InstrumentRow title={item.title} key={`${item}row${i}`} />
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
