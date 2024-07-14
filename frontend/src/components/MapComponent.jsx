import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import {useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'


const MapComponent = () => {
  const [assistances, setAssistances] = useState([]);
  const [geojson, setGeojsons] = useState([]);
  const [polygonData, setPolygonData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/polygons')
      .then(response => {
        setPolygonData(response.data);
      });
  }, []);

  const polygon = [
    [
      [0.777336323820478, 122.30840500643131],
      [0.7009766743285439, 122.3417507794494],
      [0.632830409980869, 122.43130139302463],
      [0.6859573492865252, 122.55090620911312],
      [0.7823067151366843, 122.58409895165352],
      [0.777336323820478, 122.30840500643131]
    ]
  ];

  return (
    <div>
      
    <MapContainer center={[0.7296691414984957, 122.22358683753255]} zoom={10} style={{ height: "80vh", width: "150vh" }}>
      <TileLayer
        url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}"
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
{polygonData.map((polygon, index) => (
          <Polygon key={index} positions={polygon.feature} />
        ))}
      {/* {assistances.map(assistance => (
        <Marker key={assistance._id} position={[assistance.coordinates.lat, assistance.coordinates.lng]}>
            <Popup>
              <h3>{ assistance.name}</h3>
              <p>{assistance.address}</p>
              <p>{assistance.assistanceType}</p>
              <p>{assistance.status}</p>
            </Popup>
          </Marker>
        ))} */}
    </MapContainer>
        
        </div>
  );
};

export default MapComponent;
