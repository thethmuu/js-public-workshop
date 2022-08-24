'use strict';

console.log('Hello JS');

const nums = [1, 2, 3, 4, 5, 6, 7];

// reduce -> (callbackFn, initialValue)
nums.reduce((acc, currentItem) => acc + currentItem);
