import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { SiInstagram, SiFacebook, SiGmail, SiGithub } from "react-icons/si";

import Navbar from "../Navbar";

const useStyles = makeStyles((theme) => ({
  root: {
    // backgroundColor: 'blue',
  },

  heading: {
    color: "blue",
    fontSize: "8rem",
    fontWeight: "bold",
  },

  contact: {
    textAlign: "center",
  },
}));

const SocialNetworkComponent = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={3} xs={12}>
        <div className={classes.contact}>
          <SiInstagram size={50} />
        </div>
      </Grid>
      <Grid item sm={3} xs={12}>
        <div className={classes.contact}>
          <SiFacebook size={50} />
        </div>
      </Grid>
      <Grid item sm={3} xs={12}>
        <div className={classes.contact}>
          <SiGithub size={50} />
        </div>
      </Grid>
      <Grid item sm={3} xs={12}>
        <div className={classes.contact}>
          <SiGmail size={50} />
        </div>
      </Grid>
    </Grid>
  );
};

const ContactMeComponent = () => {
  return (
    <div>
      {/* //     style={{
    //       display: "flex",
    //       flexDirection: "vertical",
    //       backgroundColor: "pink",
    //       width: "100%",
    //       height: "100%",
    //       alignItems: 'center'
    //     }}
    //   >
        
    //     <TextField variant="outlined" label="Email" margin="dense" />
    //     <TextField variant="outlined" label="Tel." margin="dense" />
    //     <TextField variant="outlined" label="Message" margin="dense" /> */}
      <TextField variant="outlined" label="Name" margin="dense" />
      <TextField variant="outlined" label="Email" margin="dense" />
      <TextField variant="outlined" label="Tel" margin="dense" />
      <TextField variant="outlined" label="Memo" margin="dense" />

    </div>
  );
};
export default function Contact() {
  const classes = useStyles();
  return (
    <Container maxWidth='md' className={classes.root}>
      <Navbar />
      <Typography className={classes.heading}>Contact</Typography>

      <SocialNetworkComponent />
    </Container>
  );
}
