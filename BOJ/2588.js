/*
  boj.kr/2588

  472
  385
 */

const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
console.log(input);
const a = Number(input[0]);
const num = Number(input[1]);
const oneNum = num % 10;
const tenNum = Math.floor((num % 100) / 10);
const hundredNum = Math.floor(num / 100);

console.log(a * oneNum);
console.log(a * tenNum);
console.log(a * hundredNum);
console.log(a * num);
