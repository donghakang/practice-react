import React, { useState, useEffect } from "react";
import Emoji from "react-apple-emojis";

import "./About.scss";

const useInfo = (data) => {
  const [info, setInfo] = useState([]);

  const getData = () => {
    fetch(data, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setInfo(myJson);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const listStyle = {marginRight: '10vw', marginLeft: '10vw', marginTop: "2vh", fontSize: "0.85em"};
  const titleStyle = {color:"black"};
  const dateStyle = {color:"charcoal", fontSize:"1em", fontWeight:"normal"};
  const contentStyle = {color:'black'};

  const infoMap = info.map((i) => (
    <div key={i.id} style={listStyle}>
      <h1 style={titleStyle}>{i.title}</h1>
      <h3 style={dateStyle}>{i.date}</h3>
      {i.info.map((i, index) => (
        <ul key={index} style={contentStyle}>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  ));
  console.log(infoMap);
  return infoMap;
};

const InfoComponent = (props) => {
  const info = useInfo(props.data);

  return (
    <div className="information">
      <div className="title">
        <div className="emoji">
          <Emoji className="icon" name={props.emoji} width={40} />
        </div>
        <h1 className="content">{props.title}</h1>
      </div>
      {info}
    </div>
  );
};

export default InfoComponent;
