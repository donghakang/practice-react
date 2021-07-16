import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "./store/theme";

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

const Button = styled.button`
  font-size: 1rem;
  border: none;
  width: 250px;
  transition: background-color 0.7s, color 0.7s;
  padding: 1rem 1.5rem;
  background-color: ${(props) => props.theme.bg.button};
  color: ${(props) => props.theme.text.button};
  border-radius: 5px;
`;


const light = {
  bg: {
    primary: "#eff0f5",
    button: "#202124",
  },
  text: {
    primary: "#202124",
    button: "#eff0f5",
  },
};

const dark = {
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
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  console.log(theme);
  return (
    <ThemeProvider theme={theme ? light : dark}>
      <Wrapper className="App">
        <Button onClick={() => dispatch(changeMode())}>{theme ? 'DARK' : 'LIGHT'}</Button>
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
