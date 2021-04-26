import React from "react";

import Header from "./Header";
import Skill from "./ui/About/Skill";
import Work from "./ui/About/Work";
import Resume from "./ui/About/Resume";
import Education from "./ui/About/Education";

const Info = () => {
  return (
    <div className="info">
      <h1>Dongha Kang (강동하)</h1>
      <h2>dkang0602@gmail.com</h2>
    </div>
  );
};

export default function About() {
  return (
    <>
      <Header />
      <div className="about">
        <div className="intro">
          <div className="face"></div>
          <Info />
        </div>
        {/* <div className="timeline">
          div className="time">
            <div className="line" />
          </div> 
          
        </div> */}
        <div className="content">
            <div className="content education">
              <h1>Education</h1>
              <Education />
            </div>
            <div className="content work">
              <h1>Previous Work</h1>
              <Work />
            </div>
          </div>
        <Skill />
        <Resume />
      </div>
    </>
  );
}
