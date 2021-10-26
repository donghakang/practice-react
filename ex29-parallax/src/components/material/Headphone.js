/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useState, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

function Model(props, ref) {
  const { nodes, materials } = useGLTF("/headphone.gltf");

  // const { rotateY } = useSpring({
  //   rotateY: props.active,
  //   config: { mass: 3, tension: 1000, friction: 50, precision: 0.0001 },
  // });

  // const rotation = rotateY.to([0, 1], [0, 4]);

  return (
    <a.mesh
      {...props}
      dispose={null}
      // rotation-y={rotation}
      ref={ref}
      geometry={nodes.Skullcandy_Crusher_M_Skullcandy_Crusher_0.geometry}
      material={materials["Material.001"]}
      scale={0.3}
    >
      <a.meshStandardMaterial color={props.color} />
    </a.mesh>
  );
}

useGLTF.preload("/headphone.gltf");

export default forwardRef(Model);
