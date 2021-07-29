import React, { useEffect } from "react";

import "./Application.css";

import gsap from "gsap";
import Power1 from "gsap";
import { Controller, Scene } from "react-scrollmagic";
import { Timeline, Tween } from "react-gsap";

function App() {
  const flightPath = {
    curviness: 1.25,
    autoRotate: true,
    values: [
      { x: 100, y: -20 },
      { x: 300, y: 10 },
    ],
  };

  useEffect(() => {
    // gsap.to(".ball", {
    //   duration: 0.8,
    //   x: 300,
    //   y: -10,
    //   ease: Power1.easeInOut,
    // });
  }, []);

  return (
    <>
      <header>
        <h1>Scroll Animation</h1>
      </header>
      <Controller>
        <Scene triggerHook="onLeave" indicators duration={1000} pin>
          {(progress) => (
            <section className="animation">
              <Timeline totalProgress={progress} paused>
                <Tween from={{ fontSize: "0px" }} to={{ fontSize: "300px" }}>
                  <h1>Hello</h1>
                </Tween>
              </Timeline>
            </section>
          )}
        </Scene>
      </Controller>

      <footer>
        <h2>Done</h2>
      </footer>
    </>
  );
}

export default App;
