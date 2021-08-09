import React, { useState, useEffect, useRef } from "react";

import logo from "./logo.svg";
import "./App.css";

import { Power3 } from "gsap";
import gsap from "gsap";

function App() {
  let logoItem = useRef();

  useEffect(() => {
    gsap.to(".App-logo", { opacity: 1, duration: 0.8, ease: Power3.easeInOut });
    gsap.to(".App-item", {
      duration: 0.8,
      opacity: 1,
      y: -20,
      delay: 0.2,
      ease: Power3.easeInOut,
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="App-item">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
