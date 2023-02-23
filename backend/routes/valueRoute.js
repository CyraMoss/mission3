const express = require('express');
const router = express.Router();
const CarValue = require('../models/carValueModel');
const { validateYear, convertToNumbers } = require('../models/valueModel');
const getValueController = require('../controllers/getValueController');

router.post('/', async (req, res) => {
  try {
    const carModel = req.body.carmodel;
    const carYear = req.body.caryear;
    const currentYear = new Date().getFullYear();
    validateYear(carYear, currentYear);
    const addValue = convertToNumbers(carModel) * 100 + carYear;
    const carValue = addValue;
    const newCarValue = new CarValue({
      carModel,
      carYear,
      carValue,
    });
    await newCarValue.save();
    res.json({ carvalue: carValue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
