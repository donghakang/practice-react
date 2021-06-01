import React, { useEffect, useState } from "react";
import { LiquidDistortionText } from "react-text-fun";


import Header from "./Header";
import Model from "./ui/Home/Environment";

const Title = (props) => {
  console.log(props.size);

  useEffect(() => {
    console.log("rerender");
  }, [props.size]);

  return (
    <>
      <div className="title">
        {/* <Distorted text="DONGHA KANG" size={size} /> */}
        <LiquidDistortionText
          text={"DONGHA KANG"}
          fontSize={props.size}
          fontFamily={"Serif"}
          speed={0.2}
          volatility={0.05}
          paddingLeft={props.size / 10}
          paddingRight={props.size / 10}
        />
      </div>
    </>
  );
};

const Memo = () => {
  return (
    <div>
      A <span style={{ fontWeight: "bold" }}>Developer</span>
    </div>
  );
};

export default function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      console.log("obtain the inner width...");
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home">
      <Title size={windowWidth / 12} />
      <Header />
      <Model />
    </div>
  );
}
