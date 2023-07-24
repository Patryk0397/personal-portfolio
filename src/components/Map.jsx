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
    mapContainer: {
      width: "100%",
      padding: "20px",
      display: "flex",
      justifyContent: "space-around",
    },
    statsContainer: {
      padding: "20px",
      display: "flex",
      justifyContent: "space-around",
    },
    statsHolder: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      paddingLeft: "20px",
      paddingRight: "20px",
      borderRadius: "5px",
    },
    stats: {
      fontWeight: "500",
      margin: "5px",
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
    { country: "jp", value: "2023" }, // japan 1
    { country: "vn", value: "2023" }, // vietnam 1
    { country: "sg", value: "2023" },
    { country: "my", value: "2023" },
    { country: "gb", value: "2006" }
  ];

  return (
    <div style={styles.main}>
      <Paper
        variant="elevation"
        elevation={6}
        sx={{
          ...styles.mapContainer,
        }}
      >
        <Paper
          variant="elevation"
          elevation={6}
          sx={{
            ...styles.statsContainer
          }}
        >
          <div
            style={{
              ...styles.statsHolder,
            }}
          >
            <h2>Travel Stats To Date:</h2>
            <h3
              style={{ ...styles.stats }}
            >{`Countries Visited: ${data.length}`}</h3>
            <h3 style={{ ...styles.stats }}>Cities Visited: 30</h3>
            <h3 style={{ ...styles.stats }}>
              {" "}
              Flights Taken: Too many to count
            </h3>
          </div>
        </Paper>

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
