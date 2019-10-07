//# Data types
//1. Declare a variable on each type using two options: plain creation, creation with constructor.
let stringVariable = 'inserted text';
let numericVariable = 15;
let booleanVariable = true;
let objectVariable = {first: "objects first value"};
let nullVariable = null;
let undefinedVariable;

//2. Use operator typeof on each of them.
console.log(typeof stringVariable);
console.log(typeof numericVariable);
console.log(typeof booleanVariable);
console.log(typeof objectVariable);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);

//3. Demonstrate object's references.
//Will provide after discussing the topic on the lesson

//4. Demonstrate string's backticks features.
let backticksVariable = `This text will have a:
- new line here
- "${stringVariable}" from some string variable
- value = ${numericVariable * 3} multiplied by 3 value from variable
- "${objectVariable.first}" value from the first object key`

console.log(backticksVariable);

//# Additional
//1. Declare an array containing different data types.
let arrayVariable = ['text1', 1, 'text2', 2, 3, true, null]

//2. Iterate through it and collect amount of each data type to object.
let objectTypesCounter = {};

arrayVariable.forEach(function(item) {
  if (objectTypesCounter[typeof item] === undefined) {
    objectTypesCounter[typeof item] = 1;
    }
  else {
    objectTypesCounter[typeof item] += 1;
  }
})