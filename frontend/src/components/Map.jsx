import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [geojsonData, setGeojsonData] = useState(null);
  const position = [0.6983401876466915, 122.4488921294734];

  useEffect(() => {
    const fetchGeojsonData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/geojsons'); // Ganti dengan URL API backend Anda
        setGeojsonData(response.data);
      } catch (error) {
        console.error('Error fetching GeoJSON data:', error);
      }
    };

    fetchGeojsonData();
  }, []);

  return (
    <MapContainer center={position} zoom={10} style={{ height: '70vh', width: '150vh' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojsonData && (
        <GeoJSON data={geojsonData} />
      )}
    </MapContainer>
  );
};

export default Map;
