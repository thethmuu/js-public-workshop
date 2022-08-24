'use strict';
// var, let
// var -> function scope
// let -> block scope

// don't use var

function testScope() {
  var outerVar = 'outer var';
  let outerLet = 'outer let';
  console.log(outerVar, outerLet);

  if (true) {
    var innerVar = 'inner var';
    let innerLet = 'inner let';
    console.log(innerVar, innerLet);
  }
    
  console.log(innerVar, innerLet);
}

testScope();
