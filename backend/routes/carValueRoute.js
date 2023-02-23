const express = require('express');
const router = express.Router();
const CarValue = require('../models/valueModel');

router.post('/', async (req, res, next) => {
  try {
    const { carModel, carYear, carValue } = req.body;
    const newCarValue = new CarValue({ carModel, carYear, carValue });
    await newCarValue.save();
    res.status(200).json({ message: 'Car value saved to database' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
