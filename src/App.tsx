import React from "react";
import DrumFace from "./components/drum-face";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Drum machine</p>
        <DrumFace />
      </header>
    </div>
  );
}

export default App;
