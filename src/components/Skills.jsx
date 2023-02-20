import { Paper, Tooltip } from "@mui/material";
import * as React from "react";
import { ReactComponent as Js } from "../media/js.svg";
import { ReactComponent as Node } from "../media/node.svg";
import { ReactComponent as ReactJs } from "../media/react.svg";
import { ReactComponent as Ts } from "../media/ts.svg";
import { ReactComponent as Angular } from "../media/angular.svg";
import { ReactComponent as Html } from "../media/html.svg";
import { ReactComponent as Css } from "../media/css.svg";
import { ReactComponent as Db } from "../media/db.svg";
import { ReactComponent as Gcp } from "../media/gcp.svg";
import { ReactComponent as Sentry } from "../media/sentry.svg";
import { ReactComponent as Git } from "../media/git.svg";

export default function SkillsComponent() {
  const styles = {
    main: {
      display: "flex",
      left: "0",
      right: "0",
      padding: "20px",
    },
    jobDescriptionContainer: {
      width: "100%",
      marginLeft: "50px",
      padding: "10px",
      textAlign: "center",
    },
    skillTile: {
      height:  "70px",
      width: "70px",
      ":hover": {
        height: "75px !important",
        width: "75px !important",
    }},
  };

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between"
        }}
      >
        <Tooltip sx={styles.tooltip} title={"JavaScript"}>
          <Js style={styles.skillTile}></Js>
        </Tooltip>

        <Tooltip title={"TypeScript"}>
          <Ts style={styles.skillTile}></Ts>
        </Tooltip>

        <Tooltip title={"NodeJs"}>
          <Node style={styles.skillTile}></Node>
        </Tooltip>

        <Tooltip title={"ReactJS"}>
          <ReactJs style={styles.skillTile}></ReactJs>
        </Tooltip>

        <Tooltip title={"Angular (2+)"}>
          <Angular style={styles.skillTile}></Angular>
        </Tooltip>

        <Tooltip title={"CSS"}>
          <Css style={styles.skillTile}></Css>
        </Tooltip>
        <Tooltip title={"HTML"}>
          <Html style={styles.skillTile}></Html>
        </Tooltip>
        <Tooltip title={"SQL"}>
          <Db style={styles.skillTile}></Db>
        </Tooltip>
        <Tooltip title={"Google Cloud Platform"}>
          <Gcp style={styles.skillTile}></Gcp>
        </Tooltip>

        <Tooltip title={"Sentry"}>
          <Sentry style={styles.skillTile}></Sentry>
        </Tooltip>
        <Tooltip title={"Git"}>
          <Git style={styles.skillTile}></Git>
        </Tooltip>
      </Paper>
    </div>
  );
}
