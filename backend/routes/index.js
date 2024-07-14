const express = require('express');
const Assistance = require('../models/Assistance');
const Geojson = require('../models/Polygon');
const router = express.Router();

router.get('/polygons', async (req, res) => {
  try {
    const polygons = await Polygon.find();
    res.status(200).json(polygons);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching polygons', error });
  }
});

router.get('/assistances', async (req, res) => {
  const assistances = await Assistance.find();
  res.json(assistances);
});

router.post('/assistances', async (req, res) => {
  const assistance = new Assistance(req.body);
  await assistance.save();
  res.json(assistance);
});

router.put('/assistances/:id', async (req, res) => {
  const assistance = await Assistance.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(assistance);
});

router.delete('/assistances/:id', async (req, res) => {
  await Assistance.findByIdAndDelete(req.params.id);
  res.json({ message: 'Assistance deleted' });
});

module.exports = router;
