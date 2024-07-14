const mongoose = require('mongoose');

const AssistanceSchema = new mongoose.Schema({
  name: String,
  address: String,
  coordinates: {
    lat: Number,
    lng: Number
  },
  assistanceType: String,
  status: String
});

module.exports = mongoose.model('Assistance', AssistanceSchema);
