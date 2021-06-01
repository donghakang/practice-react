import React from "react";
import ReactDOM, { render } from "react-dom";

import Header from "./components/Header";
import Todos from './components/Todos'
import { ThemeProvider, ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Todos/>
    </ChakraProvider>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
