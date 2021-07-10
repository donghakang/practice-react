import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme/theme';
import { Button } from 'react-bootstrap'
import './App.css';
import { GlobalStyles } from './theme/global';

function App() {
  const [isLight, setTheme] = useState(true)

  return (
    <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
      <GlobalStyles/>
      <Button variant='primary' onClick={() => setTheme(!isLight)}>
        Toggle Theme
      </Button>
      { isLight ? <h1>It is light theme</h1> : <h1>It is dark theme</h1>}
    </ThemeProvider>
  );
}

export default App;
