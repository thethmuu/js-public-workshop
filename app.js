'use strict';

console.log('Hello JS');
// map -> return new array modifying data on original array
const users = [
  {
    id: 1,
    name: 'Thet',
  },
  {
    id: 2,
    name: 'Thet',
  },
  {
    id: 3,
    name: 'Thet',
  },
];
const allNames = users.map((user) => {
  return user.name;
});

console.log(allNames);
