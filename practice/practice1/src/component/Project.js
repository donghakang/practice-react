import React from "react";
import "./ui/Project/Project.scss";

const Name = () => {
  // const style =
  const name = "PROJECT";
  const style = {
    backgroundColor: "white",
    fontSize: "6rem",
    color: "darkblue",
    zIndex: "-1",
  };

  return <h1 style={style}>{name}</h1>;
};


const ProjectComponent = () => {
    return (
        <div className="component">
            Project
        </div>
    )
}

const Projects = () => {
    return (
        <div className="contents">
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
            <ProjectComponent/>
        </div>
    )
}


export default function Project() {
  return (
    <div className="project">
      <Name />
      <Projects/>
    </div>
  );
}
