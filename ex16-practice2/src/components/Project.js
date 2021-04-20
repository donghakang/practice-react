import React, {Suspense, useRef} from "react";
import ProjectElement from "./ui/ProjectElement";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { softShadows, OrbitControls } from "@react-three/drei";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Scene from "./ui/Scene";
softShadows();
const Light = () => {
  return (
    <group>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[-5, 2, -10]} intensity={0.5} color="red" />
      <pointLight position={[10, 3, -5]} intensity={1.5} color="blue" />
      <pointLight position={[30, -10, -30]} intensity={1.5} color="green" /> */}
      <directionalLight
        castShadow
        position={[0, 40, 40]}
        intensity={5.0}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={100}
        shadow-camera-left={-100}
        shadow-camera-right={100}
        shadow-camera-top={100}
        shadow-camera-bottom={-100}
        shadow-radius={8}
      />
    </group>
  );
};

export default function Project() {
  return (
    <div className='project'>
      {/* <ProjectElement name={"Project1"} description={"Description goes here"} /> */}
      <Canvas
        shadowMap
        colorManagement
        camera={{ position: [0,0,2], fov: 100 }}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0%",
          left: "0%",
          backgroundColor: 'yellowgreen'
        }}
      >
        <Light />

        {/* <Suspense fallback={null}> */}
          <Scene />
        {/* </Suspense> */}
        <OrbitControls/>
      </Canvas>
    </div>
  );
}
