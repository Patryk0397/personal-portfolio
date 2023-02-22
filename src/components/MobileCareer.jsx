import * as React from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

import { ReactComponent as Dpd } from "../media/dpd.svg";
import { ReactComponent as Tm8 } from "../media/tm8.svg";
import { ReactComponent as Date } from "../media/date.svg";
import { ReactComponent as Location } from "../media/location.svg";

export default function DesktopCareerComponent() {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
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
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
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

  return (
    <div style={styles.main}>
      {jobs.map((job) => {
        return (
          <Paper
            key={job.dates}
            variant="elevation"
            elevation={6}
            sx={{
              width: "100%",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
            }}
          >
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
                  paddingRight: "20px",
                  width: "100%"
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {job.companyLogo === "DPD" ? (
                    <Dpd style={{ opacity: "50%", width: "50%" }}></Dpd>
                  ) : (
                    <Tm8 style={{ opacity: "50%", width: "50%" }}></Tm8>
                  )}
                </div>
                <h2 style={{ display: "flex", justifyContent: "center" }}>{job.title}</h2>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "5%"
                }}
              >
                <h3>Responsibilities:</h3>
                <ul>
                  {job?.tasks.map((task, index) => {
                    return (
                      <li style={{ fontSize: "16px" }} key={index}>
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
                  alignItems: "start",
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
                  <h3 style={{ paddingLeft: "5%" }}>{job?.dates}</h3>
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
                  <h3 style={{ paddingLeft: "5%" }}>{job?.location}</h3>
                </div>
              </div>
            </Paper>
          </Paper>
        );
      })}
    </div>
  );
}
