import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mockProperties } from './data/mockProperties'; // Adjust the path as necessary
import 'leaflet/dist/leaflet.css';

// Explicitly type defaultPosition as LatLngTuple
const defaultPosition: [number, number] = [51.505, -0.09]; // Latitude, Longitude

export const Map = () => {
  return (
    <div id="mapId" style={{ height: '500px', width: '100%' }}>
      <MapContainer center={defaultPosition} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {mockProperties.map((property) => (
          <Marker key={property.id} position={property.coordinates}>
            <Popup>
              {property.title} <br /> {property.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
