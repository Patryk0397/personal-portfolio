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
      padding: "20px",
    },
    componentContainer: {
      width: "100%",
      padding: "10px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "1rem"
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
      display: "flex",
      padding: "2%",
      flex: 1,
    },
    employerContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
      flex: "0 1 25%",
      minWidth: "25%",
      gap: "0.5rem"
    },
    roleHolder: {

    },
    cvContainer: {
      display: "flex",
      justifyContent: "center",
    },
    employerIcon: { height: "7em", padding: "15px" },
    iconText: {
      paddingLeft: "5%",
    },
    dateLocationContainer: {
      justifyContent: "start",
      display: "flex",
      marginBottom: "10px",
      alignItems: "center"
    },
  };

  const pickLogo = (company) => {
    if (company === "DPD") {
      return (
        <Tm8 style={styles.dpdLogo}></Tm8>
      )
    } else if (company === "TM8") {
      return (
        <Tm8 style={styles.dpdLogo}></Tm8>
      )
    } else {
      return (
        <Tm8 style={styles.dpdLogo}></Tm8>
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
                  <p style={{ fontSize: "18px", fontWeight: 800 }}>
                    {job.title}
                  </p>
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
            <h3>Responsibilities:</h3>
            <ul>
            {selectedJob.tasks.map((task, index) => {
              const [title, description] = task.split(": ");
              return (
                <li key={index}>
                  <strong>{title}:</strong> {description}
                </li>
              );
            })}
            </ul>
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
