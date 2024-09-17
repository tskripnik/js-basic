/* eslint-disable no-undef, no-var, vars-on-top, no-use-before-define */

//# Declaration
// 1. Declare a variable which will be encapsulated from global scope.
let nonEncapsulateVariable = true;

if (nonEncapsulateVariable) {
  let encapsulatedVariable = 'Qwerty1!';
}

// 2. Declare a variable which will appear in global object.
var globalVariable = 'homework 1';

// 3. Declare two variables which will be same-names but contain different values.
let sameName = 5;

if (sameName){
  let sameName = 7;
  console.log(sameName);
}

console.log(sameName);

// # Hoisting
// 1. Declare a variable with hoisting.

console.log(hoistingVariable);

var hoistingVariable = 'some value';