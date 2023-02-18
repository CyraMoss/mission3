const express = require('express');
const bodyParser = require('body-parser');
const valueRoute = require('./routes/valueRoute');
const riskRoute = require('./routes/riskRoute');
const quoteRoute = require('./routes/quoteRoute');
const env = require('dotenv');
env.config();

const app = express();
const PORT = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//value endpoint
app.use('/api/get-value', valueRoute);

//Risk Rating endpoint
app.use('/api/get-rating', riskRoute);

//Quote Endpoint
app.use('/api/get-quote', quoteRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port`, PORT);
});

module.exports = server;
