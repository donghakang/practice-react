import React, { useState, useEffect } from "react";
import { Grid, Typography, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "../Navbar";

const useStyles = makeStyles((theme) => ({
  section: {
    columnCount: 1,
    columnGap: "1px",
    [theme.breakpoints.up("sm")]: {
      columnCount: 2,
    },
  },

  // Project components
  item: {
    display: "inline-block",
    margin: "0 0 1px",
    width: "100%",
  },

  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    transition: "background-color 0.25s ease-in-out",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },

  // header
  heading: {
    color: "blue",
    fontSize: "8rem",
    fontWeight: "bold",
  },
}));

const ProjectName = () => {
  const classes = useStyles();
  return <Typography className={classes.heading}>PROJECT.</Typography>;
};

const ProjectContent = (props) => {
  const classes = useStyles();
  const res = props.data;
  return (
    <div
      className={classes.item}
      key={res.id}
      style={{
        height: `${res.importance * 120}px`,
        backgroundRepeat: "no-repeat",
        // backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundImage: `url(image/${res.img})`,
      }}
    >
      <div className={classes.content}>
        <h1>{res.title}</h1>
      </div>
    </div>
  );
};

const useProject = () => {
  const [info, setInfo] = useState([]);

  const getProjectData = () => {
    fetch("data/project.json")
      .then((res) => res.json())
      .then((res) => setInfo(res));
  };

  useEffect(() => {
    getProjectData();
  }, []);

  return info.map((res) => {
    return <ProjectContent data={res} />;
  });
};

export default function Project() {
  const info = useProject();
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Navbar />
      <ProjectName />
      <div className={classes.section}>{info}</div>
    </Container>
  );
}
