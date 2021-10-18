import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Text from "./Text";
import "./App.css";

function App() {
  const [hover, setHover] = useState(false)
  const props = useSpring({
    transform: hover ? "rotateZ(0deg)" : "rotateZ(20deg)"
  });

  const handleHover = () => {
    console.log(hover)
    setHover(!hover)
  }
  return (
    <div className="App">
      <animated.div style={props} onMouseEnter={handleHover} onMouseLeave={handleHover}>I will fade in</animated.div>
      {/* <Text /> */}
    </div>
  );
}

export default App;
