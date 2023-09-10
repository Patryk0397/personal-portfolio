import { Tooltip } from "@mui/material";
import { ReactComponent as Js } from "../media/js.svg";
import { ReactComponent as Node } from "../media/node.svg";
import { ReactComponent as ReactJs } from "../media/react.svg";
import { ReactComponent as Ts } from "../media/ts.svg";
import { ReactComponent as Angular } from "../media/angular.svg";
import { ReactComponent as Html } from "../media/html.svg";
import { ReactComponent as Css } from "../media/css.svg";
import { ReactComponent as Sql } from "../media/db.svg";
import { ReactComponent as Gcp } from "../media/gcp.svg";
import { ReactComponent as Sentry } from "../media/sentry.svg";
import { ReactComponent as Git } from "../media/git.svg";
import { ReactComponent as Vue } from "../media/vue.svg";
import { ReactComponent as Nest } from "../media/nestjs.svg";
import { ReactComponent as Mongo } from "../media/mongo.svg";

export const generateSkillTiles = (skills, mini = false) => {
  console.log('SKILLS: ', skills)
  const styles = {
    mini: {
      height: "25px",
      width: "25px"
    },
    standard: {
      height: "45px",
      width: "45px"
    }
  }
  const hello = skills.map((skill, index) => {
    switch (skill) {
      case 'js':
        return (
          <Tooltip title={"JavaScript"} key={index}>
            <Js style={mini ? styles.mini : styles.standard}></Js>
          </Tooltip>
        )
      case 'node':
        return (
          <Tooltip title={"NodeJS"} key={index}>
            <Node style={mini ? styles.mini : styles.standard}></Node>
          </Tooltip>
        )
      case 'react':
        return (
          <Tooltip title={"ReactJS"} key={index}>
            <ReactJs style={mini ? styles.mini : styles.standard}></ReactJs>
          </Tooltip>
        )
      case 'ts':
        return (
          <Tooltip title={"TypeScript"} key={index}>
            <Ts style={mini ? styles.mini : styles.standard}></Ts>
          </Tooltip>
        )
      case 'angular':
        return (
          <Tooltip title={"Angular(2+)"} key={index}>
            <Angular style={mini ? styles.mini : styles.standard}></Angular>
          </Tooltip>
        )
      case 'html':
        return (
          <Tooltip title={"HTML"} key={index}>
            <Html style={mini ? styles.mini : styles.standard}></Html>
          </Tooltip>
        )
      case 'css':
        return (
          <Tooltip title={"CSS"} key={index}>
            <Css style={mini ? styles.mini : styles.standard}></Css>
          </Tooltip>
        )
      case 'sql':
        return (
          <Tooltip title={"SQL"} key={index}>
            <Sql style={mini ? styles.mini : styles.standard}></Sql>
          </Tooltip>
        )
      case 'gcp':
        return (
          <Tooltip title={"Google Cloud Platform"} key={index}>
            <Gcp style={mini ? styles.mini : styles.standard}></Gcp>
          </Tooltip>
        )
      case 'sentry':
        return (
          <Tooltip title={"Sentry"} key={index}>
            <Sentry style={mini ? styles.mini : styles.standard}></Sentry>
          </Tooltip>
        )
      case 'git':
        return (
          <Tooltip title={"Git"} key={index}>
            <Git style={mini ? styles.mini : styles.standard}></Git>
          </Tooltip>
        )
      case 'vue':
        return (
          <Tooltip title={"VueJS"} key={index}>
            <Vue style={mini ? styles.mini : styles.standard}></Vue>
          </Tooltip>
        )
      case 'nest':
        return (
          <Tooltip title={"NestJS"} key={index}>
            <Nest style={mini ? styles.mini : styles.standard}></Nest>
          </Tooltip>
        )
      case 'mongo':
        return (
          <Tooltip title={"MongoDB"} key={index}>
            <Mongo style={mini ? styles.mini : styles.standard}></Mongo>
          </Tooltip>
        )
      default:
        return null
    }
  })

  console.log('HIYA: ', hello)

  return hello
}
