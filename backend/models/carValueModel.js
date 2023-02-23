const mongoose = require('mongoose');

const carValueSchema = new mongoose.Schema({
  carModel: String,
  carYear: Number,
  carValue: Number,
});

module.exports = mongoose.model('CarValue', carValueSchema);
