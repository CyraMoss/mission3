const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Define the keywords to search for
const keywords = ['crash', 'scratch', 'collide', 'bump', 'smash'];

// Create a middleware to parse the request body
app.use(bodyParser.json());

// Define a POST endpoint to calculate the risk rating
app.post('/get-risk-rating', (req, res) => {
  // Get the input text from the request body
  const { input } = req.body;

  // Create a regular expression to search for the keywords
  const regex = new RegExp(keywords.join('|'), 'gi');

  // Count the number of times each keyword appears in the input text
  let totalCount = 0;
  input.match(regex).forEach((match) => {
    const keyword = match.toLowerCase();
    if (keywords.includes(keyword)) {
      totalCount++;
    }
  });

  // Return the total count as the risk rating
  const riskRating = totalCount;
  res.send({ riskRating });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
