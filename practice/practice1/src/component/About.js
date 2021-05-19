import React from "react";
import Skill from "./ui/About/Skill";
// import Bezier from './ui/About/Bezier'
import Emoji from "react-apple-emojis";
import { Work, Education, Language } from "./ui/About/Info";

import "./ui/About/About.scss";

const skillStyle = {
  margin: "auto",
  marginTop: "-10vh",
  width: "60vw",
  height: "40vh",

};

const Name = () => {
  // const style =
  const name = "ABOUT ME,";
  const style = {
    backgroundColor: "white",
    fontSize: "6rem",
    color: "darkblue",
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
      <Education />
      <Work />
      <Language />
      <Skill style={skillStyle} />
    </div>
  );
}
