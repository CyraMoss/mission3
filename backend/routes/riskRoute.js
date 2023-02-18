const express = require('express');
const ratingController = require('../controllers/getRatingController');

const router = express.Router();

router.post('/', ratingController);

module.exports = router;
