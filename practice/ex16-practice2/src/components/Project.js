import React from "react";
import ProjectElement from "./ui/Project/ProjectElement";

export default function Project() {
  return (
    <div className="project">
      <h1>Project</h1>
      <div className="project content">
        <ProjectElement
          name={"Project1"}
          description={"Description goes here"}
        />

        <ProjectElement
          name={"Project2"}
          description={"Description goes here"}
        />
        <ProjectElement
          name={"Project3"}
          description={"Description goes here"}
        />
        <ProjectElement
          name={"Project4"}
          description={"Description goes here"}
        />
      </div>
    </div>
  );
}
