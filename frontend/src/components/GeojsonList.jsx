import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GeojsonList = () => {
    const [geojsons, setGeojsons] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/geojson')
            .then(response => {
                setGeojsons(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the GeoJSON data!', error);
            });
    }, []);

    return (
        <div>
            <h1>GeoJSON List</h1>
            <ul>
                {geojsons.map(geojson => (
                    <li key={geojson._id}>{geojson.type}</li>
                ))}
            </ul>
        </div>
    );
};


export default GeojsonList;
