import React, { useState, useEffect } from "react";

import Info from "./InfoComponent";
import Skill from './Skill';

export const Work = () => {
  return <Info title="Work" emoji="👷🏻‍♂️" data="data/work.json" />;
};

export const Education = () => {
  return <Info title="Education" emoji="👨🏻‍🎓" data="data/education.json" />;
};


export const Language = () => {
  const skillStyle = {
    margin: "2vh auto 8vh auto",
    width: "60vw",
    height: "60vh",
    // backgroundColor: 'pink',
  };
  return (
    <div>
      <Info title="Skill" emoji="👨🏻‍💻" data="" />
      <Skill style={skillStyle} />
    </div>
  );
};
