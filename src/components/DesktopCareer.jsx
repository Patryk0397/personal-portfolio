import * as React from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

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
      justifyContent: "space-around"
    },
    cvContainer: {
      display: "flex",
      justifyContent: "center",
    },
    employerContainer: {
      width: "25%",
    },
    employerIcon: { height: "7em", padding: "15px" },
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
                {job.companyLogo === "DPD" ? (
                  <Dpd
                    style={{
                      height: "45px",
                      width: "10em",
                      marginRight: "10%",
                      marginLeft: "5%",
                    }}
                  ></Dpd>
                ) : (
                  <Tm8
                    style={{
                      height: "45px",
                      width: "10em",
                      marginRight: "10%",
                      marginLeft: "5%",
                    }}
                  ></Tm8>
                )}

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
              textAlign: "left",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "60px",
              backgroundImage: "url('../media/milan.jpeg')",
              width: "65%",
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
