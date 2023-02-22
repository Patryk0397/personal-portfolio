import { Paper } from "@mui/material";
import { ReactWorldCountriesMap } from "react-world-countries-map";
import * as React from "react";
export default function MapComponent() {
  const styles = {
    main: {
      display: "flex",
      left: "0",
      right: "0",
      padding: "20px",
    },
    jobDescriptionContainer: {
      width: "100%",
      marginLeft: "50px",
      padding: "10px",
      textAlign: "center",
    },
    skillTile: {
      height: "70px",
      width: "70px",
      ":hover": {
        height: "75px !important",
        width: "75px !important",
      },
    },
  };

  const data = [
    { country: "se", value: "2019" }, // sweden 1
    { country: "us", value: "2022" }, // united states 2
    { country: "th", value: "2020" }, // thailand 2
    { country: "au", value: "2019" }, // australia 3
    { country: "es", value: "2015" }, // spain 6
    { country: "ua", value: "2019" }, // ukraine 1
    { country: "nl", value: "2017" }, // netherlands 1
    { country: "pt", value: "2019" }, // portugal 2
    { country: "gr", value: "2022" }, // greece 5
    { country: "it", value: "2021" }, // italy 3
    { country: "de", value: "2022" }, // germany 1
    { country: "is", value: "2022" }, // iceland 1
    { country: "tr", value: "2013" }, // turkey 1
    { country: "hu", value: "2019" }, // hungary 1
    { country: "ee", value: "2017" }, // estonia 1
    { country: "fi", value: "2017" }, // finland 1
  ];

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={{
          width: "100%",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h2>{`Countries Visited: ${data.length}`}</h2>
          <h2>Cities Visited: 30</h2>
          <h2> Flights Taken: Too many to count</h2>
        </div>
        <ReactWorldCountriesMap
          color="red"
          title=""
          value-suffix=""
          size="lg"
          data={data}
        />
      </Paper>
    </div>
  );
}
