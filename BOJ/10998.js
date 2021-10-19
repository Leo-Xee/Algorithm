/*
  boj.kr/10998

  1 2
 */

const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split(' ');
let a = Number(input[0]);
let b = Number(input[1]);
console.log(a * b);
