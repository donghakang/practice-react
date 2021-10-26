import React, { useState } from "react";
import { useSpring, animated, config, to } from "react-spring";

function Text() {
  const [flip, set] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1 style={props}>hello</animated.h1>;
}

function Numbers() {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 1,
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1>{number.to((n) => n.toFixed(2))}</animated.h1>;
}

function Colors() {
  const [flip, set] = useState(false);
  const props = useSpring({
    reset: true,
    reverse: flip,
    from: { color: "red" },
    color: "blue",
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1 style={props}>colors</animated.h1>;
}

function Angle() {
  const [flip, set] = useState(false);
  const props = useSpring({
    reset: true,
    reverse: flip,
    from: { transform: "rotateX(0deg)" },
    transform: "rotateX(180deg)",
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1 style={props}>angle</animated.h1>;
}

function Shadow() {
  const [flip, set] = useState(false);
  const props = useSpring({
    reset: true,
    reverse: flip,
    from: { boxShadow: "-10px 10px 20px 0px rgba(0,0,0,0.4)" },
    boxShadow: "10px 10px 20px 0px rgba(0,0,0,0.4)",
    delay: 200,
    config: config.molasses,
    onRest: () => set(!flip),
  });

  return <animated.h1 style={props}>angle</animated.h1>;
}

function Transform() {
  const [hover, setHover] = useState(false);
  const { x, y } = useSpring({ x: hover ? -100 : 0, y: 0 });
  // const transform = to ([x,y], (x, y) => `translate(${x}px, ${y}px)`)
  return (
    <animated.h1 style={{ x, y }} onMouseEnter={() => setHover(!hover)}>
      v8
    </animated.h1>
  );
}

function Basic() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <animated.h1 style={props}>Basic</animated.h1>
      <Text />
      <Numbers />
      <Colors />
      <Angle />
      <Shadow />
      <hr style={{ width: "60vw" }} />
      <Transform />
    </div>
  );
}

export default Basic;
