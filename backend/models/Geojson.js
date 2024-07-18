const mongoose = require('mongoose');

const GeojsonSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Feature'],
    required: true
  },
  geometry: {
    type: {
      type: String,
      enum: ['Point', 'LineString', 'Polygon', 'MultiPoint', 'MultiLineString', 'MultiPolygon', 'GeometryCollection'],
      required: true
    },
    coordinates: {
      type: mongoose.Schema.Types.Mixed, // Allows for an array of numbers or nested arrays
      required: true
    }
  },
  properties: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, { strict: false });

module.exports = mongoose.model('Geojson', GeojsonSchema);
