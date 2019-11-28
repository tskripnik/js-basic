//# Recursion
//1. Make a function which will flat passed array i. e. : ``[1, [2, 3], [4, [5]]]` ->  [1, 2, 3, 4, 5].

let final = [];

function makeArrayFlat(array) {
  array.forEach(element => {
    if(Array.isArray(element)) {
      makeArrayFlat(element);
    } else {
      final.push(element);
    }
  })
  return final;
}

console.log(makeArrayFlat([1, [2, 3], [4, [5, 6, [7, 8]]]]));

//2. https://www.codewars.com/kata/586f6741c66d18c22800010a .

const sequenceSum = (begin, end, step) => {
    if(end < begin) {
      return 0;
    } else {
      return begin + sequenceSum(begin + step, end, step);
    }    
};

//3. https://www.codewars.com/kata/5694cb0ec554589633000036 .

const factorial = n => {
    if(n > 1) {
      return n * factorial (n - 1);
    } else {
      return 1;
    }
  };
  
//4. https://www.codewars.com/kata/5500d54c2ebe0a8e8a0003fd .

function mygcd(x,y){
    const t = y;
    y = x % y;
    x = t;
    
    if (y == 0) {
      return x;
    } else {
      return mygcd(x,y);
    }
  }
