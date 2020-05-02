import React from "react";
import { IsPlaying } from "../redux/core";

interface TransportControlsProps {
  isPlaying: boolean;
  setToggleIsPlaying: (isPlaying: IsPlaying) => void;
}

const handleSetToggleIsPlaying = (
  setToggleIsPlaying: (isPlaying: IsPlaying) => void,
  isPlaying: IsPlaying
): void => setToggleIsPlaying(!isPlaying);

const TransportControls = (props: TransportControlsProps) => {
  const { setToggleIsPlaying, isPlaying } = props;
  console.log(props); // tslint:disable-line
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
          border: "1px solid black",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "87.5px",
            height: "60px",
            borderRight: "1px solid grey",
            display: "flex",
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() =>
            handleSetToggleIsPlaying(setToggleIsPlaying, isPlaying)
          }
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
        </div>
        <div
          style={{
            width: "87.5px",
            height: "60px",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              width: "15px",
              height: "15px",
              backgroundColor: "white",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TransportControls;
