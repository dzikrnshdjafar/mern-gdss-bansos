const mongoose = require('mongoose');

const geojsonSchema = new mongoose.Schema({
  // Definisi schema untuk Geojson
  // Contoh:
  type: { type: String, default: 'Feature' },
  properties: {
    name: { type: String, required: true },
    description: { type: String },
  },
  geometry: {
    type: { type: String, default: 'Polygon' },
    coordinates: { type: [[[Number]]], required: true },
  },
});

module.exports = mongoose.model('Geojson', geojsonSchema);
