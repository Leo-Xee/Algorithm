/*
  boj.kr/10818

  5
  20 10 35 30 7
  */

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = +input[0];
const numbers = input[1].split(' ').map((item) => +item);

let max = numbers[0];
let min = numbers[0];

for (let i = 1; i < num; ++i) {
  if (max < numbers[i]) {
    max = numbers[i];
  }
  if (min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(`${min} ${max}`);
