import React from "react";
import { connect } from "react-redux";
import ChannelRack from "./channel-rack";
import { AppState, Instruments } from "../redux/core";
import { SelectBeatParams } from "../redux/action_creators";
import * as actionCreators from "../redux/action_creators";

import "../App.css";

interface DrumFaceContainerProps {
  instruments: Instruments;
  selectBeatAction: (params: SelectBeatParams) => void;
}

function DrumFaceContainer(props: DrumFaceContainerProps) {
  const { instruments, selectBeatAction } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>Drum machine</p>
        <ChannelRack
          instruments={instruments}
          selectBeatAction={selectBeatAction}
        />
      </header>
    </div>
  );
}

function mapStateToProps(state: AppState) {
  return state;
}

export default connect(mapStateToProps, actionCreators)(DrumFaceContainer);
