import React, { useState, useEffect } from "react";
import Emoji from "react-apple-emojis";

import "./About.scss";

const useEducation = (data) => {
  const [edu, setEdu] = useState([]);

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
        setEdu(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  const eduMap = edu.map((school) => (
    <div key={school.id} className="list">
      <h1>{school.title}</h1>
      <h3>{school.date}</h3>
      {school.info.map((i, index) => (
        <ul key={index}>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  ));
  return eduMap;
};

const InfoComponent = (props) => {
  const edu = useEducation(props.data);

  return (
    <div className="education">
      <div className="title">
        <div className="emoji">
          <Emoji className="icon" name={props.emoji} width={40} />
        </div>
        <h1>{props.title}</h1>
      </div>
      {edu}
    </div>
  );
};

export default InfoComponent;
