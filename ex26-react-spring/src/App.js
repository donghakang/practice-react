import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Text from "./Text";
import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Basic from "./pages/basic/basic";
import Home from "./pages/home/home";
import Common from "./pages/common/common";

function App() {
  // const [hover, setHover] = useState(false)
  // const props = useSpring({
  //   transform: hover ? "rotateZ(0deg)" : "rotateZ(20deg)"
  // });

  // const handleHover = () => {
  //   console.log(hover)
  //   setHover(!hover)
  // }
  // return (
  //   <div className="App">
  //     <animated.div style={props} onMouseEnter={handleHover} onMouseLeave={handleHover}>I will fade in</animated.div>
  //     {/* <Text /> */}
  //   </div>
  // );

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/basic">
          <Basic />
        </Route>
        <Route path="/common">
          <Common />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
