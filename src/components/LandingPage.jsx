import { Box, Button, Typography } from "@mui/material";
import { ReactComponent as LinkedIn } from "../media/linkedin.svg";
import { ReactComponent as Facebook } from "../media/facebook.svg";
import { ReactComponent as Github } from "../media/github.svg";
import { ReactComponent as Mail } from "../media/mail.svg";
import { useState, useEffect } from "react";
import * as React from "react";

export default function LandingPage() {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 1200;

  const styles = {
    main: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: !isMobile && "space-between",
    },
    socialButton: {
      background: "white",
      ":hover": { background: "white" },
      margin: "20px",
      marginLeft: 0,
      minWidth: !isMobile && "150px",
    },
    socialMediaIconContainer: {
      display: "flex",
      width: "100%",
      justifyContent: isMobile && "space-between",
      paddingTop: isMobile ? "30px" : "20px"
    },
    socialMediaIcon: {
      height: isMobile ? "40px" : "30px",
    },
    name: {
      textAlign: isMobile && "center",
      fontWeight: "400",
      fontSize: isMobile ? "47px" : "72px",
      paddingTop: isMobile && "20px",
    },
    lastName: {
      textAlign: isMobile && "center",
      marginTop: "-42px",
      fontWeight: "800",
      fontSize: isMobile ? "54px" : "82px",
      paddingTop: "5px"
    },
    shortProfileContainer: {
      maxWidth: isMobile ? "100%" : "50%",
      paddingLeft: isMobile ? "20px" : "20px",
      paddingRight: isMobile ? "20px" : "20px",
      paddingTop: !isMobile && "200px"
    }
  };
  return (
    <div style={styles.main}>
      <Box
        component="img"
        sx={{
          width: "50%",
          height: isMobile ? "25%" : "50%",
          maskImage: "linear-gradient(to left, transparent 15%, black 100%);",
          paddingTop: isMobile && "60px",
        }}
        alt="The house from the offer."
        src={require("../media/milan.jpeg")}
      />
      <Box
        sx={styles.shortProfileContainer}
      >
        <Typography sx={styles.name}>Patryk</Typography>
        <Typography sx={styles.lastName}>Orsztynowicz</Typography>
        <Typography
          sx={{ paddingTop: isMobile ? "15px" : "0px", fontWeight: "500", textAlign: isMobile && "center" }}
          variant="body1"
        >
          Software Engineer with a knack for teamwork and communication.
        </Typography>
        <Typography
          sx={{ paddingTop: "20px", fontWeight: "300", textAlign: isMobile && "center" }}
          variant="body1"
        >
          Experienced yet hungry for knowledge developer, skilled in Full Stack
          Development utilising JavaScript Frameworks such as React, Angular and
          ExpressJS. Passionate about code and anything technology related
          bringing in motivation, hard-work and entertainment to every team (Ask
          my managers, they'll tell you!)
        </Typography>
        <div
        style={styles.socialMediaIconContainer}>
          <Button
            variant="contained"
            sx={styles.socialButton}
            href="https://www.linkedin.com/in/patryk-orsztynowicz-820084110/"
          >
            <LinkedIn style={styles.socialMediaIcon}></LinkedIn>
          </Button>
          <Button
            variant="contained"
            sx={styles.socialButton}
            href="https://www.facebook.com/PatrykOrsztynowicz1997/"
          >
            <Facebook style={styles.socialMediaIcon}></Facebook>
          </Button>
          <Button
            variant="contained"
            sx={styles.socialButton}
            href="mailto:patryk@orsztynowicz.com"
          >
            <Mail style={styles.socialMediaIcon}></Mail>
          </Button>
          <Button
            variant="contained"
            sx={styles.socialButton}
            href="https://github.com/Patryk0397"
          >
            <Github style={styles.socialMediaIcon}></Github>
          </Button>
        </div>
      </Box>
    </div>
  );
}
