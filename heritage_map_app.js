/* === heritage-map/src/locations.json === */
[
  {
    "id": 1,
    "name": "Taj Mahal",
    "lat": 27.1751,
    "lng": 78.0421,
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    "description": "An ivory-white marble mausoleum in Agra, India, commissioned in 1632 by Mughal emperor Shah Jahan."
  },
  {
    "id": 2,
    "name": "Qutub Minar",
    "lat": 28.5244,
    "lng": 77.1855,
    "image": "https://upload.wikimedia.org/wikipedia/commons/1/17/Qutub_Minar_Qutb_Minar.jpg",
    "description": "A UNESCO World Heritage Site located in Delhi, India, built in the early 13th century."
  },
  {
    "id": 3,
    "name": "Fort Chaliyam",
    "lat": 11.1551,
    "lng": 75.8034,
    "image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Chaliyam_fort_particles.jpg",
    "description": "Constructed by the Portuguese in 1531, Fort Chaliyam was a strategic military outpost. Captured and dismantled by the Zamorin's forces in 1571, it played a pivotal role in the region's colonial history."
  }
]

/* === heritage-map/src/App.js === */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import locations from './locations.json';
import L from 'leaflet';

// Fix marker icon issues
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function App() {
  return (
    <div className="h-screen w-full">
      <MapContainer center={[20.5937, 78.9629]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]}>
            <Popup>
              <h2 className="font-bold text-lg">{loc.name}</h2>
              <img src={loc.image} alt={loc.name} style={{ width: '100%', margin: '10px 0' }} />
              <p>{loc.description}</p>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;  

/* === heritage-map/package.json === */
{
  "name": "heritage-map",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "leaflet": "^1.7.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-leaflet": "^4.2.1",
    "react-scripts": "5.0.1"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
