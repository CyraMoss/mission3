const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const date = new Date();
let year = date.getFullYear();

function convertToNumbers(carmodel) {
  let encrypted = 0;
  if (carmodel === 'string') {
    carmodel = carmodel.toLowerCase();
  }

  // Check if car model is a string
  if (typeof carmodel !== 'string') {
    throw new Error('Invalid carmodel');
  }

  for (let j = 0; j < carmodel.length; j++) {
    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet[i] === carmodel[j]) {
        encrypted += i + 1;
      }
    }
  }

  return encrypted;
}

function validateYear(caryear, year) {
  // Check if car year is a number
  if (typeof caryear !== 'number') {
    throw new Error('Invalid vehicle year!');
  }

  // Throw error if car year is more than current year
  if (caryear > year) {
    throw new Error('Vehicle year too high!');
  }

  return true;
}

module.exports = {
  convertToNumbers,
  validateYear,
};
