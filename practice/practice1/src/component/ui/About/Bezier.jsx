import React, { useState, useEffect } from "react";

// I'm editable!
const Bezier = () => {
  const rectangle = (
    <rect x={40} y={15} width={30} height={65} fill="hotpink" />
  );
  const circle = <ellipse cx={30} cy={60} rx={20} ry={20} fill="lightsalmon" />;
  const triangle = <polygon points="15,80 30,55 45,80" fill="turquoise" />;
  const shape = (
    <svg viewBox="0 0 300 300">
      <path
        d={`
          M 100,100
          L 200,100
          L 200,200
          L 100,200
          L 100,100
        `}
      />
    </svg>
  );

  const startPoint = [25, 25];
  const controlPoint = [300, 175];
  const endPoint = [25, 325];
  const path = (
    <path
      d={`
      M ${startPoint}
      Q ${controlPoint} ${endPoint}
    `}
      fill="none"
      stroke="hotpink"
      strokeWidth={5}
    />
  );

  const path2 = (
    <path
      d={`
        M 25,25
        C 100,50 25,75 25,100
        C 25,125 300,150 25,175
      `}
      fill="none"
      stroke="orange"
      strokeWidth={5}
    />
  );
  return (
    <svg
      style={{
        background: "#333",
        width: 240,
      }}
      viewBox="0 0 400 400"
    >
      {rectangle}
      {circle}
      {triangle}
      {shape}
      {path}
      {path2}
    </svg>
  );
};

export default Bezier;
