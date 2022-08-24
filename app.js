'use strict';

console.log('Hello JS');
// mutable and immutable

let originalUser = {
  username: 'dceddia',
  firstName: 'Dave',
  lastName: 'Ceddia',
  address: 'Mandalay',
};

const { address, ...userWithoutAddress } = originalUser;
console.log(originalUser);
