import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./About.scss";

const useInfo = (data) => {
  const [info, setInfo] = useState([]);
  const contentStyle = {marginTop: '2.5vh', marginBottom: '2.5vh'}
  const getData = () => {
    fetch(data)
      .then((res) => {
        return res.json();
      })
      .then((myJson) => {
        setInfo(myJson);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const infoMap = info.map((i) => (
    <div key={i.id} style={contentStyle}>
      <Grid container justify="space-between">
        <h2>{i.title}</h2>
        <span style={{fontStyle:'italic'}}>{i.date}</span>
      </Grid>

      {i.info.map((i, index) => (
        <ul key={index}>
          <li>{i}</li>
        </ul>
      ))}
    </div>
  ));

  return infoMap;
};

const Emoji = (props) => {
  const emojiStyle = {
    fontSize: "2.4rem",
    margin: "1vh 1vw",
    // backgroundColor: "cyan",
  };

  return (
    <div
      className="emoji"
      role="img"
      aria-label={props.label ? props.label : ""}
      aria-hidden={props.label ? "false" : "true"}
      style={emojiStyle}
    >
      {props.symbol}
    </div>
  );
};

const InfoComponent = (props) => {
  const info = useInfo(props.data);

  return (
    <div>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        // style={{ backgroundColor: "yellow" }}
      >
        <Emoji symbol={props.emoji} />
        <h1>{props.title}</h1>
      </Grid>
      {info}
    </div>
  );
};

export default InfoComponent;
