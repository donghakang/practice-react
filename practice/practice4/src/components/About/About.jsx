import React from "react";

// import Bezier from './ui/About/Bezier'
import Emoji from "react-apple-emojis";
import { Work, Education, Language } from "./Info";
import Skill  from './Skill'
import { Container } from "@material-ui/core";

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
      <Container maxWidth='md' style={{backgroundColor: 'red'}}>
        <Education />
        <Work />
        <Language />
      </Container>
      {/* <Bezier/> */}
      {/* <Name /> */}

      {/* <Language />
      <Skill style={skillStyle} /> */}
    </div>
  );
}
