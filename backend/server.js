const express = require('express');
const bodyParser = require('body-parser');
const valueRoute = require('./routes/valueRoute');
const carValueRoute = require('./routes/carValueRoute');
const riskRoute = require('./routes/riskRoute');
const quoteRoute = require('./routes/quoteRoute');
const env = require('dotenv');
env.config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

async function connectToDB() {
  try {
    await mongoose.connect(
      'mongodb+srv://kyraagrace:1vFmoGVbBDAoHdl0@cluster0.mkxui.mongodb.net/?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB', err);
  }
}

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

module.exports = { connectToDB, server };
