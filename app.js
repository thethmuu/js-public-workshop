// 'use strict';
const getName = (name) => {
  return name;
};

// implicit return
const getNameNew = (name) => name;

// React code
// function CardComponent() {
//     return (
//       <div class='card'>
//         <h1>Title</h1>
//         <p>Description</p>
//       </div>
//     );
// }

const cardEl = document.createElement('div');
cardEl.classList.add('card');

// arrow fun
const CardComponent = () => (
  <div class='card'>
    <h1>Title</h1>
    <p>Description</p>
  </div>
);
