import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg.primary};
  color: ${(props) => props.theme.text.primary};
`;

const dark = {
  bg: {
    primary: "black",
  },
  text: {
    primary: "white",
  },
};

const light = {
  bg: {
    primary: "white",
  },
  text: {
    primary: "black",
  },
};

ReactDOM.render(
  <>
    <button>button</button>
    <ThemeProvider theme={dark}>
      <Wrapper>
        <h1>Hello styled-components!</h1>
      </Wrapper>
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
