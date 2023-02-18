const quoteModel = require('../models/quoteModel');

function quoteController(req, res) {
  const { value, rating } = req.body;

  let quote = quoteModel.calculateQuote(value, rating);

  const response = { quote };

  res.json(response);
}

module.exports = quoteController;
