import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const lang = ["python", "javascript", "java", "android", "swift", "React", "Node.js"];


// Camera Controller
const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.25;
  
    // console.log(controls.position);
    // controls.minDistance = 3;
    // controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};


// Languages that are shown
const Languages = () => {
  const mesh = useRef();
  useFrame((state) => (mesh.current.rotation.y += 0.002));

  const handleClick = (lang) => {
    // when language is clicked, pops out the information about the language
    // console.log('clicked ', lang)    
    console.log(lang)
  }

  const textLanguages = lang.map((l) => (
    <mesh
      position={[
        Math.floor(Math.random() * 20 - 10),
        Math.floor(Math.random() * 20 - 10),
        Math.floor(Math.random() * 20 - 10),
      ]}
      key={l}
    >
      <Html distanceFactor={30}>
        <h1 onClick={() => handleClick(l)}>{l}</h1>
      </Html>
    </mesh>
  ));

  return (
    <mesh ref={mesh}>
      <mesh position={[0, 0, 0]}>{textLanguages}</mesh>
    </mesh>
  );
};

const Skill = (props) => {
  return (
    <div>
      <Canvas
        camera={{ position: [0, 0, -10], fov: 100 }}
        style={props.style}
      >
        <CameraController />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Languages />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Skill;
