import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const LinkFooter = () => {
  return (
    <Grid
      container
      justifyContent="center"
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
  return (
    <div className="App">
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "85%" }}
      >
        <Grid item xs={6} style={{ textAlign: "right" }}>
          olivier
        </Grid>
        <Grid item xs={6} style={{ textAlign: "left", paddingLeft: "2%" }}>
          :)
        </Grid>
      </Grid>
      <LinkFooter />
    </div>
  );
};

export default App;
