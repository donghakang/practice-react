import React from "react";
import Model from './ui/Home/Environment'

const backgroundColor = '#ff3d00'
const Name = () => {
  // const style =
  const name = "DONGNHA KANG";
  const style = { fontSize: "5rem", color: "white" };

  return <h1 style={style}>{name}</h1>;
};


export default function Home() {
  return (
    <div className="App">
      <Name />
      <Model backgroundColor={backgroundColor}/>
    </div>
  );
};
