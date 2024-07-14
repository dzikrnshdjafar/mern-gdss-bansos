const mongoose = require('mongoose');

const PolygonSchema = new mongoose.Schema({
  type: { type: String, required: true },
  features: { type: Array, required: true }
});

module.exports = mongoose.model('Polygon', PolygonSchema);
