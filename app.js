'use strict';

console.log('Hello JS');
const nums = [1, 2, 3, 4];
// const user = {
//   name: 'Thet',
//   age: 26,
//   grade: 'A',
//   level: 5,
// };

// const { name, ...otherProperties } = user;
// console.log(otherProperties);

const [a, b, ...restNums] = nums;
console.log(restNums);

const students = ['first', 'second', 'three', 'four', 'five'];

const [first, second, ...noDiscount] = students;

console.log(noDiscount);
