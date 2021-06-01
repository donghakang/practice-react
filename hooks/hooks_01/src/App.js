import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import Emoji from "react-apple-emojis";

import { ThemeProvider } from "./context/ThemeContext";
import State from "./State";
import Effect from "./Effect";
import Context from "./Context";

function App() {
  return (
    <div>
      <h1 className="code App">
        <Emoji name="index-pointing-up" width="32px" /> useState
      </h1>
      <State />
      <p className="nextline"></p>

      <h1 className="code App">
        <Emoji name="victory-hand" width="32px" /> useEffect
      </h1>
      <Effect />
      <p className="nextline"></p>

      <h1 className="code App">
        <Emoji name="sign-of-the-horns" width="32px" /> useContext
      </h1>
      <ThemeProvider>
        <Context />
      </ThemeProvider>
      <p className="nextline"></p>

      <br />
      <br />
    </div>
  );
}

export default App;
