import React from "react";
import {
  SplitColorChannelText,
  LiquidDistortionText,
  DistortionText,
} from "react-text-fun";

import Header from "./Header";

const Distorted = (props) => {
  return (
    //     <DistortionText
    //     text={props.text}
    //     fontFamily={'Serif'}
    //     fontSize={70}
    //     speed={0.01}
    //     rotation={175.0}
    //     distortX={0.5}
    //     distortY={0.5}
    //     noiseAmplitude={0.01}
    //     sineAmplitude={10}
    //     noiseVolatility={10}
    //   />
    <LiquidDistortionText
      text={props.text}
      fontSize={120}
      fontFamily={"Serif"}
      speed={0.6}
      volatility={0.05}
      paddingLeft={200}
      paddingRight={200}
    />
    // <SplitColorChannelText
    //   text={props.text}
    //   fontSize={120}
    //   rotation={5.0}
    //   rgbOffset={0.2}
    //   addBlur={true}
    //   addNoise={true}
    //   paddingLeft={200}
    //   paddingRight={200}
    // />
  );
};

const Title = () => {
  return (
    <div onMouseOver={console.log("hll")} className="title">
      <Distorted text="DONGHA KANG" />
      {/* <Distorted text='o'/>
      <Distorted text='n'/>
      <Distorted text='g'/>
      <Distorted text='h'/>
      <Distorted text='a'/>

      <Distorted text='K'/>
      <Distorted text='a'/>
      <Distorted text='n'/>
      <Distorted text='g'/> */}
    </div>
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
  return (
    <div className="home">
      <Title />
      <Memo />
      <Header />
    </div>
  );
}
