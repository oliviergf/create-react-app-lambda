import React, { useState } from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import logo from "./assets/hand.png";
import dict from "./dictionnary";
const LangueBar = ({ setLang }) => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-end"
      alignItems="center"
      style={{ height: "5%" }}
    >
      <Grid item onClick={() => setLang(0)} style={{ cursor: "pointer" }}>
        fr
      </Grid>
      /
      <Grid
        style={{ paddingRight: "10px", cursor: "pointer" }}
        item
        onClick={() => setLang(1)}
      >
        eng
      </Grid>
    </Grid>
  );
};

const LinkFooter = () => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "10%" }}
    >
      <Grid
        item
        xs={6}
        style={{ textAlign: "right", paddingRight: "1%", cursor: "pointer" }}
        onClick={() => {
          console.log("bite");
        }}
      >
        <Link href="https://github.com/oliviergf" target="_blank">
          <GitHubIcon fontSize="large" />
        </Link>
      </Grid>
      <Grid
        item
        xs={6}
        style={{ textAlign: "left", paddingLeft: "1%", cursor: "pointer" }}
      >
        <Link
          href="https://www.linkedin.com/in/olivier-gauthier-farley/"
          target="_blank"
        >
          <LinkedInIcon fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  );
};

const App = () => {
  const [lang, setLang] = useState(0);

  return (
    <div className="App">
      <LangueBar setLang={setLang} />
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ height: "85%" }}
      >
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <div>{dict.greeting[lang] + "!"}</div>
          <div>{dict.welcome[lang]}</div>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", paddingLeft: "10%" }}>
          <img src={logo} alt="Logo" style={{ width: "45%" }} />
        </Grid>
      </Grid>
      <LinkFooter />
    </div>
  );
};

export default App;
