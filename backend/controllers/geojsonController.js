const Geojson = require('../models/Geojson');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const upload = multer({ dest: 'uploads/' });

exports.getGeojsons = async (req, res) => {
  try {
    const geojsons = await Geojson.find();
    res.json(geojsons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Geojsons', error });
  }
};

exports.createGeojson = [
  upload.single('geojson'),
  async (req, res) => {
    try {
      const { NAMOBJ } = req.body;
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }

      const geojsonFilePath = path.join(__dirname, '../uploads', req.file.filename);
      const data = fs.readFileSync(geojsonFilePath, 'utf8');
      const geojsonData = JSON.parse(data);

      if (geojsonData.type !== 'FeatureCollection' || !Array.isArray(geojsonData.features)) {
        return res.status(400).json({ message: 'Invalid GeoJSON file' });
      }

      // Tambahkan NAMOBJ pada setiap fitur GeoJSON
      for (const feature of geojsonData.features) {
        feature.properties.NAMOBJ = NAMOBJ;
      }

      // Simpan setiap fitur dari GeoJSON ke dalam database
      const results = [];
      for (const feature of geojsonData.features) {
        const geojson = new Geojson(feature);
        const result = await geojson.save();
        results.push(result);
      }

      res.status(201).json(results);
    } catch (error) {
      console.error('Error creating Geojson:', error);
      res.status(500).json({ message: 'Error creating Geojson', error });
    } finally {
      // Delete the temporary file
      if (req.file) {
        fs.unlink(path.join(__dirname, '../uploads', req.file.filename), (err) => {
          if (err) console.error('Failed to delete temporary file', err);
        });
      }
    }
  }
];

exports.updateGeojson = async (req, res) => {
  try {
    const geojson = await Geojson.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(geojson);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Geojson', error });
  }
};

exports.deleteGeojson = async (req, res) => {
  try {
    await Geojson.findByIdAndDelete(req.params.id);
    res.json({ message: 'Geojson deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Geojson', error });
  }
};
