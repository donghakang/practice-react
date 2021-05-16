import React from "react";
import Skill from "./ui/About/Skill";
// import Bezier from './ui/About/Bezier'
import Emoji from 'react-apple-emojis'
import {Work, Education} from './ui/About/Info'

import './ui/About/About.scss'

const skillStyle = {
  margin: "auto",
  width: "60vw",
  height: "60vh",
  backgroundColor: "green",
};

const resumeStyle = {
  backgroundColor: "green",
};

const workStyle = {
  backgroundColor: "green",
};

const Name = () => {
  // const style =
  const name = "ABOUT ME,";
  const style = {
    backgroundColor: "#ff3d00",
    fontSize: "6rem",
    color: "white",
    zIndex: "-1",
  };

  return <h1 style={style}>{name}</h1>;
};

// const Resume = () => {
//   return <div style={resumeStyle}>Resume</div>;
// };

export default function About() {
  return (
    <div className="about">
        {/* <Bezier/> */}
      <Name />
      <Education/>
      <Work/>
      <Skill style={skillStyle} />
      {/* <Resume /> */}
    </div>
  );
}
