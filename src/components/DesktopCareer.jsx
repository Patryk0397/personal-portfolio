import * as React from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

import { ReactComponent as Entwined } from "../media/entwined.svg";
import { ReactComponent as Dpd } from "../media/dpd.svg";
import { ReactComponent as Tm8 } from "../media/tm8.svg";
import { ReactComponent as Date } from "../media/date.svg";
import { ReactComponent as Location } from "../media/location.svg";

export default function DesktopCareerComponent() {
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);

  const styles = {
    main: {
      display: "flex",
      left: "0",
      right: "0",
      padding: "20px",
      justifyContent: "space-between",
    },
    componentContainer: {
      width: "100%",
      padding: "20px",
      display: "flex",
      flexDirection: "row",
    },
    dpdLogo: {
      height: "45px",
      width: "10em",
      marginRight: "10%",
      marginLeft: "5%",
    },
    tm8Logo: {
      height: "45px",
      width: "10em",
      marginRight: "10%",
      marginLeft: "5%",
    },
    locationIcon: { height: "75px", width: "75px", padding: "5px" },
    dateIcon: {
      height: "75px",
      width: "75px",
      padding: "5px",
    },
    jobTile: {
      width: "100%",
      margin: "15px",
      padding: "10px",
      textAlign: "center",
      ":hover": {
        background: "#f5f5f5",
        cursor: "pointer",
      },
      display: "flex",
      alignItems: "center",
    },
    jobDescriptionContainer: {
      width: "100%",
      marginLeft: "50px",
      textAlign: "center",
      display: "flex",
      justifyContent: "space-around",
    },
    roleHolder: {
      textAlign: "left",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "60px",
      backgroundImage: "url('../media/milan.jpeg')",
      width: "65%",
    },
    cvContainer: {
      display: "flex",
      justifyContent: "center",
    },
    employerContainer: {
      width: "25%",
    },
    employerIcon: { height: "7em", padding: "15px" },
    iconText: { paddingLeft: "5%" },
    dateLocationContainer: {
      justifyContent: "start",
      display: "flex",
    },
  };

  const pickLogo = (company) => {
    if (company === "DPD") {
      return (
        <Dpd style={styles.dpdLogo}></Dpd>
      )
    } else if (company === "TM8") {
      return (
        <Tm8 style={styles.dpdLogo}></Tm8>
      )
    } else {
      return (
        <Entwined style={styles.dpdLogo}></Entwined>
      )
    }
  }

  return (
    <div style={styles.main}>
      <Paper variant="elevation" elevation={6} sx={styles.componentContainer}>
        <div style={styles.employerContainer}>
          {jobs.map((job, index) => {
            return (
              <Paper
                key={index}
                variant="elevation"
                elevation={2}
                sx={{
                  ...styles.jobTile,
                  background: job === selectedJob && "#f5f5f5",
                }}
                onClick={() => setSelectedJob(job)}
              >
                {pickLogo(job.companyLogo)}
                <div style={{ textAlign: "center", width: "100%" }}>
                  <p style={{ fontSize: "20px", fontWeight: 800 }}>
                    {job.title}
                  </p>
                  <h4>{job.dates}</h4>
                </div>
              </Paper>
            );
          })}
        </div>

        <Paper
          variant="elevation"
          elevation={2}
          sx={styles.jobDescriptionContainer}
        >
          <div style={styles.roleHolder}>
            <h2>Responsibilities:</h2>
            <ul>
              {selectedJob?.tasks.map((task, index) => {
                return (
                  <li style={{ fontSize: "20px" }} key={index}>
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div style={styles.dateLocationContainer}>
              <Date style={styles.dateIcon}></Date>
              <h3 style={styles.iconText}>{selectedJob?.dates}</h3>
            </div>
            <div style={styles.dateLocationContainer}>
              <Location style={styles.locationIcon}></Location>
              <h3 style={styles.iconText}>{selectedJob?.location}</h3>
            </div>
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
