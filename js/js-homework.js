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

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line
// console.log(ownerName);
// console.log(ownerPhone);
// console.log(ownerEmail);
// console.log(numberOfTags);
// console.log(firstTag);
// console.log(lastTag);
// // Change code above this line
// ---------------------------------- Module 003 Task 005
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// //
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line
// console.log(aptRating);
// console.log(aptDescr);
// console.log(aptPrice);
// console.log(aptTags);
// ---------------------------------- Module 003 Task 006
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

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');
// // Change code below this line
// console.log(apartment);
// ---------------------------------- Module 003 Task 007
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// // Change code below this line
// console.log(apartment);
// ---------------------------------- Module 003 Task 008
// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   // Change code below this line
//   name,
//   price,
//   image,
//   tags,

//   // Change code above this line
// };
// console.log(product);
// ---------------------------------- Module 003 Task 009
// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };
// console.log(credentials);
// ---------------------------------- Module 003 Task 010
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// ---------------------------------- Module 003 Task 011
// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }
// console.log(apartment);
// console.log(keys);
// console.log(values);
// ---------------------------------- Module 003 Task 012
// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps(apartment));
// ---------------------------------- Module 003 Task 013
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(values);
// console.log(keys);
// console.log(apartment);
// ---------------------------------- Module 003 Task 014
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;

//   for (const key of Object.keys(object)) {
//     propCount += 1;
//   }

//   return propCount;
//   // Change code above this line
// }
// console.log(countProps(apartment));
// ---------------------------------- Module 003 Task 015
// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);
// // ---------------------------------- Module 003 Task 016
// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line
//   for (const value of Object.values(salaries)) {
//     totalSalary += value;
//   }
//   // Change code above this line
//   return totalSalary;
// }
// ---------------------------------- Module 003 Task 017
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// // Change code below this line
// ---------------------------------- Module 003 Task 018
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];
// function getProductPrice(productName) {
//   // Change code below this line
//   for (const product of products) {
//     if (product.name == productName) {
//       return product.price;
//     }
//   }
//   return null;
//   // Change code above this line
// }
// console.log(getProductPrice('Radar'));
// console.log(getProductPrice('Grip'));
// console.log(getProductPrice('Scanner'));
// console.log(getProductPrice('Droid'));
// console.log(getProductPrice('Engine'));
// ---------------------------------- Module 003 Task 019
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//   const arrayValues = [];
//   for (const product of products) {
//     if (product[propName]) {
//       arrayValues.push(product[propName]);
//     }
//   }

//   return arrayValues;
//   // Change code above this line
// }
// console.log(getAllPropValues('name'));
// console.log(getAllPropValues('quantity'));
// console.log(getAllPropValues('price'));
// console.log(getAllPropValues('category'));

// ---------------------------------- Module 003 Task 020
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки

//   for (const product of products) {
//     if (product.name == productName) {
//       return product.price * product.quantity;
//     }
//   }

//   return 0;

//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice('Radar'));
// console.log(calculateTotalPrice('Grip'));
// console.log(calculateTotalPrice('Scanner'));
// console.log(calculateTotalPrice('Droid'));
// ---------------------------------- Module 003 Task 021
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// //const yesterday = highTemperatures.yesterday;
// //const today = highTemperatures.today;
// //const tomorrow = highTemperatures.tomorrow;
// const { yesterday, today, tomorrow } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// ---------------------------------- Module 003 Task 022
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const {
//   yesterday,
//   today,
//   tomorrow,
//   icon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
// } = highTemperatures;
// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;
// ---------------------------------- Module 003 Task 023
// /const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
//   icon: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// };
// // Change code below this line
// //const highYesterday = highTemperatures.yesterday;
// //const highToday = highTemperatures.today;
// //const highTomorrow = highTemperatures.tomorrow;
// //const highIcon = highTemperatures.icon;
// const {yesterday: highYesterday,
//        today: highToday,
//        tomorrow: highTomorrow,
//        icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg", } = highTemperatures;
// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
// ---------------------------------- Module 003 Task 024
// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// ---------------------------------- Module 003 Task 025
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Change code below this line

// //const highToday = forecast.today.high;
// //const lowToday = forecast.today.low;
// //const todayIcon = forecast.today.icon;

// //const highTomorrow = forecast.tomorrow.high;
// //const lowTomorrow = forecast.tomorrow.low;
// //const tomorrowIcon = forecast.tomorrow.icon;

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//   },
// } = forecast;
// ---------------------------------- Module 003 Task 026
// function calculateMeanTemperature(forecast) {
//   //const todayLow = forecast.today.low;
//   //const todayHigh = forecast.today.high;
//   //const tomorrowLow = forecast.tomorrow.low;
//   //const tomorrowHigh = forecast.tomorrow.high;

//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;
//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }
// ---------------------------------- Module 003 Task 027
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// ---------------------------------- Module 003 Task 028
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// ---------------------------------- Module 003 Task 029
// const defaultSettings = {
//   theme: 'light',
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };
// ---------------------------------- Module 003 Task 030
// function makeTask(data) {
//   const completed = false;
//   const category = 'General';
//   const priority = 'Normal';
//   // Change code below this line
//   return { completed, category, priority, ...data };
//   // Change code above this line
// }
// ---------------------------------- Module 003 Task 031
// function add(...args) {
//   // Change code above this line
//   let total = 0;

//   for (const i in args) {
//     total += args[i];
//   }
//   return total;
// }
// console.log(add(74, 11, 62, 46, 12, 36));
// ---------------------------------- Module 003 Task 032
// Change code below this line
// function addOverNum(minNumber, ...args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > minNumber) {
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));
// ---------------------------------- Module 003 Task 033
// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line

//   for (const arg of args) {
//     if (array.includes(arg)) {
//       matches.push(arg);
//     }
//   }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// ---------------------------------- Module 003 Task 034
// const bookShelf = {
//   // Change code below this line
//   books: ['The last kingdom', 'The guardian of dreams'],
//   getBooks() {
//     return 'Returning all books';
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

//   // Change code above this line
// };
// ---------------------------------- Module 003 Task 035
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };
// ---------------------------------- Module 003 Task 036
// const atTheOldToad = {
//   // Change code below this line
//   potions: [],

//   // Change code above this line
// };
// ---------------------------------- Module 003 Task 037
// const atTheOldToad = {
//   // Change code below this line
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   getPotions() {
//     return this.potions;
//   },
//   // Change code above this line
// };
// ---------------------------------- Module 003 Task 038
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   addPotion(potionName) {
//     // Change code below this line
//     this.potions.push(potionName);
//     // Change code above this line
//   },
// };
// ---------------------------------- Module 003 Task 039
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   removePotion(potionName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(potionName);
//     this.potions.splice(potionIndex, 1);
//     // Change code above this line
//   },
// };
// ---------------------------------- Module 003 Task 040
// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],
//   updatePotionName(oldName, newName) {
//     // Change code below this line
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//     // Change code above this line
//   },
// };
// ---------------------------------- Module 003 Task 041
// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     const { potions } = atTheOldToad;
//     return this.potions;
//   },
//   addPotion(potionName) {
//     const { potions } = atTheOldToad;
//     if (this.potions.includes(potionName)) {
//       return `Potion ${potionName} is already equipped!`;
//     }

//     this.potions.push(potionName);
//   },

//   removePotion(potionName) {
//     const { potions } = atTheOldToad;

//     for (const object of potions) {
//       if (object.name === potionName) {
//         const potionIndex = potions.indexOf(object);

//         return this.potions.splice(potionIndex, 1);
//       }
//     }
//   },

//   updatePotionName(oldName, newName) {
//     const { potions } = atTheOldToad;

//     for (let object of potions) {
//       if (object.name === oldName) {
//         object.name = newName;
//         break;
//       }
//     }
//     return potions;
//   },

//   // Change code above this line
// };
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// );
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// ---------------------------------- Module 004 Task 001
// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza();
// const pointer = makePizza;
// ---------------------------------- Module 004 Task 002
// function deliverPizza(pizzaName) {
//   return `Доставляем пиццу ${pizzaName}.`;
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   return callback(pizzaName);
// }
// console.log(makeMessage('Роял гранд', makePizza));
// console.log(makeMessage('Ультрасыр', deliverPizza));
// ---------------------------------- Module 004 Task 003
// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
//   console.log(`Едим пиццу ${pizzaName}`);
// });
// ---------------------------------- Module 004 Task 004
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//     for (const pizza of this.pizzas) {
//       if (pizza == pizzaName) {
//         return onSuccess(pizzaName);
//       }
//     }
//     return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`);
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(error) {
//   return `Ошибка! ${error}`;
// }

// // Вызовы метода с колбэками
// console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
// console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
// console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
// console.log(pizzaPalace.order('Венская', makePizza, onOrderError));
// ---------------------------------- Module 004 Task 005
// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }

//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };
// ---------------------------------- Module 004 Task 006
// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']
// ---------------------------------- Module 004 Task 007
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${
//     position + 1
//   }-й в очереди.`;
// }

// const messages = [];
// const { order } = orders;
// for (let i = 0; i < orders.length; i += 1) {
//   messages.push(composeMessage.call(orders[i], i));
// }
// console.log(messages);
// ---------------------------------- Module 004 Task 008
// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }
// ---------------------------------- Module 004 Task 009
// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');
// ---------------------------------- Module 004 Task 010
// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter(e => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction(
//   'kiwi@mail.uk',
//   service.subscribe.bind(service),
// );
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com',
//     'poly@hotmail.de',
//     'ajax@jmail.net',
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction(
//   'poly@hotmail.de',
//   service.unsubscribe.bind(service),
// );
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.
// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
// ---------------------------------- Module 005 Task 001
// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;
// ---------------------------------- Module 005 Task 002
// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки
// ---------------------------------- Module 005 Task 003
// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// ---------------------------------- Module 005 Task 004
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// ---------------------------------- Module 005 Task 005
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }
// Car.prototype.getPrice = function () {
//   return this.price;
// };
// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };
// ---------------------------------- Module 005 Task 006
// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   for (const itemI of this.items) {
//     if (itemI == item) {
//       this.items.splice(this.items.indexOf(itemI), 1);
//       return;
//     }
//   }
// };
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// ---------------------------------- Module 005 Task 007
// function StringBuilder(baseValue) {
//   this.value = baseValue;
// }
// StringBuilder.prototype.getValue = function () {
//   return this.value;
// };
// StringBuilder.prototype.padEnd = function (str) {
//   return (this.value = this.value + str);
// };
// StringBuilder.prototype.padStart = function (str) {
//   return (this.value = str + this.value);
// };
// StringBuilder.prototype.padBoth = function (str) {
//   return (this.value = str + this.value + str);
// };

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// ---------------------------------- Module 005 Task 008
// class Car {};
// ---------------------------------- Module 005 Task 009
// class Car {
//   brand;
//   model;
//   price;

//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// ---------------------------------- Module 005 Task 010
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }
// ---------------------------------- Module 005 Task 011
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }
//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }
// ---------------------------------- Module 005 Task 012
// class Storage {
//   #items;
//   constructor(items) {
//     this.#items = items;
//   }
//   getItems() {
//     return this.#items;
//   }
//   addItem(newItem) {
//     this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }
// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
// ---------------------------------- Module 005 Task 013
// class StringBuilder {
//   #value;
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }
// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='
// ---------------------------------- Module 005 Task 014
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }
// ---------------------------------- Module 005 Task 015
// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     }
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
// ---------------------------------- Module 005 Task 016
// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
//   static checkPrice(price) {
//     if (price > this.#MAX_PRICE) {
//       return 'Внимание! Цена превышает допустимую.';
//     }
//     return 'Всё хорошо, цена в порядке.';
//   }
//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }
// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });
// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
// ---------------------------------- Module 005 Task 017
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки
// class Admin extends User {
//   static AccessLevel = { BASIC: 'basic', SUPERUSER: 'superuser' };
// }
// ---------------------------------- Module 005 Task 018
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
//   accessLevel;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// ---------------------------------- Module 005 Task 019
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
//   blacklistedEmails;
//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser',
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true
// ---------------------------------- Module 006 Task 001
// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   //for (let i = 0; i < orderedItems.length; i += 1) {
//   //  totalPrice += orderedItems[i];
//   //}

//   orderedItems.forEach(element => {
//     totalPrice += element;
//   });
//   // Пиши код выше этой строки
//   return totalPrice;
// }
// ---------------------------------- Module 006 Task 002
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Пиши код ниже этой строки

//   //for (let i = 0; i < numbers.length; i += 1) {
//   //  if (numbers[i] > value) {
//   //    filteredNumbers.push(numbers[i]);
//   //  }
//   //}
//   numbers.forEach(element => {
//     if (element > value) {
//       filteredNumbers.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return filteredNumbers;
// }
// ---------------------------------- Module 006 Task 003
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Пиши код ниже этой строки

//   //for (let i = 0; i < firstArray.length; i += 1) {
//   //  if (secondArray.includes(firstArray[i])) {
//   //    commonElements.push(firstArray[i]);
//   //  }
//   //}

//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   return commonElements;
//   // Пиши код выше этой строки
// }
// ---------------------------------- Module 006 Task 004
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// };
// ---------------------------------- Module 006 Task 005
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// ---------------------------------- Module 006 Task 006
// const calculateTotalPrice = orderedItems => {
//   let totalPrice = 0;

//   orderedItems.forEach(item => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// ---------------------------------- Module 006 Task 007
// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });

//     // Пиши код выше этой строки
//     return filteredNumbers;
//   }
// ---------------------------------- Module 006 Task 008
// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];
//   firstArray.forEach(element => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   // Пиши код выше этой строки
//   return commonElements;
// };
// ---------------------------------- Module 006 Task 009
// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] + value);
//     } else {
//       newNumbers.push(numbers[i]);
//     }
//   }
//   return newNumbers;
//   // Пиши код выше этой строки
// }
// console.log(changeEven([17, 24, 68, 31, 42], 100));
// ---------------------------------- Module 006 Task 010
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths);
// ---------------------------------- Module 006 Task 011
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const titles = books.map(book => book.title);
// console.log(titles);
// ---------------------------------- Module 006 Task 012
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика'],
//   },
// ];
// // Пиши код ниже этой строки

// const genres = books.flatMap(book => book.genres);
// ---------------------------------- Module 006 Task 013
// users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     skills: ['ipsum', 'lorem'],
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     skills: ['adipisicing', 'irure', 'velit'],
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     skills: ['ex', 'culpa', 'nostrud'],
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     skills: ['non', 'amet', 'ipsum'],
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     skills: ['lorem', 'veniam', 'culpa'],
//     gender: 'female',
//     age: 39,
//   },
// ];
// const getUserNames = users => {
//   return users.map(user => user.name);
// };
// console.log(getUserNames(users));
// ---------------------------------- Module 006 Task 014
// // Пиши код ниже этой строки
// const getUserEmails = users => {
//     return users.map(user => user.email);

//   };
//   // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 015
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(value => value % 2 === 0);
// const oddNumbers = numbers.filter(value => value % 2 != 0);
// ---------------------------------- Module 006 Task 016
// const books = [
//   {
//     title: 'Последнее королевство',
//     author: 'Бернард Корнуэлл',
//     genres: ['приключения', 'историческое'],
//   },
//   {
//     title: 'На берегу спокойных вод',
//     author: 'Роберт Шекли',
//     genres: ['фантастика', 'мистика'],
//   },
//   {
//     title: 'Красна как кровь',
//     author: 'Ли Танит',
//     genres: ['ужасы', 'мистика', 'приключения'],
//   },
// ];
// // Пиши код ниже этой строки
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (course, index, array) => array.indexOf(course) === index,
// );
// ---------------------------------- Module 006 Task 017
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author == AUTHOR);
// console.log(topRatedBooks);
// console.log(booksByAuthor);
// ---------------------------------- Module 006 Task 018
// // Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//   return users.filter(user => user.eyeColor == color);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 019
// // Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  return users.filter(user => user.age > minAge && user.age < maxAge);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 020
// // Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//    return users.filter(user => user.friends.includes(friendName));
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 021
// Пиши код ниже этой строки
// users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male',
//     age: 37,
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female',
//     age: 34,
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male',
//     age: 24,
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female',
//     age: 21,
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male',
//     age: 27,
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male',
//     age: 38,
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female',
//     age: 39,
//   },
// ];

// const getFriends = users => {
//   let arrayFriends = [];
//   let arrayFriendsFiltered = [];
//   for (const user of users) {
//     arrayFriends.push(...user.friends);
//   }
//   arrayFriendsFiltered = arrayFriends.filter(
//     (item, index) => arrayFriends.indexOf(item) === index,
//   );
//   return arrayFriendsFiltered;
// };

//----------------------- вариант 2 ---------------------
const getFriends = (users, friends) => {
  const allFriends = users.flatMap(user => user.friends);
  return allFriends.filter(
    (friend, index, users) => users.indexOf(friend) === index,
  );
};
//-------------------------------------------------------
// console.log(getFriends(users));
// ---------------------------------- Module 006 Task 022
// // Пиши код ниже этой строки
// const getActiveUsers = users => {
//   return users.filter(user => user.isActive);
// };
// // Пиши код выше этой строки
// console.log(getActiveUsers(users));
// ---------------------------------- Module 006 Task 023
// // Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//    return users.filter(user => !user.isActive);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 024
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// ---------------------------------- Module 006 Task 025
// // Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 026
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0 );
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0 );

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0 );
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0 );

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0 );
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0 );
// ---------------------------------- Module 006 Task 027
// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//    return users.every((user) => user.isActive);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 028
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((value) => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some((value) => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some((value) => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some((value) => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some((value) => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some((value) => value % 2 !== 0);
// ---------------------------------- Module 006 Task 029
// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//    return users.some((user) => user.isActive);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 030
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((total, element) => { return total + element});

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;
// ---------------------------------- Module 006 Task 031
// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки
// const totalAveragePlaytimePerGame = players.reduce((total, player) => { return (total + (player.playtime / player.gamesPlayed)) }, 0);
// ---------------------------------- Module 006 Task 032
// // Пиши код ниже этой строки
// const calculateTotalBalance = users => {
//    return users.reduce((total, users) => {return total + users.balance},0);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 033
// // Пиши код ниже этой строки
// const getTotalFriendCount = users => {
//   return users.reduce((totalFriends, users) =>{return totalFriends + users.friends.length},0);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 034
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();
// ---------------------------------- Module 006 Task 035
// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// ---------------------------------- Module 006 Task 036
// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки

//   const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

//   const authorsInReversedOrder = [...authors].sort((a,b) => b.localeCompare(a));
// ---------------------------------- Module 006 Task 037
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки
// const sortedByAuthorName = [...books].sort((firstAuthor, secondAuthor) => firstAuthor.author.localeCompare(secondAuthor.author));
// const sortedByReversedAuthorName = [...books].sort((firstAuthor, secondAuthor) => secondAuthor.author.localeCompare(firstAuthor.author));
// const sortedByAscendingRating = [...books].sort((firstRating, secondRating) => firstRating.rating - secondRating.rating);
// const sortedByDescentingRating = [...books].sort((firstRating, secondRating) => secondRating.rating - firstRating.rating);
// ---------------------------------- Module 006 Task 038
// const sortByAscendingBalance = users => {
//    return users.sort((minBalance, maxBalance) => minBalance.balance - maxBalance.balance);
// };
// ---------------------------------- Module 006 Task 039
// // Пиши код ниже этой строки
// const sortByDescendingFriendCount = users => {
//   return [...users].sort((maxFriendCount, minFriendCount) => minFriendCount.friends.length - maxFriendCount.friends.length );
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 040
// // Пиши код ниже этой строки
// const sortByName = users => {
//    return [...users].sort((a, b) => a.name.localeCompare(b.name));
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 041
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// const names = books.filter((book) => book.rating > MIN_BOOK_RATING).map((book) => book.author).sort((a, b) => a.localeCompare(b));
// ---------------------------------- Module 006 Task 042
// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = users => {
//       return [...users].sort((maxFriendCount, minFriendCount) =>  maxFriendCount.friends.length - minFriendCount.friends.length ).map((user) => user.name);
// };
// // Пиши код выше этой строки
// ---------------------------------- Module 006 Task 043

// const getSortedFriends = users => {
//   let arrayFriends = [];
//   let arrayFriendsFiltered = [];
//   for (const user of users) {
//     arrayFriends.push(...user.friends);
//   }
//   arrayFriendsFiltered = arrayFriends
//     .sort()
//     .filter((item, index) => arrayFriends.indexOf(item) === index);
//   return arrayFriendsFiltered;
// };
// console.log(getSortedFriends(users));
// ---------------------------------- Module 006 Task 044
// const getTotalBalanceByGender = (users, gender) => {
//   return [...users]
//     .filter(user => user.gender === gender)
//     .reduce((totalBalance, users) => {
//       return totalBalance + users.balance;
//     }, 0);
// };
// console.log(getTotalBalanceByGender(users, 'male'));
// ------------------------------------------------------

console.log('JS - The End.');
