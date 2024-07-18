import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = ({ geojsons, position }) => {
  return (
    <div className="card bg-base-100 w-500 shadow-xl">
      <figure className="px-3 pt-2">
        <MapContainer
          center={position}
          zoom={10}
          style={{
            height: '50vh', // Default height for mobile
            width: '100%',
            maxWidth: '100%',
            zIndex: '0'
          }}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {geojsons.map((geojson, index) => (
            <GeoJSON key={index} data={geojson}>
              <Popup>{geojson.properties.NAMOBJ}</Popup>
            </GeoJSON>
          ))}
        </MapContainer>
      </figure>
      <div className="card-body items-center text-center"></div>
    </div>
  );
};
