import { useEffect, useState } from 'react';
import React from 'react';
import { CompoNav } from './components/Navbar';
import { InputForm } from "./components/InputForm";
import { Map } from "./components/Map"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GeojsonList from './components/GeojsonList';
import EditGeojson from './components/EditGeojson';
import axios from 'axios';
import { CompFoot } from './components/Footer';
import { Card } from './components/Card';

const App = () => {
  const [geojsons, setGeojsons] = useState([]);
  const position = [0.6983401876466915, 122.4488921294734];

  const fetchGeojsonData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/geojsons');
      setGeojsons(response.data);
    } catch (error) {
      console.error('Error fetching GeoJSON data:', error);
    }
  };

  useEffect(() => {
    fetchGeojsonData();
  }, []);

  return (
    <>
      <CompoNav />
      <div className='px-5'>
        <Map geojsons={geojsons} position={position} />
      </div>
      <div className="flex flex-col gap-10 mt-7 px-5 md:flex-row md:gap-5">
        <Card><InputForm fetchGeojsonData={fetchGeojsonData} /></Card>
        <Card><EditGeojson geojsons={geojsons} setGeojsons={setGeojsons} /></Card>
        <GeojsonList geojsons={geojsons} fetchGeojsonData={fetchGeojsonData} />
      </div>
      <div className="mt-10">
        <CompFoot />
      </div>
    </>
  );
};

export default App;
