// # Functions
// 1. Create a function declaration, function expression, lambda function, and using function object.
function functionDeclaration(one, two) {
  return (one > two) ? 'You win' : 'You lose';
}

console.log(functionDeclaration(Math.random(), Math.random()));

const functionExpression = function(format){
  if(format === 'date'){
    return new Date().getDate();
  } else if (format === 'month'){
    return new Date().getMonth() + 1;
  }
};

console.log(functionExpression('month'));

let lambdaOrArrowFunction = agrument => agrument ? 'Success usage with argument!' : 'No arguments passed';
console.log(lambdaOrArrowFunction('smth'));

const assignedFunction = functionDeclaration;
console.log(assignedFunction(Math.random(), Math.random()));

// 2. Get parameters amount of function `takeMyParametersAmount`.
// didn't get how this task differs from the next one.
function takeMyParametersAmount(a, b, c) {
  return arguments.length;
}

console.log(takeMyParametersAmount('first', 'second'));

// 3. Create a function and log all passed parameters to it. Check the `length` of this function.
function getInfoAboutArguments(){
  for(i = 0; i < arguments.length; i++) {
    console.log('Passed argument is: ' + arguments[i]);
  }
  console.log('Arguments length is: ' + arguments.length);
}

getInfoAboutArguments('a','b','c');

// 4. Using anonymous function encapsulate function body from global scope.
successFunction();
nonSuccessFunction();

function successFunction(){
  console.log('It works!');
}

const nonSuccessFunction = function (){
  console.log('Usage before initialization will throw an error');
};