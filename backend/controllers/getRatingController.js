const ratingModel = require('../models/ratingModel');

function ratingController(req, res) {
  const { input } = req.body;

  let rating = ratingModel.searchKeywords(input);

  const response = { rating };

  res.json(response);
}

module.exports = ratingController;
