

import { MapContainer, TileLayer, GeoJSON, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export const Map = ({geojsonData, position, onEachFeature, fetchGeojsonData}) => {

  // const geo = [{"type":"FeatureCollectionsss","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[[122.72720928803494,0.6606248132358843],[122.712432029012,0.5545075334035516],[122.88346339311482,0.5987297176713753],[122.85407743657214,0.7107271729178422],[122.72720928803494,0.6606248132358843]]],"type":"Polygon"}}]}, {"type":"FeatureCollectiowween","features":[{"type":"Feature","properties":{},"geometry":{"coordinates":[[[123.46918013563544,0.7901740350592661],[123.24153715045253,0.6873353850570112],[123.22189896497252,0.5191901058381916],[123.25433625414968,0.4042964589824578],[123.48032987814764,0.354654376842376],[123.6422466134108,0.3634682779043743],[123.73712564827775,0.7165611417108693],[123.46918013563544,0.7901740350592661]]],"type":"Polygon"}}]}]


  return (
    <div>
      <MapContainer center={position} zoom={10} style={{ height: '70vh', width: '200vh' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {geojsonData.map((geojson, index) => (
      <GeoJSON key={index} data={geojson}>
        <Popup>
          {geojson.properties.NAMOBJ}
            {/* {geojson.properties.map((properties, propertiesIndex) => (
          <div>
              <div key={propertiesIndex}>

                Coordinates: {properties.NAMOBJ}
              </div>
          </div>
            ))} */}
        </Popup>
      </GeoJSON>
      ))}
      </MapContainer>
    </div>
  );
};

