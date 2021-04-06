import React, { useRef, useEffect } from 'react';

import './App.css';

function App() {
  const canvasRef = useRef(null)
  const contextRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.width = window.innerWidth * 2
    canvas.height = window.innerHeight * 2
    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const context = canvas.getContext('2d')
    context.scale(2,2)
    contextRef.current = context
  }, [])

  return (
    <canvas ref={canvasRef}/>
  );
}

export default App;
