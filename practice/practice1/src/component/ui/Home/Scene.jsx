/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: timblewee (https://sketchfab.com/timblewee)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/macbook-pro-13-inch-2020-efab224280fd4c3993c808107f7c0b38
title: Macbook Pro 13 inch 2020
*/
import * as THREE from "three";
import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";

const MetalicMatieral = () => {
  return (
    <meshStandardMaterial
      attach="material"
      color={new THREE.Color("#1976d2")}
      roughness={1.0}
      metalness={0.5}
    />
  );
};

// const useMousePosition = () => {
//   const [position, setPosition] = useState({x: 0, y:0})

//   useEffect(() => {
//     const handleMouseEvent = (e) => {
//       setPosition({x: e.clientX, y: e.clientY})
//     }
//     window.addEventListener('mousemove', handleMouseEvent);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseEvent);
//     }
//   }, []);

//   return position;
// }

const useObjectRotation = () => {
  const [rotation, setRotation] = useState(0); // rotation only occurs in y axis.

  useEffect(() => {
    setRotation((prevRotation) => prevRotation + 0.001);
  });
  return rotation;
};

export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");

  // const position = useMousePosition();
  const rotation = useObjectRotation();
  return (
    <group ref={group} {...props} dispose={null}>
      {/* <group rotation={[position.y / (Math.PI * 100) + (Math.PI * 3 / 2), 0, position.x / (Math.PI * 100) - (Math.PI / 2)]}> */}
      <group rotation={[0, rotation, 0]}>
        <group rotation={[2, 4, 1]}>
          <group rotation={[Math.PI / 2, 0, 0]}>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_4.geometry}
                material={materials["Space_Grey.001"]}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_6.geometry}
                material={nodes.Object_6.material}
              >
                <MetalicMatieral />
              </mesh>

              <mesh
                geometry={nodes.Object_7.geometry}
                material={nodes.Object_7.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_8.geometry}
                material={materials.Glass}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_10.geometry}
                material={materials.Camera_Light}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_12.geometry}
                material={materials.Caps_Lock_Light}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_14.geometry}
                material={nodes.Object_14.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_18.geometry}
                material={nodes.Object_18.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_19.geometry}
                material={nodes.Object_19.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_20.geometry}
                material={materials["Keys.001"]}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_16.geometry}
                material={nodes.Object_16.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_22.geometry}
                material={nodes.Object_22.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_23.geometry}
                material={nodes.Object_23.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_25.geometry}
                material={nodes.Object_25.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_27.geometry}
                material={nodes.Object_27.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_28.geometry}
                material={nodes.Object_28.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_30.geometry}
                material={materials["Material.001"]}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_32.geometry}
                material={materials["Material.002"]}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_34.geometry}
                material={nodes.Object_34.material}
              >
                <MetalicMatieral />
              </mesh>
              <mesh
                geometry={nodes.Object_35.geometry}
                material={nodes.Object_35.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_37.geometry}
                material={materials["Touch_Bar_Shot_2021-04-02_at_18.13.28"]}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]} scale={[0.27, 0.27, 0.27]}>
              <mesh
                geometry={nodes.Object_39.geometry}
                material={nodes.Object_39.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
            <group position={[0, -0.01, 0]}>
              <mesh
                geometry={nodes.Object_41.geometry}
                material={nodes.Object_41.material}
              >
                <MetalicMatieral />
              </mesh>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
