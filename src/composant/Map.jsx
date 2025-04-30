import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';

const mangatsiotraPosition = [-22.2425757784399, 47.949284037271454];
// Icône personnalisée pour le marqueur
const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

export default function MapFitovinany() {
  return (
    <MapContainer center={[-22.2, 47.6]} zoom={8} style={{ height: '100%', width: '100%', zIndex: 1 }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; OpenStreetMap contributors'
      />

       {/* Marqueur sur Mangatsiotra */}
       <Marker position={mangatsiotraPosition} icon={customIcon}>
        <Popup>Mangatsiotra, Fitovinany</Popup>
      </Marker>
    </MapContainer>
  );
}
