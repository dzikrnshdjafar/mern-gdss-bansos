import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditGeojson = ({geojsons, setGeojsons}) => {
  const [selectedGeojson, setSelectedGeojson] = useState(null);
  const [name, setName] = useState('');
  const [luas, setLuas] = useState('');
  const queryParams = new URLSearchParams(location.search);
  const geojsonId = queryParams.get('id');

  useEffect(() => {
    axios.get('http://localhost:5000/api/geojsons')
      .then(response => {
        setGeojsons(response.data);
        if (geojsonId) {
          const geojson = response.data.find(g => g._id === geojsonId);
          setSelectedGeojson(geojson);
          setName(geojson?.properties.NAMOBJ || '');
          setLuas(geojson?.properties.LUAS || '');
        }
      })
      .catch(error => console.error('Error fetching Geojsons:', error));
  }, [geojsonId]);

  const handleGeojsonChange = (e) => {
    const selectedId = e.target.value;
    const geojson = geojsons.find(g => g._id === selectedId);
    setSelectedGeojson(geojson);
    setName(geojson?.properties.NAMOBJ || '');
    setLuas(geojson?.properties.LUAS || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedGeojson) return;

    axios.put(`http://localhost:5000/api/geojsons/${selectedGeojson._id}`, {
      properties: { ...selectedGeojson.properties, NAMOBJ: name, LUAS: luas },
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
    <>
          <h1><strong>Edit Geojson</strong></h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pilih Geojson</label>
          <select className="select select-accent w-full max-w-xs mt-1" value={selectedGeojson?._id || ''} onChange={handleGeojsonChange}>
            <option disabled value="">Pilih Geojson</option>
            {geojsons.map(geojson => (
              <option key={geojson._id} value={geojson._id}>
                {geojson.properties.NAMOBJ || 'Unnamed GeoJSON'}
              </option>
            ))}
          </select>
        </div>
        {selectedGeojson && (
          <>
            <div className='mt-2'>
              <label>Nama Geojson</label>
              <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mb-4 mt-1"
                value={name} required
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
              <label>Input Luas Wilayah</label>
              <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs mb-4 mt-1"
                value={luas} required
                onChange={(e) => setLuas(e.target.value)}
                />
            </div>
          </>
        )}
          <div className="card-actions justify-end">
        <button type="submit" className='btn btn-warning' disabled={!selectedGeojson}>Update</button>
    </div>
      </form>
        </>

  );
};

export default EditGeojson;
