//# Data types
//1. Declare a variable on each type using two options: plain creation, creation with constructor.
let stringVariable = 'inserted text';
let numericVariable = 15;
let booleanVariable = true;
let objectVariable = {first: 'objects first value'};
let nullVariable = null;
let undefinedVariable;
let symbolVariable = Symbol('hidden');
let bigIntVariable = BigInt(Number.MAX_SAFE_INTEGER * 2);
let stringConsturctorVariable = new String('string created using a constructor');
let numberConsturctorVariable = new Number(123);
let booleanConsturctorVariable = new String(true);

//2. Use operator typeof on each of them.
console.log(typeof stringVariable);
console.log(typeof numericVariable);
console.log(typeof booleanVariable);
console.log(typeof objectVariable);
console.log(typeof nullVariable);
console.log(typeof undefinedVariable);
console.log(typeof symbolVariable);
console.log(typeof bigIntVariable);
console.log(typeof(stringConsturctorVariable));
console.log(typeof(numberConsturctorVariable));
console.log(typeof(booleanConsturctorVariable));

//3. Demonstrate object's references.
let parent = {name: 'Jack', age: 27, isAlive: true, children: {name: 'Amily', age: 2, isAlive: true}};
let linkToParentObj = parent;
let copyParentObj = Object.assign({}, parent);

linkToParentObj.age = 30;
copyParentObj.name = 'Dan';
copyParentObj.children.age = 5;

console.log('Original object:' + JSON.stringify(parent));
console.log('Does linked object equal original? Answer: ' + (linkToParentObj == parent));
console.log('Does copied object equal original? Answer: ' + (copyParentObj == parent) + ', BUT!');
console.log('Are children objects inside copied and original object equal? Answer: '
 + (copyParentObj.children == parent.children) + '. See copied object: ' + JSON.stringify(copyParentObj));


//4. Demonstrate string's backticks features.
let backticksVariable = `This text will have a:
- new line here
- "${stringVariable}" from some string variable
- value = ${numericVariable * 3} multiplied by 3 value from variable
- "${objectVariable.first}" value from the first object key`;

console.log(backticksVariable);

//# Additional
//1. Declare an array containing different data types.
let arrayVariable = ['text1', 1, 'text2', 2, 3, true, null];

//2. Iterate through it and collect amount of each data type to object.
let objectTypesCounter = {};

arrayVariable.forEach(function(item) {
  if (objectTypesCounter[typeof item] === undefined) {
    objectTypesCounter[typeof item] = 1;
  }
  else {
    objectTypesCounter[typeof item] += 1;
  }
});

console.log(objectTypesCounter);
