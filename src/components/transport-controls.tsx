import React from "react";
import { IsPlaying } from "../redux/core";
import Play from "./play";
import Stop from "./stop";

interface TransportControlsProps {
  isPlaying: boolean;
  setToggleIsPlaying: (isPlaying: IsPlaying) => void;
  handleStartPlayback: () => void;
}

const TransportControls = (props: TransportControlsProps) => {
  const { isPlaying, handleStartPlayback } = props;
  return (
    <div
      style={{
        display: "flex",
        width: "200px",
        height: "75px",
        backgroundColor: "#6e6e6e",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "175px",
          height: "60px",
          border: "1px solid #473d3d",
          flexDirection: "row",
          display: "flex",
          borderRadius: "5px",
        }}
      >
        <Play isPlaying={isPlaying} handleStartPlayback={handleStartPlayback} />
        <Stop isPlaying={isPlaying} handleStartPlayback={handleStartPlayback} />
      </div>
    </div>
  );
};

export default TransportControls;
