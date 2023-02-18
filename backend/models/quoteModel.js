function calculateQuote(value, rating) {
  let yearly = (value * rating) / 100;
  let monthly = yearly / 12;
  return {
    yearly: Number(yearly.toFixed(2)),
    monthly: Number(monthly.toFixed(2)),
  };
}

module.exports = {
  calculateQuote,
};
