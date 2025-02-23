let number = 10369;

let d1 = number % 10000 % 2;
let d2 = number % 10000 % 1;
let d3 = number % 10000 % 6;
let d4 = number % 10000 % 11;
let d5 = number % 10000 % 40;

console.log(`${d1} ${d2} ${d3} ${d4} ${d5}`);