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
// ------------------------------------------------------
console.log('JS - The End.');
