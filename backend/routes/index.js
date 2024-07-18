const express = require('express');
const router = express.Router();
const assistanceController = require('../controllers/assistanceController');
const geojsonController = require('../controllers/geojsonController');

// router.get('/assistances', assistanceController.getAssistances);
// router.post('/assistances', assistanceController.createAssistance);
// router.put('/assistances/:id', assistanceController.updateAssistance);
// router.delete('/assistances/:id', assistanceController.deleteAssistance);

router.get('/geojsons', geojsonController.getGeojsons);
router.post('/geojsons', geojsonController.createGeojson);
router.put('/geojsons/:id', geojsonController.updateGeojson);
router.delete('/geojsons/:id', geojsonController.deleteGeojson);

module.exports = router;
