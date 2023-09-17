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
import { ReactComponent as Vue } from "../media/vue.svg";
import { ReactComponent as Nest } from "../media/nestjs.svg";
import { ReactComponent as Mongo } from "../media/mongo.svg";
import { useState, useEffect } from "react";

export default function SkillsComponent() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1200;

  const styles = {
    main: {
      display: "flex",
      padding: "0 20px",
    },
    gridContainer: {
      width: "100%",
      padding: "10px",
      display: "grid",
      gridTemplateColumns: isMobile ?  "1fr 1fr 1fr 1fr 1fr" : "1fr 1fr 1fr 1fr 1fr 1fr 1fr",
      gap: "5px",
    },
    gridItem: {
      display: "flex",
      justifyContent: "center",
    },
    skillTile: {
      height: isMobile ? "45px" : "70px",
      width: isMobile ? "45px" : "70px",
      cursor: "pointer",
    },
    lastChild: {
      gridColumn: "3/4"
    }
  };

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={styles.gridContainer}
      >
        <div style={styles.gridItem}>
          <Tooltip sx={styles.tooltip} title={"JavaScript"}>
            <Js style={styles.skillTile}></Js>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"TypeScript"}>
            <Ts style={styles.skillTile}></Ts>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"NestJS"}>
            <Nest style={styles.skillTile}></Nest>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"NodeJs"}>
            <Node style={styles.skillTile}></Node>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"VueJS"}>
            <Vue style={styles.skillTile}></Vue>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"ReactJS"}>
            <ReactJs style={styles.skillTile}></ReactJs>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"Angular (2+)"}>
            <Angular style={styles.skillTile}></Angular>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"CSS"}>
            <Css style={styles.skillTile}></Css>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"HTML"}>
            <Html style={styles.skillTile}></Html>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"MongoDB"}>
            <Mongo style={styles.skillTile}></Mongo>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"SQL"}>
            <Db style={styles.skillTile}></Db>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"Google Cloud Platform"}>
            <Gcp style={styles.skillTile}></Gcp>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"Sentry"}>
            <Sentry style={styles.skillTile}></Sentry>
          </Tooltip>
        </div>

        <div style={styles.gridItem}>
          <Tooltip title={"Git"}>
            <Git style={{...styles.skillTile}}></Git>
          </Tooltip>
        </div>
      </Paper>
    </div>
  );
}
