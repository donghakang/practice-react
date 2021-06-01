import "./App.css";

// import Button from "@material-ui/core/Button";
import React, { useState } from "react";

import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  TextField,
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import { orange, green } from "@material-ui/core/colors";
import MenuIcon from "@material-ui/icons/Menu";
import "fontsource-roboto";

const ButtonExample = () => {
  const handleSubmit = (e) => {
    console.log("submit button clicked");
  };
  return (
    <>
      <h1>Button Examples</h1>
      <ButtonGroup>
        <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button>
        <Button variant="contained" color="secondary" size="small" disabled>
          Cancel
        </Button>
        <Button variant="outlined" style={{ fontSize: 6 }}>
          update
        </Button>
        <Button variant="outlined" startIcon={<SaveIcon />}>
          Save
        </Button>
      </ButtonGroup>
      <br />
      <br />
      <br />
      <ButtonGroup variant="contained" color="primary">
        <Button startIcon={<SaveIcon />}>Save</Button>
        <Button startIcon={<DeleteIcon />}>Discard</Button>
      </ButtonGroup>
    </>
  );
};

function CheckboxExmaple() {
  const [checked, setChecked] = useState(true);
  return (
    <div>
      <h1>Checkbox Example</h1>
      <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<DeleteIcon />}
            checkedIcon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            color="primary"
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    </div>
  );
}

function TextfieldExample() {
  return (
    <>
      <h1>Text Field Example</h1>
      <TextField />
      <br />
      <br />
      <TextField variant="standard" />
      <br />
      <br />
      <TextField variant="outlined" />
      <br />
      <br />
      <TextField variant="filled" />
      <br />
      <br />
      <TextField variant="outlined" color="secondary" type="time" />
      <br />
      <br />
      <TextField variant="outlined" color="secondary" type="date" />
      <br />
      <br />
      <TextField variant="outlined" color="primary" label="The Time" />
      <br />
      <br />
      <TextField
        variant="outlined"
        label="The date"
        placeholder="Put date here"
      />
      <br />
    </>
  );
}

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #333, #999)",
    border: 0,
    borderRadius: 15,
    color: "white",
    padding: "0 30px",
  },
});

function UseStylesExample() {
  const classes = useStyles();
  return (
    <>
      <h1>useStyles Example</h1>
      <Button className={classes.root}>Test Styled Button</Button>
    </>
  );
}

const theme = createMuiTheme({
  typography: {
    h3: {
      fontSize: 36,
      fontStyle: "italic",
      marginBottom: 0,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function ThemeProviderExample() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Theme Provider Example</h1>
        <ButtonGroup>
          <Button variant="contained" color="primary">
            Submit
          </Button>
          <Button variant="contained" color="secondary" size="small">
            Cancel
          </Button>
          <Button variant="outlined" style={{ fontSize: 6 }}>
            update
          </Button>
          <Button variant="outlined" startIcon={<SaveIcon />}>
            Save
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </>
  );
}

// font
function FontExample() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <h1>Font Example</h1>
        <span>type yarn add fontsource-roboto...</span>
        <Typography variant="h1">Hello World,</Typography>
        <Typography variant="h3">Hello World,</Typography>
        <Typography variant="body1">Hello World, body1</Typography>
        <Typography variant="subtitle1">Hello World, Subtitle1</Typography>
        <Typography variant="h5" component="div">
          This is translated as div but h5 size!
        </Typography>
        <Typography variant="h5" component="div">
          This is translated as div but h5 size!
        </Typography>
      </ThemeProvider>
    </>
  );
}

// creating Container, layout
function ContainerExample() {
  return (
    <>
      <h1>Container Example</h1>
      <Container maxWidth="xs">
        <div
          style={{
            backgroundColor: "cyan",
            width: "100%",
            height: "300px",
            margin: "0",
          }}
        >
          Inside Container...
        </div>
      </Container>
      <Grid container spacing={4} justify="center">
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
      </Grid>
      <Grid container spacing={5}>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
        <Grid item>
          <Paper style={{ height: 75, width: 50 }} />
        </Grid>
      </Grid>
      responsive...
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
        <Grid item xs={3} sm={6}>
          <Paper style={{ height: 75, width: "100%" }} />
        </Grid>
      </Grid>
    </>
  );
}

function BarExample() {
  return (
    <>
    <h1>App Bar (Menu bar) Example</h1>
    <AppBar color='primary'>
      <Toolbar>
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <Typography variant='h6'>
          Mui Theming
        </Typography>
        <Button>
          Login
        </Button>
      </Toolbar>
    </AppBar>
    </>
  );
}

const Br = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        width: "100%",
        height: "1px",
        backgroundColor: "gray",
      }}
    ></div>
  );
};

// Main
function App() {
  return (
    <div className="App">
      <ButtonExample />
      <Br />
      <CheckboxExmaple />
      <Br />
      <TextfieldExample />
      <Br />
      <UseStylesExample />
      <Br />
      <ThemeProviderExample />
      <Br />
      <FontExample />
      <Br />
      <ContainerExample />
      <Br />
      <BarExample />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
