import React, { useState } from 'react';
import GeojsonItem from './GeojsonItem';
import Pagination from './Pagination';

const GeojsonList = ({ geojsons, fetchGeojsonData }) => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const itemsPerPage = 5;

  // // Calculate the data for the current page
  // const indexOfLastItem = currentPage * itemsPerPage;
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = geojsons.slice(indexOfFirstItem, indexOfLastItem);


  // // Calculate total pages
  // const totalPages = Math.ceil(geojsons.length / itemsPerPage);



  return (

      <div className="card bg-accent text-accent-content md:w-96">
        <div className="card-body text-center">
          <h2 className="card-title">List Geojson</h2>
        </div>
          <div className="px-5">
  {/* <table className="table table-pin-rows">
  <thead>
      <tr>
        <th>Nama</th>
        <th>Aksi</th>
        <td>Name</td>
        <td>Job</td>
        <td>company</td>
        <td>location</td>
        <td>Last Login</td>
        <td>Favorite Color</td>
        <th></th>
      </tr>
    </thead>
    <tbody>
    {geojsons.map((geojson) => (
      <tr key={geojson._id}><td> */}
        <GeojsonItem geojsons={geojsons} fetchGeojsonData={fetchGeojsonData} />
        {/* </td></tr>
    ))}
    </tbody>
  </table> */}
</div>
</div>         

  );
};

export default GeojsonList;
