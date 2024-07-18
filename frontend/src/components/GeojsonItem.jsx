import axios from 'axios';

const GeojsonItem = ({ geojsons, fetchGeojsonData }) => {

  const handleDelete = async (geojsonId) => {
    try {
      await axios.delete(`http://localhost:5000/api/geojsons/${geojsonId}`);
      fetchGeojsonData();
    } catch (err) {
      console.error('Error deleting Geojson:', err.message); // Logging the error message
    }
  };

  return (
    <div className="h-96 overflow-x-auto px-5">
      <table className="table table-pin-rows">
        <thead>
          <tr>
            <td>Nama</td>
            <td>Tipe</td>
            <td>Aksi</td>
          </tr>
        </thead>
        <tbody>
          {geojsons.map((geojson) => (
            <tr key={geojson._id}>
              <td>
                <div className="flex items-center space-x-4">
                  <div className="min-w-1 flex-1">
                    <h2>{geojson.properties.NAMOBJ}</h2>
                  </div>
                </div>
              </td>
              <td>{geojson.geometry.type}</td>
              <td>
                <button onClick={() => handleDelete(geojson._id)} className='btn btn-error btn-sm'>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GeojsonItem;
