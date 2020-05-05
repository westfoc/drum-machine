import React from "react";
import { IsPlaying } from "../redux/core";

interface StopProps {
  isPlaying: boolean;
  setToggleIsPlaying: (isPlaying: IsPlaying) => void;
}

const handleStopIsPlaying = (
  setToggleIsPlaying: (isPlaying: IsPlaying) => void
) => setToggleIsPlaying(false);

const Stop = (props: StopProps) => {
  const { setToggleIsPlaying } = props;
  return (
    <div
      style={{
        width: "87.5px",
        height: "60px",
        backgroundColor: "#473d3d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => handleStopIsPlaying(setToggleIsPlaying)}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          backgroundColor: "white",
        }}
      />
    </div>
  );
};

export default Stop;
