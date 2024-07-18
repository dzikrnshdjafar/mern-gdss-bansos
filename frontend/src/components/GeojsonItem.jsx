import axios from 'axios';
import {Button} from 'flowbite-react'

const GeojsonItem = ({ geojson, fetchGeojsonData }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/geojsons/${geojson._id}`);
      fetchGeojsonData();
    } catch (err) {
      console.error('Error deleting Geojson:', err.message); // Logging the error message
    }
  };

  const handleToggleComplete = async () => {
    try {
      await axios.put(`http://localhost:5000/api/geojsons/${geojson._id}`, {
        ...geojson,
      });
      fetchGeojsonData();
    } catch (err) {
      console.error('Error toggling geojson complete:', err.message); // Logging the error message
    }
  };

  return (
    
        <div className="flex items-center space-x-4">
              <div className="min-w-0 flex-1">
                <h>{geojson.properties.NAMOBJ}</h>
              </div>
              <button onClick={handleDelete} className='btn btn-error'>
                Delete
              </button>
            </div>
  );
};

export default GeojsonItem;
