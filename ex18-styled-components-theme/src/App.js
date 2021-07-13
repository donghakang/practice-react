import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg.primary};

  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: background-color 0.7s;
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.text.primary};
  font-size: 10rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  transition: color 0.7s;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.bg.button};
  color: ${(props) => props.theme.text.button};
  transition: background-color 0.7s, color 0.7s;
  padding: 1rem 1.5rem;
  border: none;

  font-size: 1rem;
  border-radius: 5px;
`;

// Theme
const lightMode = {
  bg: {
    primary: "#eff0f5",
    button: "#202124",
  },
  text: {
    primary: "#202124",
    button: "#eff0f5",
  },
};

const darkMode = {
  bg: {
    primary: "#202124",
    button: "#eff0f5",
  },
  text: {
    primary: "#eff0f5",
    button: "#202124",
  },
};

function App() {
  const [mode, setMode] = useState(true);
  const theme = mode ? lightMode : darkMode;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Heading>Theme {mode ? "light" : "dark"}</Heading>
        <Button onClick={() => setMode(!mode)}>
          {mode ? "Dark mode" : "light mode"}{" "}
        </Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
