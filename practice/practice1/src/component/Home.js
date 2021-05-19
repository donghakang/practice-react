import React from "react";
import Model from "./ui/Home/Environment";
import Navbar from "./Navbar";
import '../App.scss';

const backgroundColor = "#ff3d00";
const Name = () => {
  // const style =
  const name = "DONGHA KANG";
  const style = { backgroundColor: backgroundColor, fontSize: "6rem", color: "white", zIndex: "-1",};

  return <h1 style={style}>{name}</h1>;
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Name />
        <Model backgroundColor={backgroundColor} />
      </div>
    </div>
  );
}
