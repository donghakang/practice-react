import React from "react";


const WorkElement = (props) => {
  return (
    <div>
      {props.name}
      <br />
      {props.description}
      <br />
      {props.date}
    </div>
  );
};

export default function Work() {
  return (
    <div>
      previous work go here....
      <WorkElement
        name={"Certificate for JSP / Android"}
        description={"국비지원 Java / JSP / Android"}
        date={"2020.7 ~ 2021.2"}
      />
      <WorkElement
        name={"University of Minnesota - Twin Cities"}
        description={"Bachelor of Science in Computer Science"}
        date={"2011.2 ~ 2014.5"}
      />
      <WorkElement
        name={"Seoul National University Hospital"}
        description={"Image Processing"}
        date={"2021.2 ~ currentasdfasdfasdfasdf"}
      />
      <WorkElement
        name={"Certified academy"}
        description={"JSP Android "}
        date={"2020.7 ~ 2021.2"}
      />
      <WorkElement
        name={"Teachers assistant "}
        description={"In Gaming"}
        date={"2021.2 ~ current"}
      />
      <WorkElement
        name={"University of Minnesota"}
        description={"In Gaming"}
        date={"2021.2 ~ current"}
      />
    </div>
  );
}
