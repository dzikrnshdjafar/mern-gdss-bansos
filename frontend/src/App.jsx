// App.jsx
import { useEffect, useState } from 'react';
import React from 'react';
import {CompoNav} from './components/Navbar';
import { Kabkota } from "./components/Kabkota";
import { Map } from "./components/Map"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeojsonList from './components/GeojsonList';
import EditGeojson from './components/EditGeojson';
import axios from 'axios';

const App = () => {

  const [geojsonData, setGeojsonData] = useState([]);
  const [geojsons, setGeojsonsData] = useState([]);
  const position = [0.6983401876466915, 122.4488921294734];

  const fetchGeojsonData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/geojsons');
      setGeojsonData(response.data);
      setGeojsonsData(response.data);
    } catch (error) {
      console.error('Error fetching GeoJSON data:', error);
    }
  };

  useEffect(() => {
    fetchGeojsonData();
  }, []);

  // const onEachFeature = (feature, layer) => {
  //   if (feature.properties.NAMOBJ) {
  //     const popupContent = `
  //       <strong>Area Name : </strong>${feature.properties.NAMOBJ}<br/>
  //     `;
  //     layer.bindPopup(popupContent);
  //   }
  // };

  return (
  <>
  <Router>
  <CompoNav/>
      <Routes>
        <Route path="/" element={<>
        <Map geojsonData={geojsonData} geojsons={geojsons} setGeojsonData={setGeojsonData} position={position} fetchGeojsonData={fetchGeojsonData} />
        <Kabkota fetchGeojsonData={fetchGeojsonData} />
        <GeojsonList geojsons={geojsons} fetchGeojsonData={fetchGeojsonData}/>
        <EditGeojson geojsons={geojsons} fetchGeojsonData={fetchGeojsonData}/>
        </>} />
      </Routes>
    </Router>
  </>
  );
};

export default App;
