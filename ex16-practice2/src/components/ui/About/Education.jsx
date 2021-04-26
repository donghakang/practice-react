import React from "react";

const EducationElement = (props) => {
  const elementStyle = { backgroundColor: "red" };
  const titleStyle = { backgroundColor: "yellow" };
  const dateStyle = { backgroundColor: "green" };
  const gpaStyle = { backgroundColor: "blue" };
  const descriptionStyle = { backgroundColor: "yellowgreen" };
  return (
    <div style={elementStyle}>
      <h3 style={titleStyle}>{props.name}</h3>
      <div style={gpaStyle}>{props.GPA}</div>
      <div style={descriptionStyle}>{props.description}</div>
      <div style={dateStyle}>{props.date}</div>
    </div>
  );
};

export default function Education() {
  return (
    <div>
      {/* <EducationElement 
                name={'Seoul National University Hospital'}
                description={'Image Processing'}
                location={'Seoul National University Hospital'}
                date={'2021.2 ~ current'}
            />
            <EducationElement 
                name={'Certified academy'}
                description={'JSP Android '}
                location={'EZEN Academy'}
                date={'2020.7 ~ 2021.2'}
            />
            <EducationElement 
                name={'Teachers assistant '}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            />
            <EducationElement 
                name={'University of Minnesota'}
                description={'In Gaming'}
                location={'University of Minnesota'}
                date={'2021.2 ~ current'}
            /> */}

      <EducationElement
        name={"Cuyahoga Valley Christian Academy"}
        GPA={"3.9/4.5"}
        date={"2011.2 ~ 2014.5"}
      />
      <EducationElement
        name={"University of Minnesota - Twin Cities"}
        GPA={"3.45/4.0"}
        description={"Bachelor of Science in Computer Science"}
        date={"2011.2 ~ 2014.5"}
      />
      <EducationElement
        name={"Certificate for JSP / Android"}
        description={"국비지원 Java / JSP / Android"}
        date={"2020.7 ~ 2021.2"}
      />
    </div>
  );
}
