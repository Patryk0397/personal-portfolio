import { Paper } from "@mui/material";
import { schools } from "../constants/education";
import { useState } from "react";
const EducationComponent = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1200;

  const styles = {
    main: {
      display: "flex",
      flexDirection: "row",
      left: "0",
      right: "0",
      padding: "20px",
    },
    paperContainer: {
      width: "100%",
      padding: "20px",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
    },
    schoolContainer: {
      width: isMobile ? null : "100%",
      margin: "15px",
      padding: "10px",
      textAlign: "center",
      ":hover": {
        background: "#f5f5f5",
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    courseNames: { margin: "5px" }
  }

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={styles.paperContainer}
      >
        {schools.map((school, index) => {
          return (
            <Paper key={index} variant="elevation" elevation={2} sx={styles.schoolContainer}>
              <h2>{school.name}</h2>
              <h3>{school.courseType}</h3>
                {school.courseNames.map((courseName, index) => {
                  return <h4 style={styles.courseNames}key={index}>{courseName}</h4>
                })}
              <h4>{school.dates}</h4>
            </Paper>
          )}
        )}
      </Paper>
    </div>
  );

}

export default EducationComponent
