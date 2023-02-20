import { Paper } from "@mui/material";
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
    { country: "cn", value: 1389618778 }, // china
    { country: "in", value: 1311559204 }, // india
    { country: "us", value: 331883986 }, // united states
    { country: "id", value: 264935824 }, // indonesia
    { country: "pk", value: 210797836 }, // pakistan
    { country: "br", value: 210301591 }, // brazil
    { country: "ng", value: 208679114 }, // nigeria
    { country: "bd", value: 161062905 }, // bangladesh
    { country: "ru", value: 141944641 }, // russia
    { country: "mx", value: 127318112 }, // mexico
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

      </Paper>
    </div>
  );
}
