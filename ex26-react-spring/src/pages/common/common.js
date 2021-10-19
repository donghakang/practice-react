import React, { useEffect, useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";

function RotatingBlock() {
  const styles = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 180 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    ></animated.div>
  );
}

function ReverseBlock() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 180 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    ></animated.div>
  );
}

function MolassesBlock() {
  const styles = useSpring({
    loop: { reverse: true },
    from: { x: 0 },
    to: { x: 180 },
    config: config.molasses,
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    ></animated.div>
  );
}

function CancelBlock() {
  const [style, animate] = useSpring(() => ({
    loop: { reverse: true },
    from: { skew: -16 },
    to: { skew: 16 },
  }));

  const handleClick = () => {
    animate({ cancel: true });
  };

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        alignItems: "center",
        ...style,
      }}
      onClick={handleClick}
    >
      <p>click me</p>
    </animated.div>
  );
}



function Common() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
        height: "80vh",
      }}
    >
      <RotatingBlock />
      <ReverseBlock />
      <MolassesBlock />
      <CancelBlock />
    </div>
  );
}

export default Common;
