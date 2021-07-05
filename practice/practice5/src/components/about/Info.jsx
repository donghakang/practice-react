import React, { useState, useEffect } from "react";
import VisualInfo from "./VisualInfo";

const Info = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(props.data)
        .then((res) => res.json())
        .then((res) => setInfo(res))
        .then(setIsLoading(false))
        .catch((err) => console.log("cannot fetch a data: ", err));
    };

    fetchData();
  }, []);
  return (
    <>
      {!isLoading ? (
        <div>
          {props.emoji} {props.name}
          <InfoComponent data={info} />
        </div>
      ) : (
        <div> isLoading... </div>
      )}
    </>
  );
};

const InfoComponent = (props) => {
  const info = props.data.map((res) => (
    <div key={res.id}>
      {res.title} {res.date} {res.info}
    </div>
  ));

  console.log(info);

  return <>{info}</>;
};

export function Education() {
  return <Info name="Education" emoji="👨🏻‍🎓" data="/data/education.json" />;
}

export function Work() {
  return <Info name="Work" emoji="👷🏻‍♂️" data="/data/work.json" />;
}

export function Skill() {
  return <VisualInfo name="Skill" emoji="👨🏻‍💻" data="/data/skill.json" />;
}
