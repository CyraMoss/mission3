// Define the keywords to search for
const KEYWORDS = ['crash', 'scratch', 'collide', 'bump', 'smash'];

function searchKeywords(input) {
  //check if input is valid
  if (!input) {
    throw new Error('Input text is required');
  }

  const regex = new RegExp(KEYWORDS.join('|'), 'gi');

  //returns 1 if no keywords are found
  const matches = input.match(regex);
  if (!matches) {
    return 1;
  }

  //check if input is too long
  if (input.length > 250) {
    throw new Error('Input text must be 250 characters or less');
  }

  let totalCount = 0;
  matches.forEach((match) => {
    const keyword = match.toLowerCase();
    if (KEYWORDS.includes(keyword)) {
      //make sure rating dosent go higher than 5
      if (totalCount < 5) {
        totalCount++;
      } else {
        return;
      }
    }
  });
  return totalCount;
}

module.exports = {
  searchKeywords,
};
