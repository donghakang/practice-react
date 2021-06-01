import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Text, OrbitControls } from "@react-three/drei";
import React, {useEffect} from "react";

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
        position={[0,0,0.2]}
      >
        {prior_lang[0]}
      </Text>
      <Text position={[0,0,-0.2]}
            rotation={[0,-Math.PI,0]}>
        java
      </Text>
      <OrbitControls/>
    </Canvas>
  );
}
