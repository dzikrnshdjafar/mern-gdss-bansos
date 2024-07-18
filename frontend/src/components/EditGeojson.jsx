import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditGeojson = () => {
  const [geojsons, setGeojsons] = useState([]);
  const [selectedGeojson, setSelectedGeojson] = useState(null);
  const [name, setName] = useState('');
  const [luas, setLuas] = useState(''); // Tambahkan state untuk LUAS
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const geojsonId = queryParams.get('id');

  useEffect(() => {
    axios.get('http://localhost:5000/api/geojsons')
      .then(response => {
        setGeojsons(response.data);
        if (geojsonId) {
          const geojson = response.data.find(g => g._id === geojsonId);
          setSelectedGeojson(geojson);
          setName(geojson?.properties.NAMOBJ || ''); // Menggunakan NAMOBJ sebagai nama
          setLuas(geojson?.properties.LUAS || ''); // Menggunakan LUAS
        }
      })
      .catch(error => console.error('Error fetching Geojsons:', error));
  }, [geojsonId]);

  const handleGeojsonChange = (e) => {
    const selectedId = e.target.value;
    const geojson = geojsons.find(g => g._id === selectedId);
    setSelectedGeojson(geojson);
    setName(geojson?.properties.NAMOBJ || ''); // Menggunakan NAMOBJ sebagai nama
    setLuas(geojson?.properties.LUAS || ''); // Menggunakan LUAS
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedGeojson) return;

    axios.put(`http://localhost:5000/api/geojsons/${selectedGeojson._id}`, {
      properties: { ...selectedGeojson.properties, NAMOBJ: name, LUAS: luas }, // Sertakan LUAS
    })
      .then(() => {
        alert('Geojson updated successfully!');
        navigate('/');
      })
      .catch(error => {
        console.error('Error updating Geojson:', error);
        alert('Error updating Geojson.');
      });
  };

  return (
    <div>
      <h2>Edit Geojson</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Geojson:</label>
          <select value={selectedGeojson?._id || ''} onChange={handleGeojsonChange}>
            <option value="">Select a Geojson</option>
            {geojsons.map(geojson => (
              <option key={geojson._id} value={geojson._id}>
                {geojson.properties.NAMOBJ || 'Unnamed GeoJSON'} {/* Menggunakan NAMOBJ sebagai nama */}
              </option>
            ))}
          </select>
        </div>
        {selectedGeojson && (
          <>
            <div>
              <label>Geojson Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Geojson LUAS:</label>
              <input
                type="text"
                value={luas}
                onChange={(e) => setLuas(e.target.value)}
              />
            </div>
          </>
        )}
        <button type="submit" disabled={!selectedGeojson}>Update</button>
      </form>
    </div>
  );
};

export default EditGeojson;
