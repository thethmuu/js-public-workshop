'use strict';

console.log('Hello JS');

const users = [
  {
    id: 1,
    name: 'Thet',
  },
  {
    id: 2,
    name: 'Hmuu',
  },
  {
    id: 3,
    name: 'John',
  },
];
// find
// return -> only one item
const userWithIDone = users.findIndex((user) => user.id === 4);
console.log(userWithIDone);
// findIndex
// return index
// return -1 if not exist
if (userWithIDone >= 0) {
  console.log('it exists');
} else {
  console.log('not exist');
}
