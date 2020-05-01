import React from "react";
import { connect } from "react-redux";
import DrumFace from "./drum-face";
import { AppState, Instruments } from "../redux/core";

import "../App.css";

interface DrumFaceContainerProps {
  instruments: Instruments;
}

function DrumFaceContainer(props: DrumFaceContainerProps) {
  const { instruments } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>Drum machine</p>
        <DrumFace instruments={instruments} />
      </header>
    </div>
  );
}

function mapStateToProps(state: AppState) {
  return state;
}

export default connect(mapStateToProps)(DrumFaceContainer);
