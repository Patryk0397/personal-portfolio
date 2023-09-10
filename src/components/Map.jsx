import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent() {
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

  return (
    <div id="map" style={{ width: '100%', height: '400px' }}></div>
  );
}

export default MapComponent;
