const express = require('express');
const valueController = require('../controllers/getValueController');

const router = express.Router();

router.post('/', valueController);

module.exports = router;
