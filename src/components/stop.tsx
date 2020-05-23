import React from "react";
import { IsPlaying } from "../redux/core";

interface StopProps {
  isPlaying: boolean;
  handleStartPlayback: () => void;
}

const handleSetToggleIsPlaying = (handleStartPlayback: () => void): void => {
  handleStartPlayback();
};

const Stop = (props: StopProps) => {
  const { handleStartPlayback } = props;
  return (
    <button
      style={{
        width: "87.5px",
        height: "60px",
        backgroundColor: "#473d3d",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => handleSetToggleIsPlaying(handleStartPlayback)}
    >
      <div
        style={{
          width: "15px",
          height: "15px",
          backgroundColor: "white",
        }}
      />
    </button>
  );
};

export default Stop;
