const assertEqual = (actual, expected) => {
  const nay = String.fromCodePoint(0x1F62D);
  const yea = String.fromCodePoint(0x1F389);
  if (actual === expected) {
    return `${yea}${yea}${yea} Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `${nay}${nay}${nay} Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKeyByValue = (obj, value) => {
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      if (obj[i] === value) {
        return i;
      }
    }
  }
};

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