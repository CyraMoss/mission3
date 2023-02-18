const carModel = require('../models/valueModel');
const date = new Date();
let year = date.getFullYear();

function valueController(req, res) {
  let { carmodel, caryear } = req.body;

  try {
    // Convert the string to numbers using the A1Z26 cipher
    let encrypted = carModel.convertToNumbers(carmodel);

    // Check if car year is valid
    if (!carModel.validateYear(caryear, year)) {
      res.status(400).send('Invalid vehicle year!');
      return;
    }

    const result = encrypted * 100 + caryear;
    const response = { result };

    res.json(response);
  } catch (err) {
    console.error('Error processing request:', err);
    res.status(400).send('Error processing request');
  }
}

module.exports = valueController;
