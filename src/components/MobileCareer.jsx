import React from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

import { ReactComponent as Entwined } from "../media/entwined.svg";
import { ReactComponent as Dpd } from "../media/dpd.svg";
import { ReactComponent as Tm8 } from "../media/tm8.svg";
import { ReactComponent as Date } from "../media/date.svg";
import { ReactComponent as Location } from "../media/location.svg";

export default function MobileCareerComponent() {
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
    dpdLogo: { opacity: "50%", width: "50%" },
    tm8Logo: { opacity: "50%", width: "50%", paddingTop: "50px" },
    locationIcon: { height: "50px", width: "50px", padding: "5px" },
    flexJustifyCentre: { display: "flex", justifyContent: "center" },
    listItemText: { fontSize: "14px" },
  };

  const pickLogo = (company) => {
    if (company === "DPD") {
      return (
        <Dpd style={styles.dpdLogo}></Dpd>
      )
    } else if (company === "TM8") {
      return (
        <Tm8 style={styles.tm8Logo}></Tm8>
      )
    } else {
      return (
        <Tm8 style={styles.tm8Logo}></Tm8>
      )
    }
  }

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
                <div style={styles.flexJustifyCentre}>
                  {pickLogo(job.companyLogo)}
                </div>
                <h2 style={styles.flexJustifyCentre}>{job.title}</h2>
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
                      <li style={styles.listItemText} key={index}>
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
                    alignItems: "center"
                  }}
                >
                  <Date
                    style={{
                      height: "50px",
                      width: "50px",
                      padding: "5px",
                    }}
                  ></Date>
                  <h5>{job?.dates}</h5>
                </div>
                <div
                  style={{
                    justifyContent: "start",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <Location
                    style={styles.locationIcon}
                  ></Location>
                  <h5>{job?.location}</h5>
                </div>
              </div>
            </Paper>
          </Paper>
        );
      })}
    </div>
  );
}
