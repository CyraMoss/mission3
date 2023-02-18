const express = require('express');
const quoteController = require('../controllers/getQuoteController');

const router = express.Router();

router.post('/', quoteController);

module.exports = router;
