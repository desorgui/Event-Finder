import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const LocationMap = ({ latitude, longitude }) => { //eslint-disable-line
  const center = {
    lat: Number(latitude),
    lng: Number(longitude),
  };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBtzechX8ady70UTleIIpnUDDqpcwqXa_s"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(LocationMap);
