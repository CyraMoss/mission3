function calculateQuote(value, rating) {
  //check if value or rating is valid
  if (!value || !rating) {
    throw new Error('value and rating needed');
  }

  //check rating is less than 5
  if (rating > 5) {
    throw new Error('rating too high');
  }

  // check value and rating is number
  if (isNaN(value)) {
    throw new Error('value must be a number');
  }
  if (isNaN(rating)) {
    throw new Error('rating must be a number');
  }

  let yearly = (value * rating) / 100;
  let monthly = yearly / 12;
  return {
    //make sure result is only 2 decimals
    yearly: Number(yearly.toFixed(2)),
    monthly: Number(monthly.toFixed(2)),
  };
}

module.exports = {
  calculateQuote,
};
