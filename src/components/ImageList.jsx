import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { Paper } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import image from "../images/IMG_1633.JPG"

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;

function MapComponent() {
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width < 1200;

  const itemData = [
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;31D3672E-EC69-40D1-AC98-1AB93464F64E',
    title: 'Madeira',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;58E404E0-ABC9-40F7-A192-8BD945C5BFDD',
    title: 'Rome',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;7A29A791-2C66-43BA-B777-D662432E3004',
    title: 'San Francisco',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;879FA91A-EA5B-44B6-A819-BCD78763CB02',
    title: 'Osaka',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;442CCA7B-C843-485B-A91D-B8FEBE17E0E3',
    title: 'Edinburgh',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;55A8AAE4-087D-47C7-BDF0-942053F4016F',
    title: 'Lake Como',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;AA3EB069-ECD8-4E4A-9F12-025A7165E35F',
    title: 'Milan',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;E9C69369-DE2F-454F-B1BC-FABFA70E998D',
    title: 'Somewhere in Iceland',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;31D3672E-EC69-40D1-AC98-1AB93464F64E',
    title: 'Madeira',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;772AFB18-34F3-4738-B054-DFBA1CEB4E61',
    title: 'Berlin',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;73AE06E4-6C11-49F4-97EF-2698D00E381F',
    title: 'Lake Como',
  },
  {
    img: 'https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;484BDF36-B203-4F2D-8BA8-37D8AF8C5DD0',
    title: 'Milan',
  },
  {
    img: "https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;A4722D26-5DC2-4062-A05D-BC8F37FCC8B5",
    title: "Madeira"
  },
  {
    img: "https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;CD337CD3-4672-4A9E-B124-D39D75747867",
    title: "Sopot"
  },
  {
    img: "https://www.icloud.com/sharedalbum/#B115fk75vt6CTXs;D727DE59-254E-428D-924F-0A72E60AA4EC",
    title: "Universal Studios, Hollywood"
  }
]

  const styles = {
    imageContainer: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      left: "0",
      right: "0",
      padding: "0 20px",
    },
    iamgesContainer: {
      width: "100%",
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
    <div style={styles.imageContainer}>
      <ImageList sx={{ width: "100%", height: "100%" }} variant="woven" cols={isMobile ? 3 : 5} gap={8}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              srcSet={`${image}?w=161&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

export default MapComponent;
