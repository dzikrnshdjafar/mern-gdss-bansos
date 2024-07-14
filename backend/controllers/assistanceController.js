const Assistance = require('../models/Assistance');

exports.getAssistances = async (req, res) => {
  try {
    const assistances = await Assistance.find();
    res.json(assistances);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching assistances', error });
  }
};

exports.createAssistance = async (req, res) => {
  try {
    const assistance = new Assistance(req.body);
    await assistance.save();
    res.status(201).json(assistance);
  } catch (error) {
    res.status(500).json({ message: 'Error creating assistance', error });
  }
};

exports.updateAssistance = async (req, res) => {
  try {
    const assistance = await Assistance.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(assistance);
  } catch (error) {
    res.status(500).json({ message: 'Error updating assistance', error });
  }
};

exports.deleteAssistance = async (req, res) => {
  try {
    await Assistance.findByIdAndDelete(req.params.id);
    res.json({ message: 'Assistance deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting assistance', error });
  }
};
