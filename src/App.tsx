import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import DrumFaceContainer from "./components/drum-face-container";
function App() {
  return (
    <Provider store={store}>
      <DrumFaceContainer />
    </Provider>
  );
}

export default App;
