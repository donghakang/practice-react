import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";

import React from "react";

export default function Skill() {
  const prior_lang = [
    "python",
    "javascript",
    "C++",
    "Java",
    "Android",
    "JSP",
    "Processing",
    "React",
  ];
  const exposed_lang = ["PHP", "Unreal Engine", "Unity/C#", "iOS"];

  const priorStyle = '{color: "black"}';
  const exposedStyle = { color: "gray" };

  console.log(prior_lang);
  const aaa = prior_lang.map(
    (element) => "<div style={" + priorStyle + "}>" + element + "</div>"
  );
  console.log(aaa);
  return (
    <Canvas
      camera={{ position: [0, 0, 0.4], fov: 100 }}
      style={{
        // backgroundColor: "skyblue",
        margin: "auto",
        width: "60vw",
        height: "30vh",
        position: "relative",
        top: "0%",
        left: "0%",
      }}
    >
      <Text
        color="black" // default
        // anchorX="center" // default
        // anchorY="middle" // default
      >
        {prior_lang[0]}
      </Text>
      <OrbitControls/>
    </Canvas>
  );
}
