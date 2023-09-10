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
import GenericModal from "./GenericModal";
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

  const [open, setOpen] = React.useState(false);
  const [modalTitle, setModalTitle] = React.useState("");
  const [modalContent, setModalContent] = React.useState("");


  const handleOpen = (choice) => {
    setModalTitle(skills[choice].title);
    setModalContent(skills[choice].content);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const skills = {
    js: {
      title: "JavaScript",
      content: [],
    },
  };
  const styles = {
    main: {
      display: "flex",
      padding: "20px",
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
      <GenericModal
        title="test"
        content="test2"
        open={open}
        handleClose={handleClose}
      ></GenericModal>
      <Paper
        variant="elevation"
        elevation={6}
        sx={{
          width: "100%",
          padding: "10px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "5px",
        }}
      >
        <Tooltip sx={styles.tooltip} title={"JavaScript"}>
          <Js style={styles.skillTile} onClick={() => handleOpen("js")}></Js>
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
          <Git style={{...styles.skillTile, ...styles.lastChild}}></Git>
        </Tooltip>
      </Paper>
    </div>
  );
}
