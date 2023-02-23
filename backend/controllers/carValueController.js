const CarModel = require('../models/carValueModel');

exports.createCar = (req, res, next) => {
  const { carModel, carYear } = req.body;

  const newCar = new CarModel({
    carModel,
    carYear,
  });

  newCar.save((err) => {
    if (err) {
      return next(err);
    }
    res.status(201).json({ message: 'Car created successfully' });
  });
};
