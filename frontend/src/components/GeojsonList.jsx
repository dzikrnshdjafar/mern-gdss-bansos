import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from 'flowbite-react';
import GeojsonItem from './GeojsonItem';

const GeojsonList = ({ geojsons, fetchGeojsonData }) => {
  // const [geojsons, setGeojsons] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:5000/api/geojsons')
  //     .then(response => setGeojsons(response.data))
  //     .catch(error => console.error('Error fetching Geojsons:', error));
  // }, []);

  // const getGeojsonName = (geojson) => {
  //   return geojson.properties.NAMOBJ || 'Unnamed GeoJSON';
  // };

  // const deleteGeojson = (id) => {
  //   axios.delete(`http://localhost:5000/api/geojsons/${id}`)
  //     .then(response => {
  //       if (response.status === 200) {
  //         setGeojsons(geojsons.filter(geojson => geojson._id !== id));
  //       } else {
  //         console.error('Failed to delete geojson:', response.status);
  //       }
  //     })
  //     .catch(error => console.error('Error deleting Geojson:', error));
  // };

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`http://localhost:5000/api/todos/${todo._id}`);
  //     fetchTodos();
  //   } catch (err) {
  //     console.error('Error deleting todo:', err.message); // Logging the error message
  //   }
  // };
  

  // const deleteLocalGeojsonName = (index) => {
  //   // Hapus dari database jika ID tersedia di `geojsonNames`
  //   const nameToDelete = geojsonNames[index];
  //   const geojsonToDelete = geojsons.find(geojson => getGeojsonName(geojson) === nameToDelete);

  //   if (geojsonToDelete) {
  //     deleteGeojson(geojsonToDelete._id);
  //   }

  //   // Hapus dari state local
  //   setGeojsonNames(prevGeojsonNames => prevGeojsonNames.filter((_, i) => i !== index));

  return (
    <div>
      <Card className="max-w-sm">
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">List Geojson</h5>
          <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
            View all
          </a>
        </div>
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {geojsons.map((geojson) => (
            <li className="py-3 sm:py-4" key={geojson._id}>
              <GeojsonItem geojson={geojson} fetchGeojsonData={fetchGeojsonData}/>
            </li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  );
};

export default GeojsonList;
