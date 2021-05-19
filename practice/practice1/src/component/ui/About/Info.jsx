import React, { useState, useEffect } from "react";

import Info from "./InfoComponent";

export const Work = () => {
  return (
    <Info
      title="Work"
      emoji="man-construction-worker-light-skin-tone"
      data="data/work.json"
    />
  );
};

export const Education = () => {
  return (
    <Info
      title="Education"
      emoji="man-student-light-skin-tone"
      data="data/education.json"
    />
  );
};

export const Language = () => {
  return (
    <Info
      title="Skill"
      emoji="man-technologist-light-skin-tone"
      data=""
    />
  );
};
