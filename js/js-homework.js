const message = 'JS - start';

console.log(message);

// ---------------------------------- Module 001 Task 013
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }
// console.log(isAdult(22));

// ---------------------------------- Module 001 Task 014
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }
// console.log(isValidPassword('jqueryismyjam'));
// ---------------------------------- Module 001 Task 015
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }
// console.log(checkAge(10));

// ---------------------------------- Module 001 Task 016

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered <= available) {
//     message = 'Order is processed, our manager will contact you.';
//   } else {
//     message = 'Not enough goods in stock!';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(101, 104));
// ---------------------------------- Module 001 Task 017
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// console.log(a);

// console.log(b);
// console.log(c);
// console.log(d);
// ---------------------------------- Module 001 Task 018
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   const totalPrice = pricePerDroid * orderedQuantity;
//   if (totalPrice > customerCredits) {
//     message = 'Insufficient funds!';
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have  ${
//       customerCredits - totalPrice
//     } credits left`;
//   }

//   // Change code above this line
//   return message;
// }

// console.log(makeTransaction(500, 10, 5000));
// console.log(makeTransaction(1500, 10, 5000));
// ---------------------------------- Module 001 Task 019
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }
// console.log(checkPassword(null));
// console.log(checkPassword('12345'));
// console.log(checkPassword('jqueryismyjam'));
// ---------------------------------- Module 001 Task 020
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 0) {
//     message = 'There are no products in the order!';
//   } else {
//     if (ordered > available) {
//       message = 'Your order is too large, there are not enough items in stock!';
//     } else {
//       message = 'The order is accepted, our manager will contact you';
//     }
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(500, 100));
// console.log(checkStorage(500, 0));
// console.log(checkStorage(500, 1000));
// ---------------------------------- Module 001 Task 021
// function isNumberInRange(start, end, number) {
//   const isInRange = number > start && number < end; // Change this line

//   return isInRange;
// }
// console.log(isNumberInRange(10, 500, 100));
// ---------------------------------- Module 001 Task 022
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType == 'vip'; // Change this line

//   return canAccessContent;
// }
// console.log(checkIfCanAccessContent('user'));
// console.log(checkIfCanAccessContent('pro'));
// ---------------------------------- Module 001 Task 023
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange; // Change this line

//   return isNotInRange;
// }
// console.log(isNumberNotInRange(1, 100, 20));

// ---------------------------------- Module 001 Task 024
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     discount = GOLD_DISCOUNT;
//   } else {
//     if (totalSpent >= 20000) {
//       discount = SILVER_DISCOUNT;
//     } else {
//       if (totalSpent >= 5000) {
//         discount = BRONZE_DISCOUNT;
//       } else {
//         discount = BASE_DISCOUNT;
//       }
//     }
//   }
//   // Change code above this line
//   return discount;
// }
// console.log(getDiscount(1000));
// ---------------------------------- Module 001 Task 025
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }
// console.log(checkStorage(10, 100));
// ---------------------------------- Module 001 Task 026
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     password === ADMIN_PASSWORD
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }

// console.log(checkPassword('22222'));
// console.log(checkPassword('jqueryismyjam'));
// ---------------------------------- Module 001 Task 027
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }
// console.log(getSubscriptionPrice('professional'));
// ---------------------------------- Module 001 Task 028
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }
// console.log(checkPassword('jqueryismyjam'));
// ---------------------------------- Module 001 Task 029
// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'China':
//       message = 'Shipping to China will cost 100 credits';
//       break;
//     case 'Chile':
//       message = 'Shipping to Chile will cost 250 credits';
//       break;
//     case 'Australia':
//       message = 'Shipping to Australia will cost 170 credits';
//       break;
//     case 'Jamaica':
//       message = 'Shipping to Jamaica will cost 120 credits';
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }
// console.log(getShippingCost('USSR'));
// ---------------------------------- Module 001 Task 030
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line
//   return message;
// }
// console.log(getNameLength('1234567890'));
// console.log(getNameLength(''));
// ---------------------------------- Module 001 Task 031
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // Change code above this line
// console.log(courseTopic);
// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// ---------------------------------- Module 001 Task 032
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }
// console.log(getSubstring('1234567890', 1));
// ---------------------------------- Module 001 Task 033
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   result =
//     message.length > maxLength ? message.slice(0, maxLength) + '...' : message;
//   /// Change code above this line
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16));
// ---------------------------------- Module 001 Task 034
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }
// console.log(normalizeInput('QAWSEDrftgyhUJIKOL'));
// ---------------------------------- Module 001 Task 035
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }
// console.log(checkForName('John Smith', 'Smith'));
// ---------------------------------- Module 001 Task 036
// function checkForSpam(message) {
//   let result;
//   // Change code below this line

//   result =
//     message.toLowerCase().includes('spam') ||
//     message.toLowerCase().includes('sale');
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam('qwertyuiop Sale'));

// ---------------------------------- Module 002 Task 001
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }
// console.log(checkAge(4));
// ---------------------------------- Module 002 Task 002
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';

//   // Change code above this line
// }
// console.log(checkPassword('12345'));
// console.log(checkPassword('jqueryismyjam'));
// ---------------------------------- Module 002 Task 003
// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) return 'Your order is empty!';
//   if (ordered > available)
//     return 'Your order is too large, not enough goods in stock!';

//   return 'The order is accepted, our manager will contact you';
//   // Change code above this line
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 220));
// console.log(checkStorage(150, 0));
// ---------------------------------- Module 002 Task 004
// Change code below this line
// const fruits = ['apple', 'plum', 'pear', 'orange'];
// console.log(fruits);
// ---------------------------------- Module 002 Task 005
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// ---------------------------------- Module 002 Task 006
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // Write your code under this line
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// ---------------------------------- Module 002 Task 007
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line
// const fruitsArrayLength = fruits.length;
// console.log(fruitsArrayLength);
// ---------------------------------- Module 002 Task 008
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// console.log(lastElement);
// ---------------------------------- Module 002 Task 009
// function getExtremeElements(array) {
//   // Change code below this line
//   return [array[0], array[array.length - 1]];

//   // Change code above this line
// }
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));
// ---------------------------------- Module 002 Task 010
// function splitMessage(message, delimeter) {
//   let words;
//   // Change code below this line
//   words = message.split(delimeter);
//   // Change code above this line
//   return words;
// }
// console.log(splitMessage('Mango hurries to the train', ' '));
// ---------------------------------- Module 002 Task 011
// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line
//   return message.split(' ').length * pricePerWord;

//   // Change code above this line
// }
// console.log(calculateEngravingPrice('1 2 3 4 5 6 7 8 9 0', 40));
// console.log(calculateEngravingPrice('Web-development is creative work', 40));
// ---------------------------------- Module 002 Task 012
// function makeStringFromArray(array, delimeter) {
//   let string;
//   // Change code below this line
//   string = array.join(delimeter);

//   // Change code above this line
//   return string;
// }
// console.log(makeStringFromArray(['top', 'picks', 'for', 'you'], '_'));
// ---------------------------------- Module 002 Task 013
// function slugify(title) {
//   // Change code below this line
//   return title.split(' ').join('-').toLowerCase();

//   // Change code above this line
// }
// console.log(slugify('Ten secrets of JavaScript'));
// ---------------------------------- Module 002 Task 014
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, fruits.length - 1);
// const lastThreeEls = fruits.slice(-3);
// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// ---------------------------------- Module 002 Task 015
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);
// ---------------------------------- Module 002 Task 016
// function makeArray(firstArray, secondArray, maxLength) {
//   return firstArray.concat(secondArray).slice(0, maxLength);
// }
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4));
// ---------------------------------- Module 002 Task 017
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Change this line
//   console.log(i);
// }
// ---------------------------------- Module 002 Task 018
// function calculateTotal(number) {
//   // Change code below this line
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
//   // Change code above this line
// }
// console.log(calculateTotal(22));
// ---------------------------------- Module 002 Task 019
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
// ---------------------------------- Module 002 Task 020
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//   for (const index of order) {
//     total += index;
//   }
//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// ---------------------------------- Module 002 Task 021
// function findLongestWord(string) {
//   // Change code below this line
//   let array = string.split(' ');
//   let longestWord = array[0];
//   for (const index of array) {
//     if (index.length > longestWord.length) {
//       longestWord = index;
//     }
//   }
//   return longestWord;

//   // Change code above this line
// }
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ---------------------------------- Module 002 Task 022
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Change code above this line
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));
// ---------------------------------- Module 002 Task 023
// function filterArray(numbers, value) {
//   // Change code below this line
//   let array = [];
//   for (const index of numbers) {
//     if (index > value) {
//       array.push(index);
//     }
//   }

//   return array;
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// ---------------------------------- Module 002 Task 024
// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];

//   return fruits.includes(fruit); // Change this line
// }
// console.log(checkFruit('mandarin'));
// ---------------------------------- Module 002 Task 025
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let array = [];
//   for (const index of array1) {
//     if (array2.includes(index)) {
//       array.push(index);
//     }
//   }

//   return array;
//   // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
// ---------------------------------- Module 002 Task 026
// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (const index of order) {
//     total += index;
//   }

//   // Change code above this line
//   return total;
// }
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// ---------------------------------- Module 002 Task 027
// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const index of numbers) {
//     if (index > value) {
//       filteredNumbers.push(index);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }
// console.log(filterArray([12, 24, 8, 41, 76], 20));
// ---------------------------------- Module 002 Task 028
// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 3;
// console.log(a, b, c, d, e);
// ---------------------------------- Module 002 Task 029
// function getEvenNumbers(start, end) {
//   // Change code below this line
//   let array = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//       array.push(i);
//     }
//   }
//   return array;
// }
// console.log(getEvenNumbers(3, 11));
// ---------------------------------- Module 002 Task 030
// const start = 6;
// const end = 27;
// let number;
// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);
// ---------------------------------- Module 002 Task 031
// function findNumber(start, end, divisor) {
//   // Change code below this line
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
//   return 0;
//   // Change code above this line
// }
// console.log(findNumber(16, 35, 7));
// ---------------------------------- Module 002 Task 032
// function includes(array, value) {
//   // Change code below this line
//   for (const index of array) {
//     if (index == value) {
//       return true;
//     }
//   }
//   return false;
//   // Change code above this line
// }
// console.log(includes(['apple', 'plum', 'pear', 'orange'], 'plum'));
// ------------------------------------------------------
// ---------------------------------- Module 003 Task 001
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// console.log(apartment);
// ---------------------------------- Module 003 Task 002
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],

//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };
// console.log(apartment);
// ---------------------------------- Module 003 Task 003
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };
// //Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ---------------------------------- Module 003 Task 004
const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length];
console.log(ownerName);
console.log(ownerPhone);
console.log(ownerEmail);
console.log(numberOfTags);
console.log(firstTag);
console.log(lastTag);
// Change code above this line
// ---------------------------------- Module 003 Task 005
// ---------------------------------- Module 003 Task 006
// ---------------------------------- Module 003 Task 007
// ---------------------------------- Module 003 Task 008
// ---------------------------------- Module 003 Task 009
// ---------------------------------- Module 003 Task 010
// ---------------------------------- Module 003 Task 011
// ---------------------------------- Module 003 Task 012
// ---------------------------------- Module 003 Task 013
// ---------------------------------- Module 003 Task 014
// ---------------------------------- Module 003 Task 015
// ---------------------------------- Module 003 Task 016
// ---------------------------------- Module 003 Task 017
// ---------------------------------- Module 003 Task 018
// ---------------------------------- Module 003 Task 019
// ---------------------------------- Module 003 Task 020
// ---------------------------------- Module 003 Task 021
// ---------------------------------- Module 003 Task 022
// ---------------------------------- Module 003 Task 023
// ---------------------------------- Module 003 Task 024
// ---------------------------------- Module 003 Task 025
// ---------------------------------- Module 003 Task 026
// ---------------------------------- Module 003 Task 027
// ---------------------------------- Module 003 Task 028
// ---------------------------------- Module 003 Task 029
// ---------------------------------- Module 003 Task 030
// ---------------------------------- Module 003 Task 031
// ---------------------------------- Module 003 Task 032
// ---------------------------------- Module 003 Task 033
// ---------------------------------- Module 003 Task 034
// ---------------------------------- Module 003 Task 035
// ---------------------------------- Module 003 Task 036
// ---------------------------------- Module 003 Task 037
// ---------------------------------- Module 003 Task 038
// ---------------------------------- Module 003 Task 039
// ---------------------------------- Module 003 Task 040
// ---------------------------------- Module 003 Task 041
// ------------------------------------------------------
console.log('JS - The End.');
