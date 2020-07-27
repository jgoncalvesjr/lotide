// Transferred manual test content from original file

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const users = {
  zbxN3: 'Zofia Mcdougall',
  Ff3dc: 'Anisha Franco',
  AaCf3: 'Colin Lam',
  X63ef: 'Ozan Robbins',
  RfErt: 'Doug Velez',
};

console.log(findKeyByValue(bestTVShowsByGenre, 'The Wire'));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

console.log(findKeyByValue(users, 'Ozan Robbins'));
console.log(assertEqual(findKeyByValue(users, "Ozan Robbins"), 'X63ef'));
console.log(assertEqual(findKeyByValue(users, "Joao Goncalves Jr"), undefined));