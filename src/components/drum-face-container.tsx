import React from "react";
import { connect } from "react-redux";
import ChannelRack from "./channel-rack";
import TransportControls from "./transport-controls";
import {
  AppState,
  Instruments,
  SelectBeatParams,
  IsPlaying,
} from "../redux/core";
import * as actionCreators from "../redux/action_creators";

import "../App.css";

interface DrumFaceContainerProps {
  instruments: Instruments;
  isPlaying: IsPlaying;
  selectBeatAction: (params: SelectBeatParams) => void;
  setToggleIsPlaying: (isPlaying: IsPlaying) => void;
}

const DrumFaceContainer = (props: DrumFaceContainerProps) => {
  const {
    instruments,
    selectBeatAction,
    setToggleIsPlaying,
    isPlaying,
  } = props;
  return (
    <div className="App">
      <header className="App-header">
        <p>Drum machine</p>
        <TransportControls
          isPlaying={isPlaying}
          setToggleIsPlaying={setToggleIsPlaying}
        />
        <ChannelRack
          instruments={instruments}
          selectBeatAction={selectBeatAction}
        />
      </header>
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return state;
};

export default connect(mapStateToProps, actionCreators)(DrumFaceContainer);
