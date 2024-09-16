// https://gist.github.com/Mike-Savin/27922f83c368fd1cf636b65abb760874
// task4.js

function generateUpToMatch(expectedArray, generatedArrayLength) {
  const min = Math.min(...expectedArray);
  const max = min + 2;
    
  const result = [];
    
  for(let i = 0; i < generatedArrayLength - expectedArray.length; i++) {
    result.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  result.push(...expectedArray);
  console.log(result);
}

generateUpToMatch([1, 2, 3], 10);
generateUpToMatch([6, 6], 4);