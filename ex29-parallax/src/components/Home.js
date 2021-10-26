import React, { useRef } from "react";
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";

function Home() {
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }} ref={parallax}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(1)}
      >
        <h1>Scroll down</h1>
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
        onClick={() => scroll(0)}
      >
      </ParallaxLayer>

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
        onClick={() => scroll(0)}
      >
        <h1>Scroll up</h1>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
