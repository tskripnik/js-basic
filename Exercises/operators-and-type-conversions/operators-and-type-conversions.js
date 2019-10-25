// Operators/Type Conversation
// 1. Get `100` using `+` operator and numeric value `10`.
const stringWithNumber = 10 + '0';
console.log(stringWithNumber);

// 2. You have following string: `Amazon annual revenue of US$232.887 billion` extract revenue and count monthly income.
let phrase = 'Amazon annual revenue of US$232.887 billion';

let regularExpession = phrase.match(/([\d.]+)\s+(\S+)/);

function monthRevenueCalculator(number) {
  return (Math.round(number * 100 / 12) / 100);
}

console.log(`Amazon monthly revenue is ${monthRevenueCalculator(regularExpession[1])} ${regularExpession[2]}`);

// 3. Declare variable which will contain logs counter. Log few times with updating this value accordingly.
let logs = 0;
console.log(`Logs counter updates before logging: ${++logs}`);
console.log(`Logs counter updates after logging: ${logs++}`);
console.log(`Logs counter updates again before logging: ${++logs}`);
