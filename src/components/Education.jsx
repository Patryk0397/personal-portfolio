import { Paper } from "@mui/material";
import { schools } from "../constants/education";
import { useState } from "react";
import { ReactComponent as Coventry } from "../media/coventry.svg";
const EducationComponent = () => {

  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1200;

  const styles = {
    main: {
      display: "flex",
      flexDirection: "row",
      left: "0",
      right: "0",
      padding: "0 20px",
    },
    logo: {
      height: "200px",
      margin: "-40px"
    },
    paperContainer: {
      width: "100%",
      padding: isMobile ? "10px" : "20px",
      justifyContent: "space-between",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: isMobile && "10px"
    },
    schoolContainer: {
      width: "100%",
      margin: !isMobile && "15px",
      padding: isMobile ? "10px" : "20px",
      textAlign: "center",
      ":hover": {
        background: "#f5f5f5",
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    courseNames: {
      margin: "5px",
      fontSize: isMobile && "18px"
    },
    dates: {
      fontSize: isMobile && "18px",
      fontWeight: isMobile && "400"
    }
  }

  return (
    <div style={styles.main}>
        {schools.map((school, index) => {
          return (
            <Paper key={index} variant="elevation" elevation={2} sx={styles.schoolContainer}>
              <Coventry style={styles.logo}></Coventry>
                {school.courseNames.map((courseName, index) => {
                  return <h2 style={styles.courseNames} key={index}>{courseName}</h2>
                })}
              <h2 style={styles.dates}>{school.dates}</h2>
            </Paper>
          )}
        )}
    </div>
  );

}

export default EducationComponent
