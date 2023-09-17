import React, { useState } from "react";
import { Paper } from "@mui/material";
import { jobs } from "../constants/jobs";

import { ReactComponent as Entwined } from "../media/entwined.svg";
import { ReactComponent as Dpd } from "../media/dpd.svg";
import { ReactComponent as Tm8 } from "../media/tm8.svg";
import { generateSkillTiles } from "../util/skill";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function MobileCareerComponent() {
  const styles = {
    main: {
      display: "flex",
      flexDirection: "column",
      padding: "0 20px",
      justifyContent: "space-between",
      gap: "5px"
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
    dpdLogo: { opacity: "50%", width: "50%", height: "40px" },
    tm8Logo: { opacity: "50%", width: "50%" },
    companyLogoContainer: { display: "flex", minHeight: "40px" },
    listItemText: { fontSize: "14px" },
    skillsContainer: {
      display: "flex",
      gap: "5px",
      justifyContent: "center",
      flexWrap: "wrap"
    }
  };

  const [expanded, setExpanded] = useState(false);

  const handleChange =
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
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
        <Entwined style={styles.tm8Logo}></Entwined>
      )
    }
  }

  return (
    <div style={styles.main}>
      {
        jobs.map( job => {
          return (
            <Accordion key={job.dates} expanded={expanded === job.dates} onChange={handleChange(job.dates)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                <div style={styles.companyLogoContainer}>
                   {pickLogo(job.companyLogo)}
                 </div>
                </Typography>
                <div>

                <Typography sx={{ color: 'text.primary' }}>{ job.title }</Typography>
                <Typography sx={{ color: 'text.secondary' }}>{ job.dates }</Typography>
                </div>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {
                    <ul style={{ paddingLeft: "10px", paddingRight: 0 }}>
                      {job.tasks.map((task, index) => {
                        const [title, description] = task.split(": ");
                        return (
                          <li key={index}>
                            <strong>{title}:</strong> {description}
                          </li>
                        );
                      }
                    )
                  }
            </ul> }
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })
      }
    </div>
  );

  // return (
  //   <div style={styles.main}>
  //     {jobs.map((job) => {
  //       return (
  //         <Paper
  //           key={job.dates}
  //           variant="elevation"
  //           elevation={6}
  //           sx={{
  //             width: "100%",
  //             padding: "10px",
  //             display: "flex",
  //             flexDirection: "column",
  //           }}
  //         >
  //           <Paper
  //             variant="elevation"
  //             elevation={2}
  //             sx={styles.jobDescriptionContainer}
  //           >
  //             <div
  //               style={{
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 justifyContent: "center",
  //                 paddingRight: "20px",
  //                 width: "100%",
  //               }}
  //             >
  //               <div style={styles.flexJustifyCentre}>
  //                 {pickLogo(job.companyLogo)}
  //               </div>
  //               <h2 style={styles.flexJustifyCentre}>{job.title}</h2>
  //               <h5 style={styles.flexJustifyCentre}>{job?.dates} | {job?.location}</h5>
  //             </div>
  //             <div
  //               style={{
  //                 display: "flex",
  //                 flexDirection: "column",
  //                 padding: "5%"
  //               }}
  //             >
            //     <ul style={{ paddingLeft: "10px", paddingRight: 0 }}>
            //     {job.tasks.map((task, index) => {
            //       const [title, description] = task.split(": ");
            //       return (
            //         <li key={index}>
            //           <strong>{title}:</strong> {description}
            //         </li>
            //       );
            // })}
            // </ul>
  //           <div style={styles.skillsContainer}>
  //             {generateSkillTiles(job.skills, true)}
  //           </div>
  //             </div>
  //           </Paper>
  //         </Paper>
  //       );
  //     })}
  //   </div>
  // );
}
