import React from "react";
import { IsPlaying } from "../redux/core";

interface PlayProps {
  handleStartPlayback: () => void;
  isPlaying: IsPlaying;
}

const handleSetToggleIsPlaying = (handleStartPlayback: () => void): void => {
  handleStartPlayback();
};

const Play = (props: PlayProps) => {
  const { handleStartPlayback, isPlaying } = props;
  return (
    <button
      style={{
        width: "87.5px",
        height: "60px",
        borderRight: "1px solid grey",
        display: "flex",
        backgroundColor: "#473d3d",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
      onClick={() => {
        handleSetToggleIsPlaying(handleStartPlayback);
      }}
    >
      {!isPlaying ? (
        <div
          style={{
            width: 0,
            height: 0,
            borderTop: "10px solid transparent",
            borderLeft: "20px solid white",
            borderBottom: "10px solid transparent",
          }}
        />
      ) : (
        <div
          style={{
            width: "12px",
            height: "15px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "15px",
              backgroundColor: "white",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "15px",
              backgroundColor: "white",
            }}
          />
        </div>
      )}
    </button>
  );
};

export default Play;
