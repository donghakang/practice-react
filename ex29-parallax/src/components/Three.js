import React, { Suspense, useRef, useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Canvas } from "@react-three/fiber";

import { softShadows, OrthographicCamera } from "@react-three/drei";
import Headphone from "./material/Headphone";
import useOnScreen from "../hooks/useOnScreen";

function Three() {
  const [posY, setPosY] = useState(0);
  const [headphone, setHeadphone] = useState(false);
  const parallax = useRef(null);

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  };

  const handleScroll = () => {
    if (parallax.current) {
      console.log(parallax.current.current);
      setPosY(parallax.current.current);
    }
  };
  useEffect(() => {
    const container = document.querySelector(".my-class-name");
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const lightRef1 = useRef();
  const lightRef2 = useRef();
  const headphoneBloomRef = useRef();

  return (
    <Parallax
      pages={2}
      style={{ top: "0", left: "0" }}
      ref={parallax}
      className={"my-class-name"}
    >
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          scroll(1);
          setHeadphone(true);
        }}
      >
        <h1>Scroll down</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={2.5}
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "4em",
          backgroundColor: "#ff6d6d",
        }}
        onClick={() => scroll(0)}
      >
        <h1>Headphone!</h1>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1.0}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => scroll(0)}
      >
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Loading...
            </div>
          }
        >
          <Canvas shadows>
            <OrthographicCamera
              makeDefault
              position={[-1, 1, 1]}
              rotation={[-Math.PI / 4.0, -Math.PI / 8.0, -Math.PI / 8.0]}
              zoom={70}
              near={-100}
              far={100}
            />
            <Headphone
              ref={headphoneBloomRef}
              position={[3.3, 0, 0.5]}
              rotation={[0, posY / 300.0, 0]}
              castShadow
              color="#388e3c"
            />
            <group>
              <ambientLight intensity={0.4} ref={lightRef1} />
              <directionalLight
                castShadow
                ref={lightRef2}
                position={[2.5, 8, 5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={50}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
              />
            </group>
          </Canvas>
        </Suspense>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Three;
