import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Paper } from "@mui/material";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1200;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map', // Replace 'map' with the ID of your map container
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [0,0], // Birmingham coordinates
      zoom: 1,
    });

    map.on('load', () => {
      // Add a marker for Birmingham
      new mapboxgl.Marker()
        .setLngLat([ -1.893592, 52.486243])
        .setPopup(new mapboxgl.Popup().setHTML('Birmingham'))
        .addTo(map);
    });

    // Cleanup the map when the component unmounts
    return () => map.remove();
  }, []); // Empty dependency array ensures this code runs only once

  const styles = {
    main: {
      display: "flex",
      flexDirection: "row",
      left: "0",
      right: "0",
      padding: "0 20px",
    },
    mapContainer: {
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
    }
  }

  return (
    <div style={styles.main}>
      <Paper variant="elevation" elevation={2} sx={styles.mapContainer}>
        <div id="map" style={{ width: '100%', height: '400px' }}></div>
      </Paper>
    </div>
  );
}

export default MapComponent;
