import * as React from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

import { ReactComponent as Entwined } from "../media/entwined.svg";
import { ReactComponent as Dpd } from "../media/dpd.svg";
import { ReactComponent as Tm8 } from "../media/tm8.svg";
import { ReactComponent as Date } from "../media/date.svg";
import { ReactComponent as Location } from "../media/location.svg";

export default function CareerComponent() {
  const [selectedJob, setSelectedJob] = React.useState(jobs[0]);

  const styles = {
    main: {
      display: "flex",
      left: "0",
      right: "0",
      padding: "20px",
      justifyContent: "space-between",
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
    logo: {
      height: "45px",
      width: "10em",
      marginRight: "10%",
      marginLeft: "5%",
    },
    jobDescriptionContainer: {
      width: "100%",
      marginLeft: "50px",
      padding: "10px",
      textAlign: "center",
      display: "flex",
    },
    cvContainer: {
      display: "flex",
      justifyContent: "center",
    },
    employerContainer: {
      width: "20%",
    },
    employerIcon: { height: "7em", padding: "15px" },
  };

  const pickLogo = (company) => {
    if (company === "DPD") {
      return (
        <Dpd style={styles.logo}></Dpd>
      )
    }  else if (company === "Entwined") {
      return (
        <Entwined style={styles.logo}></Entwined>
      )
    }
  }

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={{
          width: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "row",
        }}
      >
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "15%",
              paddingRight: "20px",
            }}
          >
            <div>
              {selectedJob.companyLogo === "DPD" ? (
                <Dpd style={{ opacity: "50%", width: "100%" }}></Dpd>
              ) : (
                <Tm8 style={{ opacity: "50%", width: "100%" }}></Tm8>
              )}
            </div>
            <h3 style={{ paddingTop: "10%" }}>{selectedJob.title}</h3>
          </div>
          <div
            style={{
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "60px",
              backgroundImage: "url('../media/milan.jpeg')",
              width: "65%"
            }}
          >
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
              alignItems: "start"
            }}
          >
            <div
              style={{
                justifyContent: "start",
                display: "flex",
              }}
            >
              <Date
                style={{
                  height: "75px",
                  width: "75px",
                  padding: "5px",
                }}
              ></Date>
              <h3 style={{ paddingLeft: "5%" }}>{selectedJob?.dates}</h3>
            </div>
            <div
              style={{
                justifyContent: "start",
                display: "flex",
              }}
            >
              <Location
                style={{ height: "75px", width: "75px", padding: "5px" }}
              ></Location>
              <h3 style={{ paddingLeft: "5%" }}>{selectedJob?.location}</h3>
            </div>
          </div>
        </Paper>
      </Paper>
    </div>
  );
}
