const Polygon = require('../models/Polygon');

exports.getPolygons = async (req, res) => {
    try {
      const polygons = await Polygon.find();
      res.status(200).json(polygons);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching polygons', error });
    }
  };