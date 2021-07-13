import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.bg};
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

const Theme = () => {
  const [mode, setMode] = useState(false);
  return (
    <>
      <button onClick={setMode(!mode)}>button</button>
      <ThemeProvider theme={mode ? light : dark}>
        <Wrapper>
          <h1>Hello styled-components!</h1>
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Theme;
