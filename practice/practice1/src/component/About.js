import React from "react";
import Skill from "./ui/About/Skill";
import Bezier from './ui/About/Bezier'

import "../App.scss";

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

const Resume = () => {
  return <div style={resumeStyle}>Resume</div>;
};

const PreviousWork = () => {
  return <div style={workStyle}>previous work</div>;
};

export default function About() {
  return (
    <div className="about">
        <Bezier/>
      <Name />
      <Skill style={skillStyle} />
      <Resume />
      <PreviousWork />
    </div>
  );
}
