/**
  boj.kr/10430
 
  5 8 4
 */

const fs = require('fs');
const input = fs.readFileSync('./input.txt').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);
console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);
console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
