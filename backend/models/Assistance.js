const mongoose = require('mongoose');

const assistanceSchema = new mongoose.Schema({
  // Definisi schema untuk Assistance
  // Contoh:
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Tambahkan sesuai kebutuhan
});

module.exports = mongoose.model('Assistance', assistanceSchema);
