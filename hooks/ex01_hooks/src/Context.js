import React, { useState, useEffect, useContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

function Toolbar(props) {
    return (
        <div>
            <Button />
        </div>
    )
}

function Button() {
    // ThemeContext.Consumer
    const theme = useContext(ThemeContext);
    return (
        <button style={{background: theme.background, color: theme.foreground}}>Button created with context!!</button>
    )
}

const ThemeContext = React.createContext(themes.light);

function MainContext(props) {
  return (
    <ThemeContext.Provider value={props.theme === "dark" ? themes.dark : themes.light}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}





export default function Context() {
  return (
    <div>
      <div className="description" id="intro">
        <span className="code"> useContext</span> accepts a context object
        (returned from <span className="code">React.createContext</span>) and
        returns the current context value for the context <br />
        <span className="code"> useContext</span> must have an argument -{" "}
        <i>context object itself</i>
      </div>
      <div className="App">
        <MainContext theme="dark"/>
      </div>
    </div>
  );
}
